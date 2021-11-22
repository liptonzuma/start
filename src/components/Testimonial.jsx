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
        <motion.div className="flex justify-center p-10 m-10">
        {/* item 1 */}
            <motion.div className="w-2/5 p-5">
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
        <motion.div className="border-gray-500 bg-gray-200 p-8">
            <motion.div className="testmony-card flex justify-center flex-col w-72 ">
                <motion.div className="flex justify-center relative">
                <motion.div className="card absolute bottom-0  w-24 mb-3 h-24 bg-center bg-contain ring-gray-300 shadow ring-8 rounded-full "
                        style={{backgroundImage:`url(${Glen})`}}
                    ></motion.div>
                </motion.div>
                    <motion.p className="text-gray-500 text-center pb-2">
                        {testimonies[0].comment}
                    </motion.p>
                     <motion.p className="text-center">
                        <span className="text-xl text-purple-700">{testimonies[0].name} -</span> <span className="text-lg font-black"> CEO {testimonies[0].company} </span>
                    </motion.p>
            </motion.div>
        </motion.div>


        </motion.div>
    )
}

export default Testimonial
