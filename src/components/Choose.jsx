import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import choose from '../choose.svg'

function Choose() {
    return (
        <motion.div className=" mt-10 md:p-10  mx-auto">
            {/* content */}
            <motion.div className="flex choose justify-content-center container font-extrabold text-gray-700 pt-10 md:px-10 px-3">
                    <motion.div className="lg:w-1/2 mr-10">
                    <motion.img
                        initial={{opacity:0,x:100}}
                        whileInView={{opacity:1,x:0}}
                        transition={{delay:.2,duration:.2}}
                     src={choose} alt="solutions" className="w-5/6"/>
                    </motion.div>

                    <motion.div className="lg:w-1/2 ">
                        <motion.h1 className="md:text-5xl text-3xl lg:px-15  ">Why Choose Us</motion.h1>
                        <motion.p className="text-gray-400 text-lg md:pr-10 pt-5">
                            There’s a certain set of steps that we believe should 
                            help you place yourself in the latter group.
                        </motion.p>
                        <motion.div>
                            <motion.p className="text-2xl wrapper p-3">
                                <motion.i className=" fa fa-tasks text-2xl rounded-full bg-purple-700  icon text-white "></motion.i> <p className="pl-3">  Data Analysis</p>
                            </motion.p>
                        </motion.div>

                        <motion.div>
                            <motion.p className="text-2xl wrapper p-3">
                                <motion.i className=" fa fa-pie-chart text-2xl rounded-full bg-purple-700  icon text-white "></motion.i> <p className="pl-3"> PPC Marketing</p>
                            </motion.p>
                        </motion.div>

                        <motion.div>
                            <motion.p className="text-2xl wrapper p-3">
                                <motion.i className=" fa fa-newspaper-o text-2xl rounded-full bg-purple-700  icon text-white "></motion.i> <p className="pl-3"> Business Analytics</p>
                            </motion.p>
                        </motion.div>
                    </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Choose
