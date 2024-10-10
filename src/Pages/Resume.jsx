import React from 'react'
import { NavBar } from '../Components/NavBar';
import { Experience } from '../Components/Experience';
import { Education } from '../Components/Education';
import { Details } from '../Components/Details';
import { Outlet,Link } from 'react-router-dom';
export const Resume = () => {
  return (
    <div className=''>
      <div className='max-w-[1140px] mx-auto'>
        <div className=' flex mt-4 md:mt-12 flex-col md:flex-row'>
          <div className='p-[30px] border-red-950 w-full md:w-1/3 relative'>
            <h2 className=' text-nowrap pb-3 leading-0 leading-[50px] text-center md:text-start '>
              Why hire me?
            </h2>
            <p className=' tracking-wider pb-5 fs_xxs text-center md:text-start'>Lorem ipsum dolor sit amet consectetur. Aliquet elit dolor.</p>
            <Link to="" className='font-normal fs_xxs bg_primary clr_primary rounded-[10px] py-[15px]  mb-5 w-full text-center block'>Experience</Link>
            <Link to="education/" className='font-normal fs_xxs bg_primary clr_primary rounded-[10px] py-[15px]  mb-5 w-full text-center block'>Education</Link>
            <Link to="about/" className='font-normal fs_xxs bg_primary clr_primary rounded-[10px] py-[15px]  mb-5 w-full text-center block'>About Me</Link>
          </div>
          <Outlet>
            </Outlet>
        </div>

      </div>
    </div>
  )
}
