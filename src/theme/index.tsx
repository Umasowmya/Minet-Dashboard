import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";


declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading: React.CSSProperties;
    heading3: React.CSSProperties;
    subtitle5: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    heading?: React.CSSProperties;
    heading3?: React.CSSProperties;
    subtitle5?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading: true;
    heading3: true;
    subtitle5: true;
  }
}

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#2CE080",
      light: "#E2F2E9",
      dark: "#22C870",
    },
    secondary: {
      main: "#116BE9",
    },
  },
  typography: {
    fontFamily: "Cera Pro",
    heading: {
      fontSize: "36px",
      lineHeight: "45px",
      fontWeight: 700,
    },
    heading3: {
      fontSize: "24px",
      lineHeight: "30.17px",
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "32px",
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "22.63px",
    },
    body1: {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "24px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
    caption: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "22px",
    },
    subtitle5: {
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "25.14px",
    },
  },
});
export default customTheme;

var customStyles = makeStyles({
 
  verticalHeader:{
    
      display:"flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: "absolute",
      width: "80px",
      height: "728px",
      left: "25px",
      top: "30px"
              
  },

  

  one:{
   
    width:"18.64px",
    height:"15.93px",
    left:"6.68px",
   

  },

  checkout:{
    width: "109px",
    height: "34px",
    fontFamily: 'Graphik',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "34px",
    color: "#343446"

  },

  sellButton:{
    width:"120px",
    height: "42px",
    background: "#FFA74F",
    borderRadius: "4px",
    alignItems:"center"

  },

  buyNowButton:{

      width: "108px",
      height: "28px",
      fontFamily: 'Graphik',
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "28px",
      color: "#343446"
    
  },

  choose:{
    width: "114px",
    height: "22px", 
    fontFamily: 'Graphik',
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: '22px',
    letterSpacing: '0.01em',
    color: '#343446'
  },

  coinGrid:{
    display:"flex",  
    flexDirection: "column",
    position:"absolute",
    alignItems:"center",

   
  
  },

  coinName:{
    width: "55px",
    height: "22px",
    lineHeight: "22px",
    color: "#4B4B60"

  },

  footerElement:{
    width: "83px",
    height: "22px",
    fontFamily: 'Graphik',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: "22px",
    color: '#0052FF'

  },

  footerElement2:{
    width: "83px",
    height: "22px",
    fontFamily: 'Graphik',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: "22px",
    color: '#343446'

  },

  footer:{
    position:'absolute',
    top:'100vh',
    left:"80px"
  }
  

});
export { customStyles };