import React, { useEffect, useRef, useState } from 'react';
import profile from '../assets/profile.svg';
import { Link, NavLink } from 'react-router-dom';
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
      <div className='h-6 md:h-12'>
      </div>
      <nav className={` sticky top-0 left-0 right-0 z-50 max-w-[1140px] mx-2 lg:mx-auto px-6 lg:px-12   rounded-[20px] shdow py-1 md:py-2 ${show_hide ? 'bg_secondary' : 'bg_tertiary'}`}>
        <div className=' flex justify-between items-center '>
          <div className='flex items-center'>
            <img src={profile} alt="" className='bottom-5' />
            <Link to="/"><p className={` font-medium fs_sm ps-4 md:ps-6 ${show_hide ? 'clr_powder' : 'clr_primary'}`}>SUNAINA RALIA</p></Link>
          </div>
          <div>
            <ul className={`${show_hide ? 'left-0 bg_secondary flex' : 'left-[-110%]'} ease-in-out lg:flex items-center flex-col lg:flex-row h-[calc(100vh-120px)] md:h-[calc(100vh-165px)] lg:h-auto absolute lg:static  !w-full top-24  md:top-[128px] opacity-1 z-10 justify-around lg:justify-normal`} ref={menu}>
              <li> <Link to='/' className={`font-medium fs_xxs clr_primary pe-8 ${show_hide ? 'fs_base clr_powder' : 'fs_xxs clr_primary'}`}>HOME</Link></li>
              <li> <a href='#about' className={`font-medium fs_xxs clr_primary pe-8 ${show_hide ? 'fs_base clr_powder' : 'fs_xxs clr_primary'}`}>ABOUT</a></li>
              <li> <a href='#projects' className={`font-medium fs_xxs clr_primary pe-8 ${show_hide ? 'fs_base clr_powder' : 'fs_xxs clr_primary'}`}>PROJECTS</a></li>
              <li> <a href='#contact' className={`font-medium fs_xxs clr_primary pe-8 ${show_hide ? 'fs_base clr_powder' : 'fs_xxs clr_primary'}`}>CONTACT</a></li>
              <li><Link to='resume/' className={`bg_secondary clr_powder  ${show_hide ? 'fs_base font-medium pe-8' : 'fs_xxs rounded-[10px] py-[5px] px-[10px]'}`} >RESUME</Link></li>
            </ul>
          </div>
          {/* hamburger */}
          <div className='block lg:hidden' ref={hamburger} onClick={show_hide_menu}>
            <span className={`md:w-12 w-7 h-1 md:h-2 ${show_hide ? 'bg_tertiary' : 'bg_secondary'} mb-2 block rounded-md`}></span>
            <span className={`md:w-12 w-7 h-1 md:h-2 ${show_hide ? 'bg_tertiary' : 'bg_secondary'} mb-2 block rounded-md`}></span>
            <span className={`md:w-12 w-7 h-1 md:h-2 ${show_hide ? 'bg_tertiary' : 'bg_secondary'} mb-2 block rounded-md`}></span>
          </div>
        </div>
      </nav>
    </div>
  )
}
