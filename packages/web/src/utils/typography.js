import Typography from 'typography';
import './main.css';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Lato',
      styles: ['300', '400', '400i', '700', '700i', '900', '900i'],
    },
  ],
  headerFontFamily: ['Lato', 'Georgia', 'serif'],
  bodyFontFamily: ['Lato', 'Georgia', 'serif'],
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
