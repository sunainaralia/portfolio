import React from 'react'
import { NavBar } from '../Components/NavBar';
import flower1 from '../assets/flower1.svg';
import down_icon from '../assets/down_icon.svg';
import smile_icon from '../assets/smile_icon.svg';
import github from '../assets/github.svg';
import linkdin from '../assets/linkdin.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';
export const HomePage = () => {
  return (
    <header className='bg_img min-h-[130vh] flex flex-col relative'>
      <div>
        <NavBar />
        <div className='max-w-[1140px] mx-auto'>
          <h1 className=' text-center pt-28 pb-3 leading-[93px]'>HEY, I’ M SUNAINA RALIA</h1>
          <p className=' clr_secondary font-medium fs_xl text-center leading-[60px]'>Full Stack Developer</p>
          <p className='pt-12 text-center w-2/3 mx-auto'>A Result- Oriented Web Developer building and managing Website and Web Applications that leads to the success of the overall product</p>
          <button className='bg_secondary rounded-[5px] clr_powder py-4 px-[75px] font-semibold fs_sm block mx-auto mt-[70px] relative '>
            PROJECTS
            <img src={flower1} alt="" className=' absolute bottom-[50px]' />
          </button>
        </div>
      </div>
      <div className='px-8 flex flex-grow items-end pb-10'>
        <div className='flex justify-between items-center w-full'>
          <button className=' bg_secondary clr_powder font-medium fs_xs py-4 px-10 rounded-[138px]'>
            sunenaralia@gmail.com
          </button>
          <div className='w-9 h-24 bg_primary rounded-[86px]'>
            <img src={down_icon} alt="" className=' mx-auto py-4' />
          </div>
          <div className='flex items-center'>
            <button className=' fs_sm font-normal clr_ash flex py-4 px-4 bg_tertiary rounded-[92px] shdow me-4'>
              Chat with me <img src={smile_icon} alt="" className='ps-[10px]' />
            </button>
            <div className=' w-[59px] h-[59px] bg_secondary rounded-full'>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bg_tertiary shdow p-[10px] top-1/3'>
        <a href="" className='mb-5 block'><img src={github} alt="" /></a>
        <a href="" className='mb-5 block'><img src={linkdin} alt="" /></a>
        <a href="" className='mb-5 block'><img src={twitter} alt="" /></a>
        <a href="" className='block'><img src={youtube} alt="" /></a>

      </div>
    </header>
  )
}
