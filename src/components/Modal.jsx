
const Modal = ({isShownForm, setIsShownForm, handleSubmit, register, submit, reset, setisUserEditable, isUserEditable, errors}) => {


    let suggestions = ['https://t.ly/pWrD', 'https://t.ly/ePVj']
  

  const handleCloseModal = () => {
        setIsShownForm((isShownForm) => !isShownForm)
        reset({
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            birthday:'',
            image_url:''
          })
          setisUserEditable()
  }

  return (
    
    <div className={`fixed z-[100] top-0 left-0 bg-black/40 bottom-0 right-0 grid place-content-center ${isShownForm ? 'opacity-100 visible' : 'opacity-0 invisible'} onClick={handleCloseModal}`}>
        <form onSubmit={handleSubmit(submit)} className='bg-white p-5 grid gap-5 rounded-lg grid-cols-[minmax(100px,300px)] w-[80%] mx-auto'>
        <h1 className='font-semibold'>{isUserEditable? 'Edit user' : 'Create user'}</h1>
        <div>
            <input type="text" {...register('first_name')} placeholder='First name *' className='px-3 py-1 rounded-md border-[1px]  border-gray-500 w-full text-xs' required/>
        </div>
        <div>
            <input type="text" {...register('last_name')} placeholder='Last name *' className='px-3 py-1 rounded-md border-[1px]  border-gray-500 w-full text-xs' required/>
        </div>
        <div>
            <input type="email" {...register('email')} placeholder='Email *' className='px-3 py-1 rounded-md border-[1px]  border-gray-500 w-full text-xs' required />
        </div>
        <div>
            <input type="password" {...register('password')} placeholder='Password *' className='px-3 py-1 rounded-md border-[1px]  border-gray-500 w-full text-xs' required />
        </div>
        <div>
            <input type="date" {...register('birthday')} placeholder='Birthday' className='px-3 py-1 rounded-md border-[1px]  border-gray-500 w-full text-xs'/>
        </div>
        <div>
            <input type="text" {...register('image_url', {
                pattern: {
                    value: /((http|https)\:\/\/)?[a-zA-Z0-9\.\/\?\:@\-_=#]+\.([a-zA-Z0-9\&\/\?\:@\-_=#])/,
                    message: "invalid url for image"
                }
            })} id="image_url" placeholder='Paste an image url or choose below:' className='px-3 py-1 rounded-md border-[1px]  border-gray-500 w-full text-xs'/>
        </div>
        
        <span>{errors.image_url && errors.image_url.message}</span>
        
        <div className='flex gap-8 justify-center'>
            <button  onClick={handleCloseModal} className='text-[#1A73E8] font-semibold hover:bg-[#F5F8FD] hover:rounded-full p-2'>
                Cancel
            </button>
            <button className='text-[#1A73E8] font-semibold hover:bg-[#F5F8FD] hover:rounded-full p-2'>
                {isUserEditable? 'Save' : 'Create'}
            </button>
        </div>
        
        </form>
    </div>
    
  )
}

export default Modal