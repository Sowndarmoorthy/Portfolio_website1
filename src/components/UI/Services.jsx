

import React from 'react'
import front from "../../assets/images/com.png"
import math from "../../assets/images/math.png"
import bio from "../../assets/images/image-removebg-preview (3).png"
import book from "../../assets/images/book.png"
const Services = () => {
  return (
    <section id='services'>
        <div className='container lg:pt-5'>
            <div className='text-center'>
                <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>
                    MY EDUCATION
                </h2>
                <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
                I have consistently pursued my academic journey with a strong focus on enhancing my knowledge and skills in technology. 
                My education has equipped me with both theoretical understanding and practical experience, preparing me for dynamic roles in the tech industry. 
                Throughout my studies, I have demonstrated a commitment to excellence and continuous learning.</p>
            </div>

            <div className='flex flex-col justify-center sm:py-12'>
                <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                    <div className='relative text-gray-700 antialiased text-sm font-semibold'>
                        <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform
                        -translate-x-1/2'></div>
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded
                                        shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>MCA (2023-2025)</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                I am Currently pursuing My Master's in Computer Applications at Kongu Enginnering College with 8.35 CGPA.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={front} alt='' />
                                    </figure>
                                </div>
                            </div>
                        </div>





                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div data-aos='fade-left' data-aos-delay='50' data-aos-duration='1300' className='bg-white p-4 rounded
                                        shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>Bsc (2020-2023)</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                            I previously completed my undergraduate degree in Mathematics at Gobi Arts And Science in 2023 with 6.76 CGPA.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={math} alt='' />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div data-aos='fade-right' data-aos-delay='100' data-aos-duration='1400' className='bg-white p-4 rounded
                                        shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>12th (2018-2020)</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                            I completed my 12th grade in the Biology group at Government Boys Higher Secondary School with 64%.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={bio} alt='' />
                                    </figure>
                                </div>
                            </div>
                        </div>





                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div data-aos='fade-left' data-aos-duration='1200' className='bg-white p-4 rounded
                                        shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>10th (2017-2018)</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                            I completed my 10th grade at Government High School, Chikkasarsam Palayam with 78%.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={book} alt='' />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Services