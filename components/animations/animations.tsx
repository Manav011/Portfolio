export const riseWithFade = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 3,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

export const downWithFade = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

export const riseWithFade1 =  {
  initial: {
    y:'1em' , opacity:0
  },
  animate: {
    y:'0em' , 
    opacity:1 , 
    transition:{
      delay: 0.5, 
      duration: 1, 
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

export const scalingAnimation = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 3,
      duration: 0.8,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

export const imageAnimation = {
  initial: {
    opacity: 0,
    scale: 0.7,
  },
  animate: (delay1: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: delay1,
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};

export const skillsAnimation = {
  initial: {
    opacity: 0,
    y: 50, 
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index
    }
  }),
}

export const titleAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (delay1: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay1,
      duration: 1.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};

export const opacity = {
  initial: {
      opacity: 0
  },
  enter: {
      opacity: 1,
      transition: {
        duration: 1, 
        delay: 0.2
      }
  },
}

export const slideUp = {
  initial: {
      top: 0
  },
  exit: {
      top: "-100vh",
      transition: {
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1], 
        delay: 0.2
      }
  }
}
