import React from "react";
import "./style.css";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  return (
    <div className="signUp_container flex justify-center w-full h-[100vh]">
      <form className="signUp_form flex m-auto justify-center items-center flex-col w-[500px] rounded-2xl p-4">
        <h1 className="text-3xl font-bold text-emerald-950">Sign Up</h1>
        <div className="relative flex flex-col w-full my-1">
          <label className="text-[18px] font-medium">Name</label>
          <i className="absolute top-[33px] left-[7px] text-[22px]">
            <FaUser />
          </i>
          <input
            className="form_input border-2 border-black py-1 rounded-md pl-8"
            name="name"
            type="text"
            placeholder="Enter name"
          />
        </div>
        <div className="flex flex-col w-full my-1">
          <label className="text-[18px] font-medium">Phone</label>
          <PhoneInput
            country={"in"}
            inputProps={
             { name:"phone",
              required: true,
             }
            }
          />
        </div>
        <div className="relative flex flex-col w-full my-1">
          <label className="text-[18px] font-medium">Password</label>
           <i className="absolute top-[33px] left-[7px] text-[22px]">
            <RiLockPasswordFill />
          </i>
          <input
            className="form_input border-2 border-black py-1 rounded-md pl-8"
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </div>
        <div className="flex justify-center items-center flex-col w-full my-1">
          <button className="bg-emerald-950 text-white px-4 py-2 rounded-md mt-4">
            Sign Up
          </button>
          <p>Already have an account? <a href="login">Login</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
