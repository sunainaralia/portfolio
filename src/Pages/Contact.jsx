import React from 'react'
import flower2 from '../assets/flower2.png';
import flower5 from '../assets/flower5.png';
export const Contact = () => {
  return (
    <div className='relative bg_img pb-4 lg:pb-8 overflow-x-hidden px-4'>
      <div className='pt-4 md:pt-8 max-w-[1140px] mx-auto '>
        <h2 className='text-center pb-3 lg:pb-7'>CONTACT</h2>
        <div className='w-[90px] h-2 bg_secondary rounded-[5px] mx-auto mb-4 lg:mb-12'>
        </div>
        <p className=' font-normal fs_sm text-center w-full md:w-[65%] mx-auto pb-4 lg:pb-12 clr_tertiary '>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        <form action="" className='w-full md:w-3/4 mx-auto pb-4 lg:pb-12'>
          <label htmlFor="name" className='font-medium fs_sm leading-6 pb-2 lg:pb-3 block'>Name</label>
          <input type="text" name="name" id="name" placeholder='Entre your name' className='p-5 font-bold fs_sm clr_hexa leading-6 bg_hexa rounded-[10px] w-full mb-7' />
          <label htmlFor="name" className='font-medium fs_sm leading-6 pb-2 lg:pb-3 block'>E-mail</label>
          <input type="email" name="name" id="name" placeholder='Entre your E-mail' className='p-5 font-bold fs_sm clr_hexa leading-6 bg_hexa rounded-[10px] w-full mb-7' />
          <label htmlFor="name" className='font-medium fs_sm leading-6 pb-2 lg:pb-3 block'>Message</label>
          <textarea name="message" id="message" className='p-5 font-bold fs_sm clr_hexa leading-6 bg_hexa rounded-[10px] w-full' placeholder='Entre your message' rows={10}></textarea>
          <input type="submit" value="SUBMIT" className='bg_secondary rounded-[5px] clr_powder py-3 md:py-4 px-[50px] md:px-[75px] font-semibold fs_sm block mt-4 md:mt-[30px] mx-auto md:ms-auto md:me-0 ' />
        </form>
      </div>
      <div className=' absolute left-0 top-[-63px] xl:top-[85px] hidden md:block'>
        <img src={flower2} alt="" />
      </div>
      <div className=' absolute right-[-93px] xl:right-0 bottom-[20px] hidden md:block'>
        <img src={flower5} alt="" className="w-2/3 h-2/3 xl:w-full xl:h-full"/>
      </div>
    </div>
  )
}
