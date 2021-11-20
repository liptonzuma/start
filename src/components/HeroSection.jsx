import { motion } from 'framer-motion/dist/framer-motion'
import illustration from '../illustration.svg'
import React from 'react'

function HeroSection() {
    return (
        <>
        <motion.div className="pb-5 text-white px-5 h-4/5 pt-20 bg-purple-700 w-screen mt-10">
            <motion.div className="hero flex justify-center  pr-3 pt-10">
                <motion.div className="pt-10">
                    <motion.h1 
                    initial={{opacity:0,x:-100}}
                    animate={{opacity:1,x:0}}
                    transition={{duration:.6,delay:.2}}
                    className="md:text-5xl sm:text-3xl font-extrabold md:pl-10">
                        Everyday Is a New Beginning.
                    </motion.h1>
                    <motion.p 
                    initial={{opacity:0,y:100}}
                    animate={{opacity:1,y:0}}
                    transition={{duration:.6,delay:.3}}
                    className="md:pl-3 pt-3 text-lg md:pl-10">
                        Productboard helps product managers understand
                        what customers need, prioritize what to build next.
                    </motion.p>
                    
                    <motion.button 
                    initial={{opacity:0,}}
                    animate={{opacity:1}}
                    transition={{duration:1.3,delay:1.1}}
                    className="text-center  text-center rounded-full shadow md:ml-10 mt-5  py-3 bg-green-400 w-40">Get In Touch</motion.button>


                </motion.div>

                {/* image illustration */}
                <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1.2}}
                className="mx-auto sm:pl-10 sm:ml-10">
                    <motion.img 
                        initial={{y:10}}
                        animate={{y:0}}
                        transition={{
                        yoyo:Infinity,
                        duration:.6,
                        delay:1
                        }}
                    className="w-4/5" src={illustration} alt="illustration"/>
                </motion.div>
            </motion.div>
        </motion.div>

        <motion.div className="relative z-200">
        <svg className="relative z-30 w-screen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6D28D9" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,224C672,213,768,139,864,101.3C960,64,1056,64,1152,80C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <svg className="absolute top-3 z-10 w-screen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#DDD6FE" fillOpacity="1" d="M0,256L30,256C60,256,120,256,180,224C240,192,300,128,360,117.3C420,107,480,149,540,154.7C600,160,660,128,720,117.3C780,107,840,117,900,138.7C960,160,1020,192,1080,186.7C1140,181,1200,139,1260,112C1320,85,1380,75,1410,69.3L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
        </motion.div>
        </>
    )
}

export default HeroSection
