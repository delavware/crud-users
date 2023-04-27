import React from 'react'

const Header = () => {
  return (
    <header className='pt-3 lg:row-start-1 lg:col-start-2 lg:col-span-2 lg:items-center'>
            <div className=" grid items-center grid-rows-2 grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 ">
              <div className='row-[1] lg:col-[1]'>
                <img src="/img/logo.svg" alt="" />
              </div>
              <form className='row-[2] col-span-2 mt-2 lg:col-[2] lg:row-[1]'>
                <input className='w-[100%] bg-[#EBF0FB] rounded-full px-5 py-1 lg:py-2' type="text" placeholder='Search for a userx' />
                <button></button>
              </form>
              <div className='profile flex items-center self-center row-[1] justify-end lg:col-[3] lg:gap-6'>
                <div className='hidden lg:block'>
                  <p>Hi,Sara Strauss</p>
                  <p>sarass@gmail.com</p>
                </div>
                <div className=' h-10 w-10 rounded-[50%] overflow-hidden'>
                  <img src="https://source.unsplash.com/random/?face" alt="" />
                </div>
              </div>
            </div>
    </header>
  )
}

export default Header