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
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/solid.min.css"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="light">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {

                window.__onThemeChange = function() {}
                var preferredTheme
                try {
                  preferredTheme = localStorage.getItem('theme')
                } catch (err) { }
                function setTheme(newTheme) {
                  if (preferredTheme && document.body.classList.contains(preferredTheme)) {
                    document.body.classList.replace(preferredTheme, newTheme)
                  } else {
                    document.body.classList.add(newTheme)
                  }
                  window.__theme = newTheme
                  preferredTheme = newTheme
                  window.__onThemeChange(newTheme)
                }
                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme)
                  try {
                    localStorage.setItem('theme', newTheme)
                  } catch (err) {}
                }
                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                })
                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))

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

        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/js/solid.min.js" />
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
