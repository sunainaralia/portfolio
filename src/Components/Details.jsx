import React from 'react'

export const Details = () => {
  return (
    <div className='px-[20px] py-[30px] xl:px-[30px] w-full md:w-2/3'>
      <p className='font-medium fs_md leading-10 clr_primary pb-3 md:pb-5 mt-[-42px] md:mt-0 text-center md:text-start'>About Me</p>
      <p className=' tracking-widest fs_xxs pb-4 xl:pb-11 text-center md:text-start'>Lorem ipsum dolor sit amet consectetur. Aliquet elit dolorLorem ipsum dolor sit amet consectetur. Aliquet elit dolor..</p>
      <div className='p-2 md:p-0 xl:p-5 grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-7'>
        <div className='flex items-center '>
          <p className='clr_primary font-normal tracking-widest md:tracking-wide lg:tracking-widest fs_xxs pe-2 xl:pe-5'>Name</p>
          <p className=' clr_secondary font-semibold fs_xs tracking-widest md:tracking-wide lg:tracking-widest '>Sunaina Ralia</p>
        </div>
        <div className='flex items-center '>
          <p className='clr_primary font-normal tracking-widest md:tracking-wide lg:tracking-widest  fs_xxs pe-2 xl:pe-5'>Phone</p>
          <p className=' clr_secondary font-semibold fs_xs tracking-widest md:tracking-wide lg:tracking-widest text-nowrap'>+91 88454-44567</p>
        </div>
        <div className='flex items-center '>
          <p className='clr_primary font-normal tracking-widest md:tracking-wide lg:tracking-widest  fs_xxs pe-2 xl:pe-5'>Experience</p>
          <p className=' clr_secondary font-semibold fs_xs tracking-widest md:tracking-wide lg:tracking-widest '>10+ Years</p>
        </div>
        <div className='flex items-center '>
          <p className='clr_primary font-normal tracking-widest md:tracking-wide lg:tracking-widest  fs_xxs pe-2 xl:pe-5'>Email</p>
          <p className=' clr_secondary font-semibold fs_xs tracking-widest md:tracking-wide lg:tracking-widest '>sunenaralia@gmail.com</p>
        </div>   <div className='flex items-center '>
          <p className='clr_primary font-normal tracking-widest md:tracking-wide lg:tracking-widest  fs_xxs pe-2 xl:pe-5'>Nationality</p>
          <p className=' clr_secondary font-semibold fs_xs tracking-widest md:tracking-wide lg:tracking-widest '>Indian</p>
        </div>   <div className='flex items-center '>
          <p className='clr_primary font-normal tracking-widest md:tracking-wide lg:tracking-widest  fs_xxs pe-2 xl:pe-5'>Language</p>
          <p className=' clr_secondary font-semibold fs_xs tracking-widest md:tracking-wide lg:tracking-widest '>Hindi,English</p>
        </div>
      </div>
    </div>
  )
}
