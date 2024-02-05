import React, { useRef } from "react";
import { getUserApi, loginApi } from "../api";

const Login = React.forwardRef(({setUserData},ref) => {

  const formRef = useRef(null);

  const handleLogin =async(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
        email: formData.get('email'),
        password: formData.get('password')
    }
    const respData = await loginApi(data);
    if(respData && respData.success) {
        ref.current.close();
        formRef.current.reset();

        const data = await getUserApi();
        setUserData(data);
    }

  };

  return (
    <dialog id="my_modal_1" className="modal" ref={ref}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Login</h3>
        <div className="flex justify-center">
          <form method="dialog" onSubmit={handleLogin} ref={formRef}>
            {/* if there is a button in form, it will close the modal */}
            <div>
              <div className="my-4">
                <label htmlFor="email">Email: </label>
                <input
                  required
                  type="email"
                  placeholder="Enter Email"
                  id="email"
                  name="email"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className="my-4">
                <label htmlFor="password">Password: </label>
                <input
                  required
                  type="password"
                  placeholder="Enter password"
                  id="password"
                  name="password"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="flex justify-between mt-9">
                <button
                  type="submit"
                  className="btn bg-blue-600 text-white hover:bg-blue-800"
                >
                  Log in
                </button>

                <button className="btn" onClick={() => ref.current?.close()}>
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
});

export default Login;
