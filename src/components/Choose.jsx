import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import choose from '../choose.svg'

function Choose() {
    return (
        <motion.div className="pt-10 mt-10 px-10 container m-auto">
            {/* content */}
            <motion.div className="flex justify-content-center container font-extrabold text-gray-800 pt-10 px-10">
                    <motion.div className="lg:w-1/2">
                    <motion.img
                        initial={{opacity:0,x:100}}
                        whileInView={{opacity:1,x:0}}
                        transition={{delay:1.2,duration:.2}}
                     src={choose} alt="solutions" className="w-5/6"/>
                    </motion.div>

                    <motion.div className="text-5xl lg:w-1/2 px-15">
                        <motion.h1>Why Choose Us</motion.h1>
                    </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Choose
