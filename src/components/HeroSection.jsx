import { motion } from 'framer-motion/dist/framer-motion'
import illustration from '../illustration.svg'
import React from 'react'

function HeroSection() {
    return (
        <>
        <motion.div className="pb-5 text-white px-5 h-4/5 pt-20 bg-purple-700 w-screen">
            <motion.div className="hero flex justify-center w-screen pr-3">
                <motion.div className="pt-10">
                    <motion.h1 className="md:text-5xl sm:text-3xl font-extrabold pl-3">
                        Everyday Is a New Begining
                    </motion.h1>
                    <motion.p className="pl-3 pt-3 text-md">
                        Productboard helps product managers understand
                        what customers need, prioritize what to build next.
                    </motion.p>
                    <motion.div className=" text-center rounded shadow ml-3 mt-5  py-3 bg-green-400 w-40">
                    <button className="text-center">Get In Touch</button>

                    </motion.div>

                </motion.div>

                {/* image illustration */}
                <motion.div className="mx-auto sm:pl-10 sm:ml-10">
                    <img className="w-4/5" src={illustration} alt="illustration"/>
                </motion.div>
            </motion.div>
        </motion.div>

        <motion.div className="relative z-200">
        <svg className="relative z-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6D28D9" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,224C672,213,768,139,864,101.3C960,64,1056,64,1152,80C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <svg className="absolute top-8 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#DDD6FE" fillOpacity="1" d="M0,256L30,256C60,256,120,256,180,224C240,192,300,128,360,117.3C420,107,480,149,540,154.7C600,160,660,128,720,117.3C780,107,840,117,900,138.7C960,160,1020,192,1080,186.7C1140,181,1200,139,1260,112C1320,85,1380,75,1410,69.3L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
        </motion.div>
        </>
    )
}

export default HeroSection
