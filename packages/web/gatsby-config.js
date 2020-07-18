module.exports = {
  siteMetadata: {
    title: 'React Native Development | Marius Reimer',
    author: 'Marius Reimer',
    description: 'Personal Website, Blog and App by Marius Reimer. React Native, Flutter and Rust.',
    siteUrl: 'https://mariusreimer.com',
    social: {
      twitter: '@reime005',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        jsxPragma: 'jsx', // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    'gatsby-plugin-react-native-web',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // your WordPress source
        baseUrl: 'w.mariusreimer.com',
        protocol: 'https',
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'React Native Development | Marius Reimer',
        short_name: 'Marius Reimer',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#6246ea',
        display: 'minimal-ui',
        icon: 'static/icons/icon-144x144.png',
        theme_color_in_head: false,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3000,
        production: true,
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg', 'json']
      }
    }
  ],
};
