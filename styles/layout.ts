

export const LAYOUT =  {
    twoColumn: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr', // Two columns of equal width
        gap: '20px', // Gap between grid items
        '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr', // Single column for smaller screens
        },
    },

    threeColumn: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr', // Three columns of equal width
        gap: '20px', // Gap between grid items
        '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr 1fr', // Two columns for smaller screens
        },
        '@media (max-width: 576px)': {
            gridTemplateColumns: '1fr', // Single column for even smaller screens
        },
    },

} 