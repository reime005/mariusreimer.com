const path = require('path');
const { slash } = require('gatsby-core-utils');

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig();
  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules[/\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view|react-native-htmlview|@fortawesome)/,
    use: {
      loader: 'babel-loader',
      options: {
        // Disable reading babel configuration
        babelrc: false,
        configFile: false,

        // The configration for compilation
        presets: [
          ['@babel/preset-env', { useBuiltIns: 'usage' }],
          '@babel/preset-react',
          '@babel/preset-flow',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'babel-plugin-remove-graphql-queries',
          '@babel/plugin-proposal-object-rest-spread',
          [
            'module-resolver',
            {
              alias: {
                '^react-native$': 'react-native-web',
              },
            },
          ],
        ],
      },
    },
  });
  actions.replaceWebpackConfig(config);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // query content for WordPress posts
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            id
            categories {
              id
              name
              slug
            }
          }
        }
      }
    }
  `);

  const finalResult = {
    data: {
      allWordpressPost: {
        edges: [],
      },
    },
  };

  result.data.allWordpressPost.edges.forEach((post, i) => {
    if (post.node.categories.some(category => /blog/i.test(category.name))) {
      finalResult.data.allWordpressPost.edges.push(post);
    }
  });

  const postTemplate = path.resolve('src/templates/PostTemplate.tsx');

  const pageSize = 10;

  const createPaginationPages = ({ allWordpressPost }, createPage) => {
    const pageCount = Math.ceil(allWordpressPost.edges.length / pageSize);
    return Array.from({ length: pageCount }).map((_, index) =>
      createPage({
        path: `/blog/${index + 1}`,
        component: path.resolve('./src/templates/BlogPageTemplate.tsx'),
        context: {
          skip: index * pageSize,
          limit: pageSize,
          pageCount,
          currentPage: index + 1,
        },
      }),
    );
  };

  //TODO: [mr] query include category in
  const createDetailPages = ({ allWordpressPost }, createPage) => {
    return Array.from({ length: allWordpressPost.edges.length }).map(
      (node, index) => {
        return createPage({
          path: '/blog/id/' + allWordpressPost.edges[index].node.slug,
          component: path.resolve('./src/templates/PostTemplate.tsx'),
          context: {
            id: allWordpressPost.edges[index].node.id,
            currentPage: Math.ceil((index + 1) / pageSize),
          },
        });
      },
    );
  };

  // const allProjectPages = require('./allProjectPages.json');

  // const createProjectsPages = ({ allProjectPages }, createPage) => {
  //   return Array.from({ length: allProjectPages.length }).map((_, index) => {
  //     return createPage({
  //       path: `/project/${allProjectPages[index].slug}`,
  //       component: path.resolve('./src/templates/ProjectsPageTemplate.tsx'),
  //       context: {
  //         ...allProjectPages[index],
  //       },
  //     });
  //   });
  // };

  return [
    ...createDetailPages(finalResult.data, createPage),
    ...createPaginationPages(finalResult.data, createPage),
    // ...createProjectsPages({ allProjectPages }, createPage),
  ];
};

// COMMENT THIS TO GENERATE SOURCEMAPS
// If production JavaScript and CSS build
// Turn off source maps
exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
