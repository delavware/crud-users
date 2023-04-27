import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
import Modal from './components/Modal'
import Header from './components/Header'
import Aside from './components/Aside'
import Filter from './components/Filter'
import Data from './components/Data'
import { useForm } from 'react-hook-form'

const BASE_URL = "https://users-crud.academlo.tech/"
const DEFAULT_VALUES = {
  first_name:'',
  last_name:'',
  email:'',
  password:'',
  birthday:'',
  image_url:''
}

function App() {

  const [isUserEditable, setisUserEditable] = useState()

  const [users, setUsers] = useState([])

  const [isShownForm, setIsShownForm] = useState(false)

  const {register, handleSubmit, reset, formState: {errors}} = useForm()

  const editUser = (data) => {
    const URL = `${BASE_URL}/users/${isUserEditable}/`
    axios
    .patch(URL, data)
    .then(() => {
      getAllUsers()
      reset(DEFAULT_VALUES)
      setIsShownForm(!isShownForm)
      setisUserEditable()
    })
    .catch(err => console.log(err))
  }

  const handleClickedEdit = (data) => {
    setIsShownForm((isShownForm) => !isShownForm)
    reset(data)
    setisUserEditable(data.id)
  }

  const deleteUser = (id) => {
    const URL = `${BASE_URL}/users/${id}/`
    axios
    .delete(URL)
    .then(() => getAllUsers())
    .catch(err => console.log(err))
  }

  const createUser = (data) =>  {
    const URL = `${BASE_URL}/users/`
    
    axios
    .post(URL, data)
    .then(() => {
      getAllUsers()
      reset(DEFAULT_VALUES)
      setIsShownForm(!setIsShownForm)

    })
    .catch(err => console.log(err))
  }

  const submit = (data) => {
    if(!data.birthday){
      data.birthday = null
    }

    if(!data.image_url){
      data.image_url = null
    }

    if (isUserEditable) {
      editUser(data)
    } else {
      createUser(data)
    }
  }

  const getAllUsers = () => {
    const URL = `${BASE_URL}/users/`

    axios
    .get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  useEffect (() => {
    getAllUsers()
  }, [])


  return (
    <>
    <Modal errors={errors} isUserEditable={isUserEditable} setisUserEditable={setisUserEditable} submit={submit} register={register} handleSubmit={handleSubmit} isShownForm={isShownForm} setIsShownForm={setIsShownForm} />
    <div className='wrapper bg-[#F7F9FC]'>
        <div className='bg-[#F7F9FC] min-h-screen lg:grid lg:grid-cols-[0.1fr,0.5fr,5fr,0.1fr] lg:auto-rows-max lg:gap-4'>
          <Header />
          <Aside />
          <Filter setIsShownForm={setIsShownForm} />
          <Data users={users} deleteUser={deleteUser} handleClickedEdit={handleClickedEdit} reset={reset} />
        </div>
    </div>
    </>  
  )
}

export default App
