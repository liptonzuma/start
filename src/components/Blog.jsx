import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'

function Blog() {
    return (
        <motion.div>
            <p className="text-center text-lg text-gray-500 ">LATEST ARTICLES.</p>
            <h1 className="text-4xl text-gray-700 text-center font-black">OUR STORIES BLOG</h1>
        </motion.div>
    )
}

export default Blog
