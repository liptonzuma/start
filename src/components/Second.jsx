import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import solution from '../solution.svg'

function Second() {
    return (
        <motion.div className="mx-auto w-screen p-10">
            <motion.div className="flex p-10 justify-center w-screen mx-auto">
                {/* container */}
                <motion.div className="px-10 md:w-1/2">
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
                    </motion.div>
                </motion.div>

                {/* Item 2 */}

                <motion.div className="flex items-center justify-center mx-auto md:w-1/2">
                    <img src={solution} alt="solutions" className="w-5/6"/>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}

export default Second
