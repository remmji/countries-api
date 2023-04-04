import React from 'react';
import {motion} from "framer-motion";

const animations = {
    initial: {x:0},
    animate: {x:0},
    exit: {x:0},
}


function AnimatedPageTransition({children}) {
  return (
  <>
    <motion.div variants={animations}
      initial="initial" 
      animate="animate" 
      exit="exit">
          {children}
    </motion.div>
  </>
  )
}

export default AnimatedPageTransition