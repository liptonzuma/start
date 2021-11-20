import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import solution from '../solution.svg'

function Second() {
    return (
        <motion.div className="">
            <motion.div className="flex p-10 justify-center w-screen  items-center second">
                {/* container */}
                <motion.div className="md:px-10 lg:w-1/2">
                    {/* item 1 */}
                    <motion.h1 className="text-5xl font-black text-gray-600">
                        Best Digital Marketing Solutions.
                    </motion.h1>
                    {/* item1 description */}
                    <motion.div>
                        {/* content goes here */}
                        <motion.p className="text-lg pt-5 text-gray-500">
                            No matter what industry you’re in, we all live in a 
                            more and more competitive world. It’s getting harder to stand
                            out from the competition. That’s why, we decided to create a
                            list of digital marketing solutions we believe every business 
                            should implement as soon as possible unless they’ve already done it. 
                        </motion.p>
                        {/* solutions list */}
                        <motion.div className="list pt-5">

                                <motion.p className="text-xl text-gray-600 pt-3">
                                    <motion.i className="fa fa-check text-sm "></motion.i> Social Media Marketing
                                </motion.p>
                                <motion.p className="text-xl pt-3 text-gray-600">
                                    <motion.i className="fa fa-check text-sm"></motion.i> Search engine optimization and content marketing
                                </motion.p> 
                                <motion.p className="text-xl pt-3 text-gray-600">
                                    <motion.i className="fa fa-check text-sm"></motion.i> Community management
                                </motion.p>
                                <motion.p className="text-xl pt-3 text-gray-600">
                                    <motion.i className="fa fa-check text-sm"></motion.i> Google ads/Facebook ads
                                </motion.p>

                            
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Item 2 */}

                <motion.div className="flex items-center justify-center  lg:w-1/2 ">
                    <img src={solution} alt="solutions" className="w-5/6"/>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}

export default Second
