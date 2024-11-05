import { style , globalStyle} from '@vanilla-extract/css';

globalStyle('*', {
  margin: '0',
  padding: '0',
  boxSizing: 'border-box',
});

export const buttonStyle = style({
  backgroundColor: '#ccffee',
  color: 'blue',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
});

export const a4Style = style({
  backgroundColor: '#fafafa',
  boxShadow: '0px 0px 50px 0px #C5C5C5',
  width: '210mm', 
  height: '297mm', 
  margin: '0 auto', 
});

export const footerStyle = style({
  // margin: "20px",
  padding: "20px",
  textAlign: "center",
  // backgroundColor: "#f8f8f8",
  color: "#333",
  borderTop: "1px solid #ddd",
  fontSize: "14px"
});