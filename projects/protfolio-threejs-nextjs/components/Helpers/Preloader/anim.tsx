
export const slideLeft = {
    initial: {
        x: "0"
    },
    exit: {
        x: "-100vw",
        transition: {duration: 0.8, ease: [.76, 0, 0.24, 1], delay: 0.2}
    }
}


export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: {duration: 1, delay: 0.2}
    },
}