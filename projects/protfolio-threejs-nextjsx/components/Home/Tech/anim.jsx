 export const opacity = {
    initial: {
        opacity: 0,
        bottom: "-100%",

    },
    open: {
        opacity: 1,
        bottom:"-13%",
        transition: {duration: 0.5, delay: 1.5}
    },
    closed: {
        // opacity: 0
    }
 }

 export const slideUp = {
    initial: {
        y: "100%",
    },
    open: (i) => ({
        y:0,
        transition: {duration: 0.5, delay: 0.5 * i}
    }),
    closed: {
        y: "100%"
    }

 }