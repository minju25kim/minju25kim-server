import { style, globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: '0',
  padding: '0',
  boxSizing: 'border-box',
});

globalStyle(':root', {
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  lineHeight: '1.5',
  fontWeight: '400',
  colorScheme: 'light dark',
  color: 'rgba(255, 255, 255, 0.87)',
  backgroundColor: '#242424',
  fontSynthesis: 'none',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('a', {
  fontWeight: '500',
  color: '#646cff',
  textDecoration: 'inherit',
});

globalStyle('a:hover', {
  color: '#535bf2',
});

globalStyle('body', {
  margin: '0',
  display: 'flex',
  placeItems: 'center',
  minWidth: '320px',
  minHeight: '100vh',
});

globalStyle('h1', {
  fontSize: '3.2em',
  lineHeight: '1.1',
});

globalStyle('#app', {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '2rem',
  textAlign: 'center',
});

export const buttonStyle = style({
  backgroundColor: '#ccffee',
  color: 'blue',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1em',
  fontWeight: '500',
  fontFamily: 'inherit',
  transition: 'border-color 0.25s',
  ':focus': {
    outline: '4px auto -webkit-focus-ring-color',
  },
  ':focus-visible': {
    outline: '4px auto -webkit-focus-ring-color',
  },
  ':hover': {
    color: '#646cff',
  }
});

export const paperStyle = style({
  boxShadow: '0px 0px 50px 0px #C5C5C5',
  margin: '0',
  padding: '20px',
  width: '210mm',
  height: '297mm',
  border: '1px solid grey',
});

export const footerStyle = style({
  marginTop: "50px",
  fontSize: "16px"
});

export const sectionStyle = style({
  border: '1px solid red',
})