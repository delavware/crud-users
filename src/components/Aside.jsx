import React from 'react'

const Aside = () => {
  return (
    <aside className='bg-[#F7F9FC] fixed container bottom-0 py-4 lg:relative lg:row-start-2 lg:row-end-4 lg:w-max lg:col-start-2 lg:col-span-1 lg:py-3'>
            <div className=''>
              <button className='border-2 items-center px-4 py-2 gap-2 rounded-full hidden lg:flex lg:mb-3 lg:px-9'>
                <div>
                  <img src="/img/add-icon-colored.svg" alt="" />
                </div>
                Create
              </button>
              <section className=''>
                <ul className='flex flex-row justify-between lg:inline-block'>
                  <li className='flex flex-col items-center lg:flex-row lg:p-2 lg:gap-3 lg:px-6 text-[#1A73E8] lg:bg-[#C2E7FF] lg:rounded-full lg:hover:text-[#1A73E8] '><span className="material-symbols-rounded">
                    person
                  </span>Users</li>
                  <li className='flex flex-col items-center lg:flex-row lg:p-2 lg:gap-3 lg:px-6 lg:hover:bg-[#C2E7FF] lg:hover:text-[#1A73E8]  lg:rounded-full'><span className="material-symbols-rounded">
                    group
                  </span>Groups</li>
                  <li className='flex flex-col items-center lg:flex-row lg:p-2 lg:gap-3 lg:px-6 lg:hover:bg-[#C2E7FF] lg:hover:text-[#1A73E8]  lg:rounded-full'><span className="material-symbols-rounded">
                    description
                  </span>Roles</li>
                  <li className='flex flex-col items-center lg:flex-row lg:p-2 lg:gap-3 lg:px-6 lg:hover:bg-[#C2E7FF] lg:hover:text-[#1A73E8]  lg:rounded-full'><span className="material-symbols-rounded">
                    work
                  </span>Activities</li>
                </ul>
              </section>
            </div>

    </aside>
  )
}

export default Aside