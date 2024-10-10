import React from 'react'
import github2 from '../assets/github2.svg';
import linkdin2 from '../assets/linkdin2.svg';
import youtube2 from '../assets/youtube2.svg';
import twitter2 from '../assets/twitter2.svg';
export const Footer = () => {
  return (
    <div className='bg_dark py-8 lg:py-20 px-4 lg:px-4'>
      <div className='mx-auto max-w-[1140px] '>
        <div className='flex justify-between pb-10 flex-col sm:flex-row lg:pb-20'>
          <div className='w-full sm:w-[60%] lg:w-[47%] pb-5 sm:pb-0'>
            <p className='font-semibold fs_sm leading-6 clr_powder pb-[10px]'>SUNAINA RALIA</p>
            <p className='font-normal fs_xxs clr_lightPowder'>A Backend focused Web Developer building the backend of the websites and Web Application that leads to the success of the overall peoduct</p>
          </div>
          <div>
            <p className='font-semibold fs_sm leading-6 clr_powder pb-[10px]'>SOCIAL</p>
            <div className='flex'>
              <img src={github2} alt="" className='pe-[10px]' />
              <img src={linkdin2} alt="" className='pe-[10px]' />
              <img src={youtube2} alt="" className='pe-[10px]' />
              <img src={twitter2} alt="" />
            </div>
          </div>

        </div>
        <hr />
        <p className='fs_xxs text-center clr_powder pt-5 lg:pt-8'>© Copyright 2024 
</p>
   </div>

    </div>
  )
}
