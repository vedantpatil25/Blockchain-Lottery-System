import React from 'react'
import NavButton from './NavButton'
import {Bars3BottomRightIcon} from "@heroicons/react/24/solid"
function Header() {
  return (
    <header className='grid grid-cols-2  md:grid-cols-5 justify-between items-center p-5'>
      <div className="flex items-center space-x-2">
        <img
          className="rounded-full h2-0 w-20"
          src="https://avatars.githubusercontent.com/u/106603826?s=96&v=4"
          alt=""
        />

        <div>
          <h1 className='text-lg text-white font-bold '>Vedant Draw</h1>
          <p className='text-xs text-emerald-500 truncate'>user...</p>
        </div>
      </div>

      <div className='hidden md:flex md:col-span-3 items-center justify-center rounded-md p-4 space-x-2'>
        <div className="bg-[#063c23]">
            <NavButton isActive title = "Buy Ticket"/>
            <NavButton title = "Logout"/>
        </div>
      </div>

      <div className='flex flex-col ml-auto text-right'>
     < Bars3BottomRightIcon className='h-8 w-8 mx-auto text-white cursor-pointer'/>

     <span className='md:hidden 
     '>
        <NavButton title='Logout'/>
     </span>
        
      </div>
    </header>
  )
}

export default Header
