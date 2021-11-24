import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import features from '../assets/svg/features.svg'

function Features() {
    return (
       <motion.div id="pages">
           <motion.h1 className="text-center text-gray-500   text-lg font-semibold">FEATURES</motion.h1>
           <motion.h1 className="py-3 text-center md:text-5xl text-3xl font-black text-gray-700">Our Special Features</motion.h1>
           {/* Flex Items */}

           {/* Flex container */}
           <motion.div className="flex justify-center items-center lg:p-10 lg:m-10 features ">
               {/* Three flex items */}
                <motion.div className="lg:w-1/3 w-100 lg:pl-0">
                   <motion.div>
                       <motion.div 
                            initial={{opacity:0,y:-10}}
                            whileInView={{opacity:1,y:0}}
                            transition={{duration:.6,delay:.6}}
                            viewport={{ once: true }}
                            className="text-2xl wrapper p-3">
                                <p className="text-2xl rounded-full bg-purple-700 flex items-center justify-center"><motion.i className=" fa fa-globe icon text-white "></motion.i></p>
                                 <div>
                                 <p className="pl-3 text-gray-800">Web Development</p>
                                    <p className="text-base text-gray-400 pl-3">We build highly responsive designs to perfection.
                                  
                                  </p>
                                 </div>
                            </motion.div>
                   </motion.div>
                   <motion.div>
                       <motion.div 
                            initial={{opacity:0,y:-10}}
                            whileInView={{opacity:1,y:0}}
                            transition={{duration:.6,delay:.6}}
                            viewport={{ once: true }}
                            className="text-2xl wrapper p-3">
                                <p className="text-2xl rounded-full bg-purple-700 flex items-center justify-center"><motion.i className=" fa fa-mobile icon text-white text-2xl "></motion.i></p>
                                 <div>
                                 <p className="pl-3 text-gray-800">Mobile App Development</p>
                                    <p className="text-base text-gray-400 pl-3">We can buld you a highly functional mobile app for all platforms.
                                  
                                  </p>
                                 </div>
                            </motion.div>
                   </motion.div>
                   <motion.div>
                       <motion.div 
                            initial={{opacity:0,y:-10}}
                            whileInView={{opacity:1,y:0}}
                            transition={{duration:.6,delay:.6}}
                            viewport={{ once: true }}
                            className="text-2xl wrapper p-3">
                                <p className="text-2xl rounded-full bg-purple-700 flex items-center justify-center"><motion.i className=" fa fa-object-group icon text-white "></motion.i></p>
                                 <div>
                                 <p className="pl-3 text-gray-800">Web Design</p>
                                    <p className="text-base text-gray-400 pl-3">We wrangle and visualize your data and make predictions.
                                  
                                  </p>
                                 </div>
                            </motion.div>
                   </motion.div>
               </motion.div>
               {/* End of item 1 with 3 items */}

                {/* Item 2 with the illustration svg */}
               <motion.div className="lg:p-0 p-5">
                   <motion.img 
                   initial={{y:5}}
                        animate={{y:0}}
                        transition={{
                        type:"tween",
                        stiffness:100,
                        yoyo:Infinity,
                        duration:.8,
                        }}
                   src={features} alt="illustration" className="w-100"/>
               </motion.div>
               {/* End of item 2 with svg illustration */}

                {/* Item three with three inner items */}
               <motion.div className="lg:w-1/3 w-100">
                   <motion.div>
                       <motion.div 
                            initial={{opacity:0,y:-10}}
                            whileInView={{opacity:1,y:0}}
                            transition={{duration:.6,delay:.6}}
                            viewport={{ once: true }}
                            className="text-2xl wrapper p-3">
                                <p className="text-2xl rounded-full bg-purple-700 flex items-center justify-center"><motion.i className=" fa fa-cubes icon text-white "></motion.i></p>
                                 <div>
                                 <p className="pl-3 text-gray-800">Fullstack Development</p>
                                    <p className="text-base text-gray-400 pl-3">Do you need a fullstack developer, we've got you.
                                  
                                  </p>
                                 </div>
                            </motion.div>
                   </motion.div>
                   <motion.div>
                       <motion.div 
                            initial={{opacity:0,y:-10}}
                            whileInView={{opacity:1,y:0}}
                            transition={{duration:.6,delay:.6}}
                            viewport={{ once: true }}
                            className="text-2xl wrapper p-3">
                                <p className="text-2xl rounded-full bg-purple-700 flex items-center justify-center"><motion.i className=" fa fa-newspaper-o icon text-white "></motion.i></p>
                                 <div>
                                 <p className="pl-3 text-gray-800">Frontend Development</p>
                                    <p className="text-base text-gray-400 pl-3">Do you need a frontend developer, we've got you.
                                  
                                  </p>
                                 </div>
                            </motion.div>
                   </motion.div>
                   <motion.div>
                       <motion.div 
                            initial={{opacity:0,y:-10}}
                            whileInView={{opacity:1,y:0}}
                            transition={{duration:.6,delay:.6}}
                            viewport={{ once: true }}
                            className="text-2xl wrapper p-3">
                                <p className="text-2xl rounded-full bg-purple-700 flex items-center justify-center"><motion.i className=" fa fa-database icon text-white "></motion.i></p>
                                 <div>
                                 <p className="pl-3 text-gray-800">Backend Development</p>
                                    <p className="text-base text-gray-400 pl-3">Do you need a backend developer, we've got you.
                                  
                                  </p>
                                 </div>
                            </motion.div>
                   </motion.div>
               </motion.div>
               {/* end of item three with 3 inner items */}

           </motion.div>
       </motion.div>
    )
}

export default Features
