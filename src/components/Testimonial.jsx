import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import Kips from '../assets/images/team1.jpg'
import Glen from '../assets/images/team2.jpg'
import Lipton from '../assets/images/team3.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
        <div className="flex justify-center items-center w-screen flex-col md:flex-row pt-10 pb-20">
        <motion.div className="md:w-1/2 w-full">
        <motion.p className="md:text-4xl text-3xl font-black text-gray-800 px-14 text-center">
            Check What our customers are saying about our services.
        </motion.p>
        <motion.p className="text-lg text-gray-400 px-14 text-center">
            We deliver on everything we say, from accurate predictions to classic and very realistic UI
        </motion.p>
        </motion.div>

        <Carousel 
            showArrows={false}
            stopOnHover={false}
            swipeable={true}
            infiniteLoop={true}
            autoPlay={true}
        className="carousel-container md:w-1/2 w-full">
           { testimonies.map((e,i)=>(
        <motion.div className="border-gray-500 bg-gray-200 p-8 mx-10 " key={i}>
               <motion.div className="testmony-card flex justify-center  flex-col ">
                <motion.div className="flex justify-center relative">
                <motion.div className="card  w-24 mb-3 h-24 bg-center bg-contain ring-gray-300 shadow ring-8 rounded-full "
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
           </Carousel>
 

</div>
        </>
    )
}

export default Testimonial
