import React, { useEffect ,useRef } from "react";
import { updateUser } from "../api";

const MyProfile = React.forwardRef(({ userData},ref) => {

    const formRef = useRef(null);

    useEffect(()=>{
      console.log(userData)
    },[userData]);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
          name: formData.get('name'),
          email: formData.get('email'),
          username: formData.get('username')
        }

        const resp = await updateUser(data);
        console.log(resp);
    }

  return (
    <dialog ref={ref} id="my_profile" className="modal">
   <div className="modal-box">
      <h3 className="font-bold text-lg">My Profile</h3>
      {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
      <div className="flex justify-center">
        <form method="dialog" onSubmit={handleSubmit} ref={formRef}>
        <div className="wrapper">

          {/* if there is a button in form, it will close the modal */}
          <div className="my-4">
          <label htmlFor="name">Name: </label>
          <input required type="text" placeholder="Enter Name" id='name' name='name' defaultValue={userData?.name} className="input input-bordered w-full max-w-xs" />
          </div>

          <div className="my-4">
          <label htmlFor="username">Username: </label>
          <input required type="text" placeholder="Enter Username" id='username' name='username' defaultValue={userData?.username} className="input input-bordered w-full max-w-xs" />
          </div>

          <div className="my-4">
          <label htmlFor="email">Email: </label>
          <input required type="email" placeholder="Enter Email" id='email' name='email' defaultValue={userData?.email} className="input input-bordered w-full max-w-xs" />
          </div>

          <div className="flex justify-between mt-9">
          <button type='submit' className="btn bg-blue-600 text-white hover:bg-blue-800">Update</button>

          <button className="btn" onClick={()=>ref.current?.close()}>Close</button>
          </div>
          </div> 

        </form>
      </div>
    </div>
  </dialog>
  );
});

export default MyProfile;
