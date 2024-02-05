import React, { useContext, useRef, useState } from "react";

import breadcrumb from "../assets/svg/breadcrumb.svg";
import logo from "../assets/svg/logo.svg";
import logoSmall from "../assets/svg/logo-small.svg";
import logoMedium from "../assets/svg/logo-medium.svg";
import down from "../assets/svg/down.svg";
import profile from "../assets/svg/profile.svg";
import cart from "../assets/svg/cart.svg";
import search from "../assets/svg/search.svg";
import store from "../assets/svg/store.svg";
import verticalDot from "../assets/svg/vertical-dot.svg";
import SubHeader from "./SubHeader";
import Register from "./Register";
import Toast from "./Toast";
import Login from "./Login";
import MyProfile from "./MyProfile";
import Cookies from "js-cookie";
import { getUserApi } from "../api";
import { UserContext } from "../App";

const Header = ({ userData, setUserData }) => {
  const registerRef = useRef(null);
  const loginRef = useRef(null);
  const profileRef = useRef(null);
  const [user,setUser] = useState(null);


  const handleMyProfile=async()=>{
    const userId = Cookies.get('userId')
    if(!userId) return;
    const data = await getUserApi();
    setUser(data);
    profileRef.current.showModal();
  }

  const handleLogout=()=>{
    Cookies.remove('token');
    Cookies.remove('userId');
    setUserData(null);
  }

  return (
    <header className="p-4 shadow-lg shadow-gray-30">
      <Register ref={registerRef} />
      <Login ref={loginRef} setUserData={setUserData}/>
      <MyProfile ref={profileRef}  userData={user}/>
      <div className="wrapper flex justify-between max-w-lg m-auto md:m-0 md:min-w-full md:justify-between">
        <div className="flex items-center gap-x-2 md:gap-x-5 md:flex-grow">
          <span className="md:hidden">
            <img src={breadcrumb} />
          </span>
          <picture>
            <source media="(min-width:767px)" srcSet={logoSmall} />
            <source media="(max-width:766px)" srcSet={logoMedium} />
            <img src={logo} alt="Flowers" />
          </picture>
          <div className="hidden search md:flex md:items-center md:w-full">
            <div className="relative rounded-md shadow-sm md:w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">
                  <img src={search} />
                </span>
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full rounded-md border-0 py-1.5 pl-12 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                placeholder="Search product"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-2 cursor-pointer">
          <div className="md:min-w-16 p-2 md:hidden">
            <img src={down} />
          </div>

          <div className="md:min-w-16 p-2 dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center p-2 md:gap-2 rounded-md md:hover:bg-blue-500 md:hover:text-white"
            >
              <span>
                <img className="hover:text-white" src={profile} />
              </span>
              Login
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60"
            >
              <li onClick={()=>registerRef.current?.showModal()}>
                <a>New Customer ? <span className="bg-blue-600 p-3 rounded-md text-white">Signup</span></a>
              </li>
              <li>
                <a className={`${userData ?'block' : 'hidden'}`} onClick={()=>handleMyProfile()} >My Profile</a>
                <a className={`${userData ?'hidden' : 'block'}`} onClick={()=>loginRef.current.showModal()} >Login</a>
              </li>
            </ul>
          </div>

          <div className="cursor-pointer md:min-w-16 p-2 ">
            <div className="md:flex md:items-center md:gap-x-2">
              <img src={cart} />
              <button className="hidden lg:block">Cart</button>
            </div>
          </div>

          <div className="hidden md:block cursor-pointer md:min-w-16 p-2 ">
            <div className="md:flex md:items-center md:gap-x-2">
              <img src={store} />
              <button className="hidden lg:block">Become a Seller</button>
            </div>
          </div>

        

          <div className=" dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm m-1">
            <img src={verticalDot} />
              
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className={`${userData ? 'block' : 'hidden'}`} onClick={handleLogout}>Log out</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <SubHeader />
    </header>
  );
};

export default Header;
