import React from 'react';
import {motion} from "framer-motion";

const animations = {
    initial: {x:1000, opacity:0},
    animate: {x:0, opacity:1, transition: {duration: 1, ease: "easeInOut"}},
    exit: {x:0, opacity:0, transition: {duration: 0.5, ease: "easeInOut"}},
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