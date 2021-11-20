/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from 'framer-motion/dist/framer-motion'
import React, { useState } from 'react'
import logo from '../github.png'
import icon from '../hamburger.png'

function Navbar() {

    const [open,setOpen]= useState(false)

    return (
    <>
    <nav className="md:hidden flex-col  bg-purple-700 flex justify-between p-5 text-lg fixed w-screen z-50 right-0 top-0">

        <a href="#" className="text-white logo text-3xl font-black pl-10">py<span className="text-green-400">.inc</span></a> 
            <motion.ul 
            animate={open?{x:0}:{x:-900}}
            transition={{ type: "tween", stiffness: 350 }}
            className="text-white mt-10 w-100 z-50 fixed inset-0 bg-purple-500 top-9 pl-4 ">
            <motion.li  className="my-10 link font-semibold hover:text-green-400 transition ease-in duration-300">
                <a href="#">Home</a>
            </motion.li>
            <motion.li className="my-10 link font-semibold hover:text-green-400 transition ease-in duration-300">
                <a href="#">Pages</a>
            </motion.li>
            <motion.li className="my-10 link font-semibold hover:text-green-400 transition ease-in duration-300">
                <a href="#">Portfolio</a>
            </motion.li>
            <motion.li className="my-10 link font-semibold hover:text-green-400 transition ease-in duration-300">
                <a href="#">Blog</a>
            </motion.li>
            <motion.li className="my-10 link font-semibold hover:text-green-400 transition ease-in duration-300">
                <a href="#">Contact Us</a>
            </motion.li>


        </motion.ul>
        <button 
        onClick={()=>setOpen(!open)}
        href="#" className="absolute right-5">
            <img src={icon} alt="logo" className="w-8"/>
        </button>
        </nav>
      <nav className="nav-main items-center bg-purple-700 flex navbar justify-center p-5 text-lg fixed w-screen z-50 right-0 top-0">
        <a href="#" className="text-white logo text-3xl font-black pl-10">py<span className="text-green-400">.inc</span></a> 
        <ul className="text-white flex mx-auto w-100 justify-around ">
            <motion.li  className="mr-10 link font-semibold hover:text-green-400 transition ease-in duration-300">
                <a href="#">Home</a>
            </motion.li>
            <motion.li className="mr-10 link font-semibold hover:text-green-400 transition ease-in duration-300">
                <a href="#">Pages</a>
            </motion.li>
            <motion.li className="mr-10 link font-semibold hover:text-green-400 transition ease-in duration-300">
                <a href="#">Portfolio</a>
            </motion.li>
            <motion.li className="mr-10 link font-semibold hover:text-green-400 transition ease-in duration-300">
                <a href="#">Blog</a>
            </motion.li>
            <motion.li className="mr-10 link font-semibold hover:text-green-400 transition ease-in duration-300">
                <a href="#">Contact Us</a>
            </motion.li>
        </ul>
      
        <a href="#">
            <img src={logo} alt="logo" className="w-8"/>
        </a>
      </nav>
      </>
    )
}

export default Navbar
