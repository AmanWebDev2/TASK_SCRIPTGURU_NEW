import React, { useEffect, useReducer, useRef, useState } from 'react'
import { registerApi } from "../api/index"
import Login from './Login';

const Register = React.forwardRef((props,ref) => {
    const [show,setShow] = useState(false);
    const loginRef = useRef(null);
    const formRef = useRef(null);

    useEffect(()=>{
        setShow(false);
        console.log("render")
        formRef.current?.reset()
        return()=>{
        formRef.current?.reset()
            setShow(false)
        }
    },[])

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formdata = new FormData(e.target);
        
        const data = {
            name: formdata.get('name'),
            username: formdata.get('username'),
            email: formdata.get('email'),
            password: formdata.get('password')
        }
       
        console.log(data);
        const respData = await registerApi(data)
        if(respData.success) {
            setShow(true);
            loginRef.current.showModal()
            ref.current.close()
            formRef.current.reset();
        }
    }

  return ( 
  <> 
   <Login ref={loginRef}/>
  <dialog ref={ref} id="my_modal_1" className="modal">
   <div className="modal-box">
      <h3 className="font-bold text-lg">{show ? "Login" : "Register"}</h3>
      {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
      <div className="flex justify-center">
        <form method="dialog" onSubmit={handleSubmit} ref={formRef}>
        <div className="wrapper">

          {/* if there is a button in form, it will close the modal */}
          <div className="my-4">
          <label htmlFor="name">Name: </label>
          <input required type="text" placeholder="Enter Name" id='name' name='name' className="input input-bordered w-full max-w-xs" />
          </div>

          <div className="my-4">
          <label htmlFor="username">Username: </label>
          <input required type="text" placeholder="Enter Username" id='username' name='username' className="input input-bordered w-full max-w-xs" />
          </div>

          <div className="my-4">
          <label htmlFor="email">Email: </label>
          <input required type="email" placeholder="Enter Email" id='email' name='email' className="input input-bordered w-full max-w-xs" />
          </div>

          <div className="my-4">
          <label htmlFor="password">Password: </label>
          <input required type="password" placeholder="Enter Password" name='password' autoComplete='true' id='password' className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="flex justify-between mt-9">
          <button type='submit' className="btn bg-blue-600 text-white hover:bg-blue-800">Sign Up</button>

          <button className="btn" onClick={()=>ref.current?.close()}>Close</button>
          </div>
          </div> 

        </form>
      </div>
    </div>
  </dialog>

  </>
  )
})

export default Register