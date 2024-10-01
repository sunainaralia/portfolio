import React from 'react'
import arrow from '../assets/arrow.svg';
import flower2 from '../assets/flower2.png';
import flower3 from '../assets/flower3.svg';
import flower4 from '../assets/flower4.png';
export const AboutMe = () => {
  return (
    <div className='relative'>
      <div className='pt-8 max-w-[1140px] mx-auto '>
        <h2 className='text-center pb-7'>ABOUT ME</h2>
        <div className='w-[90px] h-2 bg_secondary rounded-[5px] mx-auto mb-12'>
        </div>
        <p className=' font-normal fs_sm text-center w-[65%] mx-auto pb-12 clr_tertiary'>Here you will find more information about me, What i do, and my current skills mostly in terms of programming and technology</p>
        <div className='grid grid-cols-2 gap-16'>
          <div>
            <h3 className='pb-7'>Get to Know me!</h3>
            <p className='font-light leading-6 fs_xs pb-4 clr_tertiary'>I'm a <span className='font-semibold'>Backend Focused Web Developer</span> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span className='font-semibold'>Projects</span> section</p>
            <p className='font-light leading-6 fs_xs pb-4 clr_tertiary'>I also like sharing content related to the stuff that I have learned over the years in <span className='font-semibold'>Web Development </span>so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href='' className='clr_secondary font-semibold brdr_b'>Linkedin</a> and <a href='' className='clr_secondary font-semibold brdr_b'>Instagram</a>  where I post useful content related to Web Development and Programming</p>
            <p className='font-light leading-6 fs_xs pb-4 clr_tertiary'>I'm open to <span className='font-semibold'>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span className='font-semibold'>contact</span> me.</p>
            <button className='bg_secondary rounded-[5px] clr_powder py-4 px-[75px] font-semibold fs_sm block mt-[70px] relative '>
             CONTACT
              <img src={flower3} alt="" className=' absolute bottom-[55px]' />
            </button>
          </div>
          <div>
            <div className='relative pb-8'>
              <h3>My Skills</h3>
              <img src={arrow} alt="" className='absolute left-[23%] top-[50%]' />
            </div>
            <div className="flex flex-wrap gap-4">
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
      <div className=' absolute left-0 top-[-90px]'>
        <img src={flower2} alt="" />
      </div>
      <div className=' absolute right-0 bottom-[-15px]'>
        <img src={flower4} alt="" />
      </div>
   </div>
  )
}
