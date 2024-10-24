

import React from 'react'
import heroImg from '../../assets/images/hero.jpg'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className='pt-0' id='about'>
        <div className='container pt-14'>
            <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                <div className='w-flex md:basis-1/2'>
                    <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[16px]'>
                        Welcome
                    </h5>
                    <h1 data-aos='fade-up'
                     data-aos-duration='1500' className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>I'm Sowndar Moorthy<br />FullStack Developer</h1>
                     <div data-aos='fade-up'
                      data-aos-duration='1800'
                      data-aos-delay="200" 
                      className='flex items-center gap-6 mt-7'
                      >
                    <a href='mailto:sowndarmoorthy@gmail.com?subject=Hire%20Me&body=Hello%20Sowndar,'>
                     <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                        <i className="ri-mail-line"></i>
                        Hire me!
                        </button>
                    </a>

                        <a href='#portfolio' 
                        className='text-smallTextColor font-[600] text-[16px] border-b border-soild border-smallTextColor'>
                            See Portfolio
                        </a>
                      </div>

                    <p 
                        data-aos='fade-left'
                        data-aos-duration='1500' 
                        className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'>
                        <span>
                            <i className="ri-apps-line"></i>
                        </span>

                        I am a full-stack developer with hands-on experience in MERN stack development. Check out my latest projects and details in my portfolio, and feel free to contact me using the Hire Me button.
                    </p>

                    <div className='flex items-center gap-9 mt-14'>
                        <span className='text-smallTextColor text-[15px] font-[600]'>
                            Follow me:
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/sowndar-m-a7420321b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-smallTextColor text-[18px] font-[600]'>
                            <i className="ri-linkedin-box-fill"></i>
                                
                                </a>
                        </span>
                        <span>
                            <a href="https://github.com/Sowndarmoorthy?tab=repositories" className='text-smallTextColor text-[18px] font-[600]'>
                                <i className="ri-github-fill"></i>
                                
                                </a>
                        </span>
                        <span>
                            <a href="https://www.instagram.com/sowndar_moorthy/profilecard/?igsh=MWc3eHZpaHVodWNnOQ==" className='text-smallTextColor text-[18px] font-[600]'>
                            <i className="ri-instagram-line"></i>
                            </a>
                        </span>
                        <span>
                            <a href="https://leetcode.com/u/Sowndarmoorthy/" className='text-smallTextColor text-[18px] font-[600]'>
                            <i className="ri-code-box-line"></i>                                
                                </a>
                        </span>
                    </div>

                </div>
                <div className='basis-1/3 mt-10 sm:mt-0'>
                    <figure className='flex items-center justify-center'>
                        <img src={heroImg} alt="" />
                    </figure>
                </div>
                <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={8} duration={2} suffix='+' />
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>CGPA</h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={100} duration={2} suffix='%' />
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>Success rate</h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={2} duration={2} suffix='+' />
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>Projects</h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={2} duration={2} suffix='+' />
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>Certificates</h4>
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Hero