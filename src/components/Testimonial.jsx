import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import Kips from '../assets/images/team1.jpg'
import Glen from '../assets/images/team2.jpg'
import Lipton from '../assets/images/team3.jpg'


const testimonies = [
    {
        name:"Kips Leo",
        comment:"PY.inc is the best IT solutions agency I have worked with so far. I will advice everyone to partner with them. ",
        company:"Kips Enterprise",
        image:Kips
    },
    {
        name:"Glen Lax",
        comment:"PY.inc is the best IT solutions agency I have worked with so far. I will advice everyone to partner with them. ",
        company:"Lax Products and Cosmetics",
        image:Glen
    },
    {
        name:"Lipton zuma",
        comment:"PY.inc is the best IT solutions agency I have worked with so far. I will advice everyone to partner with them. ",
        company:"Zuma Trading Enterprise",
        image:Lipton
    }
]


function Testimonial() {
    return (
        <>
        <motion.h1 className="text-center text-gray-400 pt-10 font-bold text-base ">TESTIMONY</motion.h1>

        <motion.div className="flex justify-between items-center relative p-10 m-10">
        {/* item 1 */}
        
            <motion.div className=" flex-grow-0 w-64 check">
                <motion.h1 className="md:text-5xl text-3xl text-gray-800 font-extrabold">
                    Check what our clients are saying
                </motion.h1>
                <motion.p className="text-gray-500">
                    We deliver exactly what we assured you
                    from neat designs to accurate business 
                    predictions.
                </motion.p>
            </motion.div>

        {/* item 2 */}
        <div className="flex justify-around carousel-container">
           { testimonies.map(e=>(
        <motion.div className="border-gray-500 bg-gray-200 p-8 mx-10">
               <motion.div className="testmony-card flex justify-center flex-col w-72 ">
                <motion.div className="flex justify-center relative">
                <motion.div className="card absolute bottom-0  w-24 mb-3 h-24 bg-center bg-contain ring-gray-300 shadow ring-8 rounded-full "
                        style={{backgroundImage:`url(${e.image})`}}
                    ></motion.div>
                </motion.div>
                    <motion.p className="text-gray-500 text-center pb-2">
                        {e.comment}
                    </motion.p>
                     <motion.div className="text-center">
                        <p className="text-xl text-purple-700">{e.name}</p> 
                        <p className="text-lg font-black"> CEO {e.company} </p>
                    </motion.div>
            </motion.div>
        </motion.div>

           ))
           }
           </div>
 


        </motion.div>
        </>
    )
}

export default Testimonial
