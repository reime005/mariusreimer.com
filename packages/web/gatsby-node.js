const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

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
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  const pageSize = 10;

  const createPaginationPages = ({ allData }, createPage) => {
    const pageCount = Math.ceil(allData.edges.length / pageSize);
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

  const createMarkdownPages = ({ allData }, createPage) => {
    return Array.from({ length: allData.edges.length }).map((node, index) => {
      const isMarkdown = allData.edges[index].node.frontmatter;

      const slug =
        (allData.edges[index].node.frontmatter &&
          allData.edges[index].node.frontmatter.slug) ||
        allData.edges[index].node.slug;

      return createPage({
        path: '/blog/id/' + slug,
        component: path.resolve('./src/templates/MarkdownPostTemplate.tsx'),
        context: {
          id: allData.edges[index].node.id,
          slug: isMarkdown && allData.edges[index].node.frontmatter.slug,
          currentPage: Math.ceil((index + 1) / pageSize),
        },
      });
    });
  };

  const allData = {
    edges: [
      ...result.data.allMarkdownRemark.edges,
    ],
  };

  return [
    ...createMarkdownPages(
      {
        allData,
      },
      createPage,
    ),
    // ...createDetailPages(finalResult.data, createPage),
    ...createPaginationPages(
      {
        allData,
      },
      createPage,
    ),
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

const attemptToStoreImage = (url = null) => {
  if (typeof url !== 'string' || !url.length) {
    return;
  }

  if (!fs.existsSync('./public/images')) {
    fs.mkdirSync('./public/images');
  }

  const splits = url.split('/');

  fetch(url)
    .then(r => r.buffer())
    .then(data =>
      fs.writeFileSync(`./public/images/${splits[splits.length - 1]}`, data),
    );
};

const attemptToStoreGists = (gists = null) => {
  if (!Array.isArray(gists) || !gists.length) {
    return;
  }

  if (!process.env.GH_TOKEN) {
    throw 'aborting... GH_TOKEN not in env variables!';
  }

  const authHeader = `token ${process.env.GH_TOKEN}`;

  if (!fs.existsSync('./static/gists')) {
    fs.mkdirSync('./static/gists');
  }

  gists.forEach(gist => {
    const gistPath = `./static/gists/${gist}.json`;

    if (!fs.existsSync(gistPath)) {
      fetch(`https://api.github.com/gists/${gist}`, {
        headers: { Authorization: authHeader },
      })
        .then(res => {
          if (res.ok) {
            res.json().then(data => {
              fs.writeFileSync(gistPath, JSON.stringify(data));
            });
          }
        })
        .catch(error => console.error(error));
    } else {
      console.log(`gist ${gist} already exists`);
    }
  });
};
