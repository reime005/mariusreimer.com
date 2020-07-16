module.exports = {
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
        name: 'Marius Reimer',
        short_name: 'Marius Reimer',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#4278bd',
        display: 'minimal-ui',
        // icon: `src/assets/icon.png`,
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
  ],
};
