

 const DARK = "@media (prefers-color-scheme: dark)";
export const primary = { default: "#ff8b1f", [DARK]: "#ff8b1f" };
export const HEADER =  {
    navWrapper: {
      overflow: "hidden",
      width: "100vw",
      margin: "0 auto",
      position: "fixed",
      top: "0",
      left: "0",
      zIndex: "100",
      alignItems: "center",
      borderBottom: 'black 2px solid',
      backgroundColor:  primary ,
    //   height:'100%',
    },
    nav: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily:
        "system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif",

      overflow: "hidden",
      height: '100%,',
      backgroundColor: `${primary}`
    },

    navLink: {
      textTransform: "uppercase",
      textAlign: "center",
      borderTop: "0.5px solid rgba(0, 0, 0, 0.1)",

      ":last-child": {
        paddingRight: "3em",
      },
    },
    right: {
      overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'relative',
        left: '1.5em',
        height: 'auto',
    },
    h1: {
        backgroundColor: 'white',
        border: '1px solid black',
        padding: '1em',
        height: '100%',
        margin:'0'
    }
  } ;