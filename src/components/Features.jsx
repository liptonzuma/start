import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'

function Features() {
    return (
       <motion.div>
           <motion.h1 className="md:text-center text-gray-500 text-left text-lg font-semibold">FEATURES</motion.h1>
           <motion.h1 className="py-3 text-center text-5xl font-black text-gray-800">Our Special Features</motion.h1>
       </motion.div>
    )
}

export default Features
