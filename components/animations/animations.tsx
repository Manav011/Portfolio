export const riseWithFade = {
  initial: {
    y: 100,
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
      delay: 0.1, 
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
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export const wordAnimation = {
  initial: {
    opacity: 0,
    y: 150,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 1,
    },
  },
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
      delay: 0.1 * index
    }
  }),
}

export const titleAnimation1 = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export const titleAnimation2 = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};
