import Typography from 'typography';
import './main.css';

const typography = new Typography({
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
