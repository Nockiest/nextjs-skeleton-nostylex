

// untested

export const ANIMATION =  {
    hidden: {
        opacity: 0,
        transition: '1.5s all',
        filter: 'blur(2px)',
    },
    leftSideSlide: {
        filter: 'blur(5px)',
        transform: 'translateX(-100%)',
        transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
        overflow: 'none',
    },
    rightSideSlide: {
        filter: 'blur(5px)',
        transform: 'translateX(100%)',
        transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
        overflow: 'none',
    },
    show: {
        opacity: 1,
        filter: 'blur(0px)',
        transform: 'translateX(0%)',
    },
    // Override styles for the "show" class
    'show.leftSideSlide, show.rightSideSlide': {
        transform: 'translateX(0%)',
    }
} 