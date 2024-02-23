
const DARK = "@media (prefers-color-scheme: dark)";

// export const colors = stylex.create({
//   text: "#1a1006",
//   background: "#fcf6f1",
//   primary: "#ff8b1f",
//   secondary: "#8be3c1",
//   accent: "#5cb5d8",
// });
// export const primaryText = "black";
// export const secondaryText = "#333";
// export const accent = "orange";
// export const background = "white";
// export const lineColor = "gray";

export const SPACING =  {
  none:{gap:"0px"},
  xs:{gap:"4px"},
  sm :{gap:"8px"},
  md:{gap:"12px"}  ,
  lg:{gap:"20px"}  ,
  xl :{gap:"32px"}  ,
  xxl :{gap:"48px"}  ,
  xxxl:{gap:"96px"}  ,
}

// export const borders = stylex.create({
//   borderWidthThin: "1px",
//   borderWidthMedium: "2px",
//   borderWidthThick: "3px",
//   borderStyleSolid: "solid",
//   borderStyleDashed: "dashed",
//   borderColorDefault: "#ccc",
// });

export const SHADOWS =  {
  sm: { boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)" },
  md: { boxShadow: "0 3px 6px rgba(0, 0, 0, 0.15)" } ,
  lg: { boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)"} ,
}

// export const fonts = stylex.create({
//   bodyFontFamily: "Arial, sans-serif",
//   headingFontFamily: "Helvetica, sans-serif",
//   fontSizeSmall: "14px",
//   fontSizeMedium: "16px",
//   fontSizeLarge: "20px",
//   fontWeightNormal: "400",
//   fontWeightBold: "700",
//   fontStyleItalic: "italic",
// });

// export const tokens = stylex.create({
//   primaryText: "black",
//   secondaryText: "#333",
//   accent: "blue",
//   background: "white",
//   lineColor: "gray",
//   borderRadius: "4px",
//   fontFamily: "system-ui, sans-serif",
//   fontSize: "16px",
// });
export const ROUNDING = {
  none: {
    borderRadius: "0",
  },
  xs: {
    borderRadius: "2px",
  },
  sm: {
    borderRadius: "4px",
  },
  md: {
    borderRadius: "6px",
  },
  lg: {
    borderRadius: "8px",
  },
  xl: {
    borderRadius: "12px",
  },
  xxl:{ borderRadius: "16px" },
  xxxl:{ borderRadius: "20px"},
  full: {
    borderRadius: "9999px", // Use a large value to make it fully rounded
  },
}

export const MARGIN = {
  none: {
    margin: "0",
  },
  xs: {
    margin: "2px",
  },
  sm: {
    margin: "4px",
  },
  md: {
    margin: "6px",
  },
  lg: {
    margin: "8px",
  },
  xl: {
    margin: "12px",
  },
  xxl:{ margin: "16px" },
  xxxl:{ margin: "20px"},
  full: {
    margin: "auto", // Use a large value to make it fully rounded
  },
}
export const PADDING =  {
  none: {
    padding: "0",
  },
  xs: {
    padding: "2px",
  },
  sm: {
    padding: "4px",
  },
  md: {
    padding: "6px",
  },
  lg: {
    padding: "8px",
  },
  xl: {
    padding: "12px",
  },
  xxl:{ padding: "16px" },
  xxxl:{ padding: "20px"},
  full: {
    padding: "auto", // Use a large value to make it fully rounded
  },
}