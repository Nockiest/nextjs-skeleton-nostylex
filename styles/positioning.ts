
// import { accent, background, colors, primaryText } from './Variables';
const DARK = "@media (prefers-color-scheme: dark)";

export const POSITIONING = {
  row: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  balancedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)" /* 8 columns with equal width */,
    gridGap: "8px" /* Adjust as needed */,
  },
  alignedFlexChild: {
    flexGrow: "1",
  },
  rowResponsive: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexFlow: "row wrap",
    alignItems: "center",
  },
  centeredSelf: {
    margin: '0 auto'
  },
  column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  centered: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  absolute: {
    position: "absolute",
  },
  relative: {
    position: "relative",
  },
  fixed: {
    position: "fixed",
  },
  sticky: {
    position: "sticky",
    top: 0,
  },
} 
