import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'

function Features() {
    return (
       <motion.div>
           <motion.h1 className="text-center text-gray-500   text-lg font-semibold">FEATURES</motion.h1>
           <motion.h1 className="py-3 text-center md:text-5xl text-3xl font-black text-gray-700">Our Special Features</motion.h1>
           {/* Flex Items */}

           {/* Flex container */}
           <motion.div className="flex">
               {/* Three flex items */}
               <motion.div>
                   {/* Items one with three items */}
                   <motion.div></motion.div>
                   <motion.div></motion.div>
                   <motion.div></motion.div>
               </motion.div>
               {/* End of item 1 with 3 items */}

                {/* Item 2 with the illustration svg */}
               <motion.div></motion.div>
               {/* End of item 2 with svg illustration */}

                {/* Item three with three inner items */}
               <motion.div>
                   <motion.div></motion.div>
                   <motion.div></motion.div>
                   <motion.div></motion.div>
               </motion.div>
               {/* end of item three with 3 inner items */}

           </motion.div>
       </motion.div>
    )
}

export default Features
