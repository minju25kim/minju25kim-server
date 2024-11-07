import { style, globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: '0',
  padding: '0',
  boxSizing: 'border-box',
  // border: '0.5px solid red'
});

globalStyle(':root', {
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  lineHeight: '1.5',
  fontWeight: '400',
  fontSynthesis: 'none',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('a', {
  fontWeight: '600',
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
  padding: '1rem',
  textAlign: 'center',
  display: 'flex',
  flexFlow: 'column wrap',
  gap: '30px'
});

export const buttonStyle = style({
  backgroundColor: '#ccffee',
  color: 'blue',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  fontSize: '1em',
  fontWeight: '500',
  fontFamily: 'inherit',
});

export const paperStyle = style({
  boxShadow: '0px 0px 50px 0px #C5C5C5',
  margin: '0',
  padding: '10px',
  width: '210mm',
  height: '297mm',
});

export const footerStyle = style({
  marginTop: "50px",
  fontSize: "16px"
});

export const basicStyle = style({
  // border: '1px solid red',
  fontSize: '1.3rem',
  display: 'flex',
  flexFlow: 'column wrap',
  // gap: '5px',
  marginBottom: '10px'
})

export const basicInfoStyle = style({
  // border: '1px solid gray',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  gap: '25px',
  // margin: '10px',
  fontSize: '1rem'
})

export const sectionContainerStyle = style({
  // border: '1px solid black',
  display: 'grid',
  gridTemplateColumns: '1fr 5fr',
  gridTemplateRows: 'repeat(5, minmax(30px, auto))',
  rowGap: '10px'
})

export const sectionLeftItemStyle = style({
  // border: '2px solid red',
  gridColumn: '1 / 2'
})

export const sectionRightItemStyle = style({
  // border: '2px solid blue',
  gridColumn: '2 / end',
  textAlign: 'left',
  padding: '0px 20px 0px 20px',
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  gap: '10px',

  selectors: {
    '&:nth-child(2)': {
      flexFlow: 'row nowrap', 
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
  },
})

export const itemInfoStyle = style({
  // border: '1px solid purple',
  display: 'flex',
  justifyContent: 'space-between',
})

export const itemSummaryStyle = style({
  // border: '1px solid pink',
  marginBottom: '5px',
  listStylePosition: 'inside',
  selectors: {
    '&:last-child': {
      marginBottom: '0', 
    },
  },
})
