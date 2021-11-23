import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import image1 from '../assets/svg/xmas.svg'

function Blog() {
    return (
        <motion.div className="p-32">
            <p className="text-center text-lg">LATEST ARTICLES.</p>
            <h1 className="text-5xl text-gray-700 text-center font-black py-3">Our Stories Posts</h1>
            <motion.div className="bg-purple-500 w-3/12 h-60 justify-center rounded flex">
                <motion.img 
                    src={image1}
                    alt="thumbnail"
                    className="w-44"
                />
            </motion.div>
            <motion.div>
                    <p className="text-xl text-purple-700 py-2">Xmas Discounts</p>
                </motion.div>
        </motion.div>
    )
}

export default Blog
