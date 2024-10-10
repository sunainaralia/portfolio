import React from 'react'
import arrow from '../assets/arrow.svg';
import flower2 from '../assets/flower2.png';
import flower3 from '../assets/flower3.svg';
import flower4 from '../assets/flower4.png';
export const AboutMe = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='pt-4 md:pt-8 max-w-[1140px] mx-auto '>
        <h2 className='text-center pb-3 xl:pb-7'>ABOUT ME</h2>
        <div className='w-[90px] h-2 bg_secondary rounded-[5px] mx-auto mb-5 xl:mb-12'>
        </div>
        <p className=' font-normal fs_sm text-center w-full md:w-[65%] mx-auto pb-6 md:pb-12 clr_tertiary'>Here you will find more information about me, What i do, and my current skills mostly in terms of programming and technology</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 px-2 md:px-8 xl:px-0 mb-0 md:mb-6 '>
          <div>
            <h3 className='pb-4 md:pb-7 text-center md:text-start'>Get to Know me!</h3>
            <p className='font-light leading-6 fs_xs pb-4 clr_tertiary'>I'm a <span className='font-semibold'>Backend Focused Web Developer</span> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span className='font-semibold'>Projects</span> section</p>
            <p className='font-light leading-6 fs_xs pb-4 clr_tertiary'>I also like sharing content related to the stuff that I have learned over the years in <span className='font-semibold'>Web Development </span>so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href='' className='clr_secondary font-semibold brdr_b'>Linkedin</a> and <a href='' className='clr_secondary font-semibold brdr_b'>Instagram</a>  where I post useful content related to Web Development and Programming</p>
            <p className='font-light leading-6 fs_xs pb-4 clr_tertiary'>I'm open to <span className='font-semibold'>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span className='font-semibold'>contact</span> me.</p>
            <button className='bg_secondary rounded-[5px] clr_powder py-4 px-12 md:px-[75px] font-semibold fs_sm block mt-[40px] md:mt-[70px] relative mx-auto md:mx-0'>
             CONTACT
              <img src={flower3} alt="" className=' absolute bottom-[55px]' />
            </button>
          </div>
          <div>
            <div className='relative pb-8'>
              <h3>My Skills</h3>
              <img src={arrow} alt="" className='absolute left-[127px] sm:left-[130px] top-[36%] md:left-[23%] md:top-[50%]' />
            </div>
            <div className="flex flex-wrap gap-4 mb-6 md:mb-0">
              <div className='font-medium fs_xs clr_primary leading-5 py-[10px] px-5 rounded-[5px] bg_primary text-center text-nowrap'>Html</div>
              <div className='font-medium fs_xs clr_primary leading-5 py-[10px] px-5 rounded-[5px] bg_primary text-center text-nowrap'>Css</div>
              <div className='font-medium fs_xs clr_primary leading-5 py-[10px] px-5 rounded-[5px] bg_primary text-center text-nowrap'>JavaScript</div>
              <div className='font-medium fs_xs clr_primary leading-5 py-[10px] px-5 rounded-[5px] bg_primary text-center text-nowrap'>React</div>
              <div className='font-medium fs_xs clr_primary leading-5 py-[10px] px-5 rounded-[5px] bg_primary text-center text-nowrap'>wordpress</div>
              <div className='font-medium fs_xs clr_primary leading-5 py-[10px] px-5 rounded-[5px] bg_primary text-center text-nowrap'>Node</div>
              <div className='font-medium fs_xs clr_primary leading-5 py-[10px] px-5 rounded-[5px] bg_primary text-center text-nowrap'>Python</div>
              <div className='font-medium fs_xs clr_primary leading-5 py-[10px] px-5 rounded-[5px] bg_primary text-center text-nowrap'>Django</div>
              <div className='font-medium fs_xs clr_primary leading-5 py-[10px] px-5 rounded-[5px] bg_primary text-center text-nowrap'>React Native</div>
              <div className='font-medium fs_xs clr_primary leading-5 py-[10px] px-5 rounded-[5px] bg_primary text-center text-nowrap'>Rest API</div>

            </div>

          </div>
        </div>

      </div>
      <div className=' absolute left-0 top-[-40px] md:top-[-90px]'>
        <img src={flower2} alt="" className=' w-1/2 md:w-full h-1/2 md:h-full' />
      </div>
      <div className=' absolute right-[-34px] md:right-0 bottom-[149px] md:bottom-[-15px]'>
        <img src={flower4} alt="" className=' w-3/4 md:w-full h-3/4 md:h-full' />
      </div>
   </div>
  )
}
