import React from 'react';
import profile from '../assets/profile.svg';
export const NavBar = () => {
  return (
    <nav className='max-w-[1140px] mx-auto px-12 mt-14 bg_tertiary rounded-[20px] shdow py-5 '>
      <div className=' flex justify-between items-center'>
        <div className='flex items-center'>
          {/* <div className=' w-[59px] h-[59px] bg_secondary rounded-full relative'>
            <img src={profile} alt="" className='absolute bottom-5'/>
          </div> */}
          <img src={profile} alt="" className='bottom-5' />
          <a href=""><p className=' font-medium fs_sm clr_primary ps-6'>SUNAINA RALIA</p></a>
        </div>
        <div>
          <ul className='flex items-center'>
            <li> <a href='' className='font-medium fs_xxs clr_primary pe-8'>HOME</a></li>
            <li> <a href='' className='font-medium fs_xxs clr_primary pe-8'>ABOUT</a></li>
            <li> <a href='' className='font-medium fs_xxs clr_primary pe-8'>PROJECTS</a></li>
            <li> <a href='' className='font-medium fs_xxs clr_primary pe-8'>CONTACT</a></li>
            <li><button className='bg_secondary clr_powder rounded-[10px] py-[5px] px-[10px]'>RESUME</button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
