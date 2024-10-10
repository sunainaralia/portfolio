import React from 'react'
import iteration from '../assets/iteration.png';
import flower9 from '../assets/flower9.svg';
import flower3 from '../assets/flower3.svg';
export const Projects = () => {
  return (
    <div className='pt-4 md:pt-8 max-w-[1140px] mx-auto '>
      <h2 className='text-center pb-3 xl:pb-7'>PROJECTS</h2>
      <div className='w-[90px] h-2 bg_secondary rounded-[5px] mx-auto mb-5 xl:mb-12'>
      </div>
      <p className=' font-normal fs_sm text-center w-full md:w-[65%] mx-auto pb-6 md:pb-12 clr_tertiary'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 items-center justify-between px-2 md:px-4 xl:px-0 border-b-4 border-dotted border_btm pb-7 md:pb-20 relative overflow-hidden'>
      <div className=''>
        <img src={iteration} alt="" className='w-full h-full' />
      </div>
      <div className='pb-8'>
          <h3 className='pb-6 text-center md:text-start'>Wei Yuan</h3>
          <p className='font-light leading-6 fs_xs pb-6 clr_tertiary text-center md:text-start' >Wei Yuan is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
          <button className='bg_secondary rounded-[5px] clr_powder py-4 px-16 md:px-[75px] font-semibold fs_sm block mx-auto md:mx-0'>
            CASE STUDY
          </button>
      </div>
      <img src={flower3} alt=""  className=' absolute bottom-[-10px] right-0'/>
        <img src={flower9} alt="" className=' absolute bottom-[-30px] left-0 hidden sm:block' />

     </div>
    

    </div>
  )
}
