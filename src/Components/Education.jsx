import React from 'react';
import blur_circle from '../assets/blur_circle.svg';
export const Education = () => {
  return (
    <div className=' p-[20px] md:p-[30px] w-full md:w-2/3'>
      <p className='font-medium fs_md leading-10 clr_primary pb-3 md:pb-5 text-center md:text-start mt-[-42px] md:mt-0'>My Education</p>
      <p className=' tracking-wide fs_xxs pb-5 md:pb-11 text-center md:text-start'>Lorem ipsum dolor sit amet consectetur. Aliquet elit dolorLorem ipsum dolor sit amet consectetur. Aliquet elit dolor..</p>
      <div className='relative'>

        <div className='w-full sm:w-[47%] mb-5 md:mb-9'>
         <div className='relative'>
            <p className='leading-5 clr_secondary font-normal fs_xs tracking-widest pb-[14px] text-start sm:text-end'>2021</p>
            <img src={blur_circle} alt="" className='absolute right-[-32px] md:right-[-31px] lg:right-[-33px] xl:right-[-35px] top-0 hidden sm:block'  />
         </div>
          <div className='bg_primary rounded-[20px] border-2  py-[10px] px-[15px]  brdr_purple'>
            <p className='clr_primary fs_xs font-medium pb-[10px]'>High School</p>
            <p className=' tracking-wide fs_xxs clr_secondary leading-0 text-end'>Lorem ipsum dolor sit amet consectetur. Aliquet elit dolorLorem ipsum dolor sit amet consectetur</p>

          </div>
        </div>
        <div className='ms-auto w-full sm:w-[47%] mb-5 md:mb-9'>
          <div className='relative'>
            <p className='leading-5 clr_secondary font-normal fs_xs tracking-widest pb-[14px] '>2022</p>
            <img src={blur_circle} alt="" className='absolute left-[-30px] lg:left-[-31px] top-[0px] hidden sm:block' />
          </div>
          <div className='bg_primary rounded-[20px] border-2  py-[10px] px-[15px]  brdr_purple '>
            <p className='clr_primary fs_xs font-medium pb-[10px]'>High School</p>
            <p className=' tracking-wide fs_xxs clr_secondary leading-0 text-end'>Lorem ipsum dolor sit amet consectetur. Aliquet elit dolorLorem ipsum dolor sit amet consectetur</p>
          </div>
       </div>
        <div className='w-full sm:w-[47%] mb-9'>
          <div className='relative'>
            <p className='leading-5 clr_secondary font-normal fs_xs tracking-widest pb-[14px] text-start sm:text-end'>2023</p>
            <img src={blur_circle} alt="" className='absolute right-[-32px] md:right-[-31px] lg:right-[-33px] xl:right-[-35px] top-0 hidden sm:block' />
          </div>
          <div className='bg_primary rounded-[20px] border-2  py-[10px] px-[15px]  brdr_purple'>
            <p className='clr_primary fs_xs font-medium pb-[10px]'>High School</p>
            <p className=' tracking-wide fs_xxs clr_secondary leading-0 text-end'>Lorem ipsum dolor sit amet consectetur. Aliquet elit dolorLorem ipsum dolor sit amet consectetur</p>

          </div>
        </div>
        <div className='w-[3px] rounded-[1px] h-[110%] bg_secondary absolute top-[-20px] left-1/2 hidden sm:block'>

        </div>
      </div>
    </div>
  )
}
