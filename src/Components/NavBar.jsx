import React, { useEffect, useRef, useState } from 'react';
import profile from '../assets/profile.svg';
import { Link } from 'react-router-dom';
export const NavBar = () => {
  const hamburger = useRef(null);
  const menu_color = useState(false)
  const menu = useRef(null);
  const [show_hide, setShow_hide] = useState(false);
  function show_hide_menu(e) {
    e.preventDefault()
    setShow_hide(!show_hide)

  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setShow_hide(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className=''>
      <div className='h-12'>
      </div>
      <nav className={` sticky top-0 left-0 right-0 z-50 max-w-[1140px] mx-2 lg:mx-auto px-6 lg:px-12   rounded-[20px] shdow py-2 ${show_hide ? 'bg_secondary' : 'bg_tertiary'}`}>
        <div className=' flex justify-between items-center '>
          <div className='flex items-center'>
            <img src={profile} alt="" className='bottom-5' />
            <Link to="/"><p className={` font-medium fs_sm ps-4 md:ps-6 ${show_hide ? 'clr_powder' : 'clr_primary'}`}>SUNAINA RALIA</p></Link>
          </div>
          <div>
            <ul className={`${show_hide ? 'left-0 bg_secondary flex' : 'left-[-110%]'} ease-in-out lg:flex items-center flex-col lg:flex-row h-[100vh] lg:h-auto absolute lg:static  w-full top-[128px] opacity-1 z-[2] justify-around lg:justify-normal`} ref={menu}>
              <li> <Link to='/' className={`font-medium fs_xxs clr_primary pe-8 ${show_hide ? 'fs_md clr_powder' : 'fs_xxs clr_primary'}`}>HOME</Link></li>
              <li> <a href='' className='font-medium fs_xxs clr_primary pe-8'>ABOUT</a></li>
              <li> <a href='' className='font-medium fs_xxs clr_primary pe-8'>PROJECTS</a></li>
              <li> <a href='' className='font-medium fs_xxs clr_primary pe-8'>CONTACT</a></li>
              <li><Link to='resume/' className='bg_secondary clr_powder rounded-[10px] py-[5px] px-[10px]'>RESUME</Link></li>
            </ul>
          </div>
          {/* hamburger */}
          <div className='block lg:hidden' ref={hamburger} onClick={show_hide_menu}>
            <span className={`w-12 h-2 ${show_hide ? 'bg_tertiary' : 'bg_secondary'} mb-2 block rounded-md`}></span>
            <span className={`w-12 h-2 ${show_hide ? 'bg_tertiary' : 'bg_secondary'} mb-2 block rounded-md`}></span>
            <span className={`w-12 h-2 ${show_hide ? 'bg_tertiary' : 'bg_secondary'} mb-2 block rounded-md`}></span>
          </div>
        </div>
      </nav>
    </div>
  )
}
