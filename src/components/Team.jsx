import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import micheal from '../assets/images/team1.jpg'
import John from '../assets/images/team2.jpg'
import Edwin from '../assets/images/team3.jpg'


function Team() {
    return (
        <motion.div className="relative mb-10">
        <svg className="team-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#6D28D9" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,218.7C384,245,480,267,576,277.3C672,288,768,288,864,272C960,256,1056,224,1152,218.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
            <motion.div className="bg-purple-700 pt-10">
                <motion.h1 className="text-center text-white pt-10  text-base ">MEET THE TEAM</motion.h1>
                <motion.h1 className="md:text-4xl text-3xl lg:px-15 text-center text-white pt-3 font-extrabold ">OUR BEST TEAM</motion.h1>
                <motion.div></motion.div>
            </motion.div>

            <motion.div className="justify-center py-10 flex bg-purple-700 card-container  px-10">
                {/* item 1 */}
                <motion.div 
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{
                    duration:1.1
                }}
                className="m-10">
                    <motion.div className="card w-52 h-52 bg-center bg-contain ring-purple-500 shadow ring-8 rounded-full "
                        style={{backgroundImage:`url(${micheal})`}}
                    ></motion.div>
                    <motion.h1 className="pt-5 text-white text-3xl font-extrabold text-center">Micheal Swift</motion.h1>
                    <motion.p className="text-white text-center p-3 bg-green-500 rounded">Mobile App Developer</motion.p>
                </motion.div>
                {/* item 2 */}
                 <motion.div 
                 initial={{y:100,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{
                    duration:1.1,
                }}
                 className="m-10">
                    <motion.div className="card w-52 h-52 bg-center bg-contain ring-purple-500 shadow ring-8 rounded-full "
                        style={{backgroundImage:`url(${John})`}}
                    ></motion.div>
                    <motion.h1 className="pt-5 text-white text-3xl font-extrabold text-center">John Taylor</motion.h1>
                    <motion.p className="text-white text-center p-3 bg-green-500 rounded">Data/Business Analyst</motion.p>
                </motion.div>
                {/* item 3 */}
                <motion.div 
                initial={{x:100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{
                    duration:1.1
                }}
                className="m-10">
                    <motion.div className="card w-52 h-52 bg-center bg-contain ring-purple-500 shadow ring-8 rounded-full "
                        style={{backgroundImage:`url(${Edwin})`}}
                    ></motion.div>
                    <motion.h1 className="pt-5 text-white text-3xl font-extrabold text-center">Edwin Brown</motion.h1>
                    <motion.p className="text-white text-center p-3 bg-green-500 rounded">Fullstack Web Developer</motion.p>
                </motion.div>
                {/* end */}

            </motion.div>


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#6D28D9" fillOpacity="1" d="M0,96L48,96C96,96,192,96,288,117.3C384,139,480,181,576,170.7C672,160,768,96,864,96C960,96,1056,160,1152,181.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        </motion.div>
    )
}

export default Team
