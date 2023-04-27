import React from 'react'

const Data = ({users, deleteUser, handleClickedEdit}) => {

  return (
    <main className='pb-24 lg:row-start-3 lg:col-start-3 lg:col-span-1'>
      
      {
        users[0] ? 
        
      <div className=' bg-white rounded-2xl px-5 py-3 lg:p-6 lg:rounded-[30px]'>
        <p className='mb-3'>Just added</p>
        <section className='grid grid-cols-[repeat(auto-fit,minmax(200px,max-content))] justify-start gap-7'>
        {
          users.map(user => (
            <article className=' bg-[#F2F6FC] rounded-xl p-6 mb-8' key={user.id}>
            <div className=''>
              <p className='flex justify-end mb-3'>{user.first_name} {user.last_name}</p>
              <div className='max-w-[250px] h-[150px] overflow-hidden self-center mb-3'>
                <img className='object-cover object-center' src={user.image_url? user.image_url : '/img/dummy-profile.svg'} alt="" />
              </div>
              <div className='grid justify-end mb-3'>
                <p>{user.email}</p>
                <p className='text-right'>{!user.birthday ? 'no birthday' : user.birthday }</p>
              </div>
              <div className='flex gap-4 justify-end mb-2'>
                <button onClick={() => deleteUser(user.id)} className='bg-red-500 text-white flex gap-2 px-2 py-1 rounded-md'>
                  <span className="material-symbols-rounded">
                    delete
                  </span>
                  Delete
                </button>
                <button onClick={() => handleClickedEdit(user)} className='bg-blue-500 text-white flex gap-2 px-2 py-1 rounded-md'>
                  <span className="material-symbols-rounded">
                    edit
                  </span>
                  Edit
                </button>
              </div>
            </div>
          </article>
          ))
        }
          
          

        </section>
        <table className=' w-full border-collapse mb-8'>
          <thead className=''>
            <tr>
              <th className=' py-2 text-left w-[65%] md:w-[60%] flex gap-2'>Name <span className="material-symbols-rounded">
                arrow_upward
              </span>
              </th>
              <th className=' py-2 text-left w-[35%] md:w-[20%]'>Created by</th>
              <th className=' py-2 text-left hidden md:table-cell md:w-[20%] md:text-right'>Last modification</th>
            </tr>
          </thead>
          {
            users.map(user => (
              <tbody className='' key={user.id}>
            <tr className='border-b-2 border-[#3DADCE0]'>
              <td className=' py-3 text-left'>{user.first_name} {user.last_name}</td>
              <td className=' py-3 text-left'>Sara Strauss</td>
              <td className=' py-3 text-left hidden md:table-cell md:w-[20%] md:text-right'>Today</td>
            </tr>
            
          </tbody>
            ))
          }
        </table>
      </div> : <p className='text-center'>There are no users. ¡Create one!</p>
      }
            


    </main>
  )
}

export default Data