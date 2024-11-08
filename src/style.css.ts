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
  fontSynthesis: 'none',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('body', {
  display: 'flex',
  placeItems: 'center',
  minWidth: '320px',
  minHeight: '100vh',
});

globalStyle('#app', {
  // border: '0.5px solid red',
  maxWidth: '1280px',
  margin: '1rem auto',
  padding: '1rem',
  textAlign: 'center',
  display: 'flex',
  flexFlow: 'column wrap',
  gap: '1rem'
});

globalStyle('h1', {
  // border: '0.5px solid red',
  fontSize: '3rem',
  lineHeight: '1',
});

globalStyle('a', {
  fontWeight: '600',
  color: '#646cff',
  textDecoration: 'inherit',
});

globalStyle('a:hover', {
  color: '#878dfa',
});

export const buttonContainerStyle = style({
  // border: '0.5px solid red',
  display: 'flex',
  justifyContent: 'space-between',
  columnGap: '1rem'
})

export const buttonStyle = style({
  flex: '1',
  background: '#fff',
  color: '#646cff',
  border: '2px solid #646cff',
  padding: '10px 20px',
  borderRadius: '1rem',
  fontSize: '1rem',
  fontWeight: '600',
  // width: '180px',
  height: '3rem',
  fontFamily: 'inherit',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: '10px',
  selectors: {
    '&:hover': {
      background: '#646cff',
      color: '#fff',
      border: '2px solid transparent',
    },
  }
});

export const paperStyle = style({
  border: '0.5px solid #fff',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.05)',
  margin: '0',
  padding: '1rem',
  width: '210mm',
  height: '297mm',
});

export const basicStyle = style({
  // border: '0.5px solid red',
  fontSize: '1.2rem',
  display: 'flex',
  flexFlow: 'column wrap',
  marginBottom: '10px'
})

export const basicHeadlineStyle = style({
  // border:  '0.5px solid red',
  fontSize: '1rem',
  color: '#5c5c5c'
})

export const basicInfoStyle = style({
  // border: '0.5px solid gray',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  gap: '30px',
  fontSize: '1rem',
  color: '#5c5c5c'
})

export const sectionContainerStyle = style({
  // border: '0.5px solid black',
  display: 'grid',
  gridTemplateColumns: '1fr 6fr',
  gridAutoRows: 'auto',
  rowGap: '1rem',
  // padding: '1rem', 
})

export const sectionLeftItemStyle = style({
  // border: '0.5px solid red',
  gridColumn: '1 / 2',
  padding: '0 1rem',
})

export const sectionRightItemStyle = style({
  // border: '0.5px solid blue',
  gridColumn: '2 / end',
  textAlign: 'left',
  padding: '0 1rem',
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  gap: '1rem',
  selectors: {
    '&:nth-child(2)': {
      flexFlow: 'row nowrap',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
  },
})

export const itemLogoStyle = style({
  // border: '0.5px solid blue',
  display: 'flex',
  flexFlow: 'row wrap',
  gap: '5px',
})

export const itemInfoStyle = style({
  // border: '0.5px solid purple',
  display: 'flex',
  justifyContent: 'space-between',
  color: '#5c5c5c'
})

export const itemKeywordStyle = style({
  // border: '0.5px solid maroon',
  border: '1px solid #5c5c5c',
  padding: '0 5px',
  borderRadius: '5px',
  selectors: {
    '&:nth-of-type(1)': {
      marginLeft: '5px'
    }
  }
})

export const itemSummaryStyle = style({
  // border: '0.5px solid pink',
  lineHeight: '1.6',
  listStylePosition: 'inside',
  selectors: {
    '&:last-child': {
      marginBottom: '0',
    },
  },
})

export const footerStyle = style({
  marginTop: "3rem",
  fontSize: "16px"
});