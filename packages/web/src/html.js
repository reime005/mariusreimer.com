import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Personal Website, Blog and App by Marius Reimer. React Native, Flutter and Rust."
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossorigin
        ></link>
        <title>React Native Development | Marius Reimer</title>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.__onThemeChange = function() {};
                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.body.className = newTheme;
                  window.__onThemeChange(newTheme);
                }
                var preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }
                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }
                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                });
                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();
            `,
          }}
        />
        {props.preBodyComponents}
        <div
          key={'body'}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
