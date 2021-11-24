import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import xmas from '../assets/svg/xmas.svg'
import mobile from '../assets/svg/mobile.svg'
import design from '../assets/svg/design.svg'

const posts = [
    {
        title:'Xmas Discounts',
        caption:'15% Discount on All...',
        subcaption:' Xmas is the the special day for giving out amazing packages to ...',
        image:xmas,
        bg:'purple',
        author:'Leo Messi',
        likes:900,
        comments:120
    },
    {
        title:'SoftWare Tips',
        caption:'We will be looking at ...',
        subcaption:'Considering Native mobile app development there are two...',
        image:mobile,
        bg:'green',
        author:'Ruminegge',
        likes:230,
        comments:800
    },
    {
        title:'Design Concepts',
        caption:'UI/UX design tips for any...',
        subcaption:'In todays blog we will dive into UI/UX design and we...',
        image:design,
        bg:'blue',
        author:'Van Persie',
        likes:762,
        comments:125
    },

]


function Blog() {
    return (
        <motion.div className="md:p-32 p-8" id="blog">
            <p className="text-center text-lg text-gray-500">LATEST ARTICLES.</p>
            <h1 className="text-5xl text-gray-700 text-center font-black py-3">Our Stories Posts</h1>

        <div className="flex justify-around flex-col md:flex-row">
       {posts.map((post,i)=>(
            <div key={i} className="m-2">
            <motion.div className={`bg-${post.bg}-500 w-full h-60 justify-center rounded flex`}>
                <motion.img 
                    src={post.image}
                    alt="thumbnail"
                    className="w-44"
                />
            </motion.div>
            
            
                <motion.div className="flex flex-col ">
                    <p className="text-xl text-purple-700 py-2">{post.title}</p>
                    <p className="text-lg text-gray-800 font-bold">{post.caption}</p>
                    <p className="text-lg text-gray-500 pb-2">
                        {post.subcaption}
                    </p>
                    <hr className="bg-gray-200 h-0.5"/>
                    <div className="flex items-center">
                        <p className={`avatar bg-${post.bg}-500 rounded-full`}>
                            <i className="fa fa-user text-lg text-white"></i>
                        </p>
                        <p className="pl-2 pt-2" >{post.author}</p>
                        <p className="pl-10 pt-2 cursor-pointer" >
                            <i className="fa fa-thumbs-up"></i>
                        </p>
                        <p className="pt-2 pl-1 ">{post.likes}</p>
                        <p className="pl-8 pt-2 cursor-pointer" >
                            <i className="fa fa-comment"></i>
                        </p>
                        <p className="pt-2 pl-1">{post.comments}</p>

                    </div>
                </motion.div>
        </div>
       ))}
       </div>
       
            
        </motion.div>

    )
}

export default Blog
