import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    gray: string;
    green: string;
    red: string;
    blue: string;
    black: string;
    ash: string;
    white: string;
  }
  interface PaletteOptions {
    gray: string;
    green: string;
    red: string;
    blue: string;
    black: string;
    ash: string;
    white: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    gray: true;
    green: true;
    red: true;
    blue: true;
    black: true;
    ash: true;
    white: true;
  }
}

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

    ash: "#F2F2F7",
    white: "#FFFFFF",
    gray: "#7D7D89",
    green: "#20B03F",
    red: "#B71A33",
    blue: "#0052FF",
    black: "#343446",
  },

  typography: {
    fontFamily: "Graphik",
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

export const EXTRA_COLORS = {
  lightOrange: "rgba(247, 147, 26, 0.2)",
  lightBlack: "rgba(34, 34, 34, 0.2)",
  lightPink: "rgba(230, 0, 122, 0.2)",
  lightViolet: "rgba(98, 126, 234, 0.2)",
  lightGreen: "rgba(38, 161, 123, 0.2)",
  lightGrey: "rgba(25, 25, 113, 0.2)",
  lightCream: "rgba(219, 201, 132, 0.2)",
  pink: "#E6007A",
  violet: "#627EEAe",
  green: "#26A17B",
  grey: "#191971",
  cream: "#DBC984",
};
