import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading: React.CSSProperties;
    heading3: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    subtitle5: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    heading?: React.CSSProperties;
    heading3?: React.CSSProperties;
    subtitle5?: React.CSSProperties;
    subtitle1?: React.CSSProperties;
    subtitle2?: React.CSSProperties;
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    caption?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading: true;
    heading3: true;
    subtitle1: true;
    subtitle2: true;
    subtitle5: true;
    body1: true;
    body2: true;
    caption: true;
  }
}

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#0052FF",
    },
    secondary: {
      main: "#ff9800",
    },
  },
  typography: {
    fontFamily: "Cera Pro",
    heading: {
      fontSize: "24px",
      lineHeight: "34px",
      fontWeight: 500,
    },
    heading3: {
      fontSize: "16px",
      lineHeight: "22px",
      fontWeight: 400,
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "22px",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "28px",
    },

    body1: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "16px",
    },

    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "34px",
    },
    caption: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "16px",
    },
    subtitle5: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "22px",
    },
  },
});
export default customTheme;

// var customStyles = makeStyles({
//   verticalHeader: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-start",
//     position: "absolute",
//     width: "80px",
//     height: "728px",
//     left: "25px",
//     top: "30px",
//   },

//   one: {
//     width: "18.64px",
//     height: "15.93px",
//     left: "6.68px",
//   },

//   checkout: {
//     width: "109px",
//     height: "34px",
//     fontFamily: "Graphik",
//     fontStyle: "normal",
//     fontWeight: 400,
//     fontSize: "24px",
//     lineHeight: "34px",
//     color: "#343446",
//   },

//   sellButton: {
//     width: "120px",
//     height: "42px",
//     // background: "#FFA74F",
//     borderRadius: "4px",
//     alignItems: "center",
//   },

//   buyNowButton: {
//     width: "108px",
//     height: "28px",
//     fontFamily: "Graphik",
//     fontStyle: "normal",
//     fontWeight: 600,
//     fontSize: "20px",
//     lineHeight: "28px",
//     color: "#343446",
//   },

//   choose: {
//     width: "114px",
//     height: "22px",
//     fontFamily: "Graphik",
//     fontStyle: "normal",
//     fontWeight: 500,
//     fontSize: "16px",
//     lineHeight: "22px",
//     letterSpacing: "0.01em",
//     color: "#343446",
//   },

//   scroll: {
//     height: "325x",
//     overflowY: "scroll",
//     width: "650px",

//     "&::-webkit-scrollbar": {
//       width: "5px",
//     },

//     "&::-webkit-scrollbar-track": {
//       boxShadow: "inset 0 0 5px #FFFFFF",
//       borderRadius: "10px",
//     },

//     "&::-webkit-scrollbar-thumb": {
//       background: "#B4B4CF",
//       borderRadius: "10px",
//     },
//   },

//   coinGrid: {
//     display: "flex",
//     flexDirection: "column",
//     position: "absolute",
//     alignItems: "center",
//   },

//   coinName: {
//     width: "55px",
//     height: "22px",
//     lineHeight: "22px",
//     color: "#4B4B60",
//   },

//   footerElement: {
//     width: "83px",
//     height: "22px",
//     fontFamily: "Graphik",
//     fontStyle: "normal",
//     fontWeight: 400,
//     fontSize: "16px",
//     lineHeight: "22px",
//     color: "#0052FF",
//   },

//   footerElement2: {
//     width: "83px",
//     height: "22px",
//     fontFamily: "Graphik",
//     fontStyle: "normal",
//     fontWeight: 400,
//     fontSize: "16px",
//     lineHeight: "22px",
//     color: "#343446",
//   },

//   footer: {
//     position: "absolute",
//     top: "1450px",
//     left: "80px",
//   },

//   paymentMethod: {
//     width: "250px",
//     height: "22px",
//     fontFamily: "Graphik",
//     fontStyle: "normal",
//     fontWeight: 500,
//     fontSize: "16px",
//     lineHeight: "22px",
//     color: "#343446",
//   },

//   currency: {
//     width: "250px",
//     height: "28px",
//     fontFamily: "Graphik",
//     fontStyle: "normal",
//     fontWeight: 500,
//     fontSize: "14px",
//     lineHeight: "16px",
//     color: "#343446",
//   },

//   totalBalance: {
//     width: "251px",
//     height: "28px",
//     fontFamily: "Graphik",
//     fontStyle: "normal",
//     fontWeight: 500,
//     fontSize: "20px",
//     lineHeight: "28px",
//     color: "#7D7D89",
//   },

//   amountDetailsPrice: {
//     width: "118px",
//     height: "28px",
//     fontFamily: "Graphik",
//     fontStyle: "normal",
//     fontWeight: 500,
//     fontSize: "18px",
//     lineHeight: "28px",
//     color: "#343446",
//   },

//   transaction: {
//     width: "101px",
//     height: "16px",
//     fontfamily: "Graphik",
//     fontstyle: "normal",
//     fontweight: 500,
//     fontsize: "14px",
//     lineHeight: "16px",
//     color: "#7D7D89",
//   },

//   price: {
//     width: "171px",
//     height: "34px",
//     fontFamily: "Graphik",
//     fontStyle: "normal",
//     fontWeight: 400,
//     fontSize: "24px",
//     lineHeight: "34px",
//     color: "#343446",
//   },

//   paymentMethoddiv: {
//     fontWeight: 400,
//     fontSize: "14px",
//     lineHeight: "16px",
//     color: "#7D7D89",
//   },

//   visaCredit: {
//     fontWeight: 600,
//     fontSize: "16px",
//     lineHeight: "22px",
//     color: "#343446",
//   },

//   divTypo: {
//     width: "86px",
//     height: "14px",
//     fontFamily: "Graphik",
//     fontStyle: "normal",
//     fontWeight: 400,
//     fontSize: "10px",
//     lineHeight: "14px",
//     color: "#343446",
//   },

//   divTypo2: {
//     width: "94px",
//     height: "22px",
//     fontFamily: "Graphik",
//     fontStyle: "normal",
//     fontWeight: 500,
//     fontSize: "16px",
//     lineHeight: "22px",
//     color: "#343446",
//   },

//   speedButton: {
//     width: "50px",
//   },
// });

// export { customStyles };
