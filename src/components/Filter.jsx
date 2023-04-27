import React from 'react'

const Filter = ({setIsShownForm}) => {

  const handleShowModal = () => {
    setIsShownForm((isShownForm) => !isShownForm)
  }
    
  return (
    <section className='mt-3 lg:row-start-2 lg:col-start-3 lg:col-span-1 '>
            <div className=' bg-white rounded-[30px] px-5 py-3 grid grid-cols-2 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:mx-auto lg:items-center lg:p-6'>
              <h1 className='font-bold'>Users</h1>
              <div className='col-start-1 col-span-2 flex items-center gap-3 justify-between lg:col-[2] lg:row-[1]'>
                <span>Custom</span>
                <span className='border-2 rounded-md px-3 py-1'>Abril 15 - Abril 22</span>
                <div>
                  <span className="material-symbols-rounded">
                    navigate_before
                  </span>
                  <span className="material-symbols-rounded">
                    navigate_next
                  </span>
                </div>


              </div>
              <p className='font-bold text-[#1A73E8] col-start-2 row-start-1 flex justify-end lg:col-[3]'>Show last 30 days</p>
            </div>
            <button onClick={handleShowModal} className='rounded-full bg-[#1A73E8] hover:bg-[#1165D3] text-white flex px-5 py-3 gap-1 m-5 mx-auto'>
              <span className="material-symbols-rounded">
                add
              </span>
              New User
            </button>
    </section>
  )
}

export default Filter