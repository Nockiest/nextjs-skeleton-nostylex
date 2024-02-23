// import * as stylex from '@stylexjs/stylex';
// import { colors, shadows } from './Variables';

// const smallBoxShadow = shadows.boxShadowSmall
export const CARD =  {
    default: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow:   '0px 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        maxWidth: '400px',
        margin: '0 auto',

    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    description: {
        fontSize: '16px',
        color: '#666666',
    },
    button: {
        display: 'inline-block',
        backgroundColor: '#4CAF50',
        color: '#ffffff',
        padding: '10px 20px',
        borderRadius: '5px',
        textDecoration: 'none',
        marginTop: '10px',
        transition: 'background-color 0.3s ease',
    },
    'button:hover': {
        backgroundColor: '#45a049',
    },

}