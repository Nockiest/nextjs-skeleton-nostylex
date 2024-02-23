 

// import { accent, background, colors, primaryText } from './Variables';
export const DARK = "@media (prefers-color-scheme: dark)";
// const {primaryText, secondaryText,accent, background, lineColor} = colors
export const text = { default: "#1a1006", [DARK]: "#fcf6f1" };
export const background = { default: "#fcf6f1", [DARK]: "#1a1006" };
export const primary = { default: "#ff8b1f", [DARK]: "#ff8b1f" };
export const secondary = { default: "#8be3c1", [DARK]: "#8be3c1" };
export const  accent = { default: "#5cb5d8", [DARK]: "#5cb5d8" };



export const BUTTON_STYLES =  {
  base: {
    borderRadius: '4px',
    cursor: "pointer",
    userSelect: 'none',
    ":hover": {
      transform: "scale(1.1)",
    },
    textDecoration: 'none',
    touchAction: 'manipulation',
    WebkitUserSelect: 'none',
    justifyContent: 'center',
    lineHeight: '1.25',
    fontWeight: '600',
    margin: '0',
    transition: 'all 250ms',
    verticalAlign: 'baseline',
  },

  btnNav: {
    color: primary,
    paddingLeft: "2em",
    paddingRight: "2em",
    transform: 'skew(-20deg)',
    backgroundColor: `linear-gradient(#e66465, #9198e5)`,
    padding: '0 1em',
    position: 'relative',
    right: '1em',
    height: '100%',
    ':active': {
              background: '#f857a8',

              color: '#fff',
            },

    ":hover": {
      transform: "scale(1.1) skew(-20deg)',",
    },
  },
  primary: {
    alignItems: 'center',
    backgroundClip: 'padding-box',
    backgroundColor: primary,
    border: '1px solid transparent',
    borderRadius: '.25rem',
    boxShadow: 'rgba(0, 0, 0, 0.02) 0 1px 3px 0',
    boxSizing: 'border-box',
    color: background,
    display: 'inline-flex',
    fontFamily: 'system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '16px',
    minHeight: '3rem',
    padding: 'calc(.875rem - 1px) calc(1.5rem - 1px)',




    ':hover': {
      backgroundColor: primary,
      boxShadow: 'rgba(0, 0, 0, 0.1) 0 4px 12px',
    },
    ':focus': {
      backgroundColor:  primary,
      boxShadow: 'rgba(0, 0, 0, 0.1) 0 4px 12px',
    },
    ':hover:active': {
      backgroundColor: '#c85000',
      boxShadow: 'rgba(0, 0, 0, .06) 0 2px 4px',
      transform: 'translateY(0)',
    },
  },
    secondary: {
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '.25rem',
      boxShadow: 'rgba(0, 0, 0, 0.02) 0 1px 3px 0',
      boxSizing: 'border-box',
      color: 'rgba(0, 0, 0, 0.85)',
      display: 'inline-flex',
      fontFamily: 'system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '16px',
      minHeight: '3rem',
      padding: 'calc(.875rem - 1px) calc(1.5rem - 1px)',
      width: 'auto',
      ':hover': {
        borderColor: 'rgba(0, 0, 0, 0.15)',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0 4px 12px',
        color: 'rgba(0, 0, 0, 0.65)',
      },
      ':focus': {
        borderColor: 'rgba(0, 0, 0, 0.15)',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0 4px 12px',
        color: 'rgba(0, 0, 0, 0.65)',
      },
      ':active': {
        backgroundColor: '#F0F0F1',
        borderColor: 'rgba(0, 0, 0, 0.15)',
        boxShadow: 'rgba(0, 0, 0, 0.06) 0 2px 4px',
        color: 'rgba(0, 0, 0, 0.65)',
        transform: 'translateY(0)',
      },
    },

  disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    border: '1px solid #999999',
    backgroundColor: '#cccccc',
    color: '#666666',
  },

}

export const BUTTON_SIZES = {
  xxxl: {},
  xxl: {},
  xl: {},
  lg: {
    fontSize: 24,
    padding: "15px 30px",
    margin: "0.3em",
  },
  md: {
    fontSize: 18,
    padding: "10px 20px",
    margin: "0.2em",
  },
  sm: {
    fontSize: 14,
    padding: "5px 10px",
    margin: "0.1em",
  },
  xs: {},
}
