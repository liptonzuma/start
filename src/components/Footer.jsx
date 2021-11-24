/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Footer() {
    return (
        <div className="relative">
            <div>
            <svg className="absolute z-30 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FEE2E2" fillOpacity="1" d="M0,192L40,213.3C80,235,160,277,240,282.7C320,288,400,256,480,229.3C560,203,640,181,720,186.7C800,192,880,224,960,213.3C1040,203,1120,149,1200,138.7C1280,128,1360,160,1400,176L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>\
            </svg>

            <svg className="absolute z-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
            ><path fill="#6D28D9" fillOpacity="1" d="M0,160L40,154.7C80,149,160,139,240,154.7C320,171,400,213,480,234.7C560,256,640,256,720,245.3C800,235,880,213,960,202.7C1040,192,1120,192,1200,208C1280,224,1360,256,1400,272L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
            <div className="flex flex-col md:flex-row absolute md:top-64 z-50 bg-purple-700 w-screen mt-10 py-10 items-center">
               <div className="flex flex-col px-8 w-12/12 md:w-4/12">
                    <a href="#" className="text-white logo text-3xl font-black px-10 pt-10">py<span className="text-green-400">.inc</span></a> 
                    <p className="text-white px-10 text-lg py-2">
                        The best digital solutions agency for all
                        related problems. We make them all disappear
                        like they never existed.
                    </p>
                </div>
                <div className="flex flex-col md:px-8 px-0 md:w-4/12 w-12/12">
                    <h1 className="text-white text-3xl font-extrabold">Subscribe to Newsletters.</h1>
                    <input placeholder="Enter email" className="px-2 py-2 md-4 input"/>
                    <div className="icons flex  justify-between mt-4">
                        <a href="https://twitter.com/gyan_boateng" target="_blank" className="text-white text-2xl flex">
                            <i className="fa fa-twitter"></i>
                            <p>Twitter</p>
                        </a>
                        <a href="https://github.com/liptonzuma" target="_blank"  className="text-white text-2xl flex">
                            <i className="fa fa-github"></i>
                            <p>Github</p>
                        </a>
                        <a href="" className="text-white text-2xl flex" target="_blank" >
                            <i className="fa fa-linkedin pr-1"></i>
                            <p>Linkedin</p>
                        </a>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Footer
