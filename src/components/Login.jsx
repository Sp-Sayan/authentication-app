import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [display, setDisplay] = useState(false);
  const [emptydata, setEmptyData] = useState(false);
  const [wrongpass, setWrongPass] = useState(false);
  const [noaccount, setNoAccount] = useState(false);

  const [name, setName] = useState();

  const passRef = useRef(null);
  const emailRef = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    if (data.email == "" || data.password == "") {
      // alert("Please Enter your credentials");
      setEmptyData(true);
      setDisplay(true);
    } else {
      try {
        setEmptyData(false);
        setDisplay(false);
        const response = await fetch("https://authentication-app-backend-five.vercel.app/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
        if (response.ok && result === "Wrong Password") {
          // alert("Wrong password");
          setDisplay(true);
          setWrongPass(true);
          setNoAccount(false);
        } else if (response.ok && result === "Account Does not Exist") {
          // alert("Account does not exist");
          setDisplay(true);
          setNoAccount(true);
        } else {
          props.isLogin();
          props.AccName(result.name);
          navigate("/home");
          // console.log(result.name);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="bg-white h-fit w-fit lg:w-1/4 px-5 py-5 rounded-2xl flex flex-col items-center ">
      <span className="text-3xl font-light">Login</span>
      <form className="w-full " action="">
        <div className="input-box h-28  w-full flex flex-col  justify-center ">
          <label htmlFor="Email">Email</label>
          <input
            className="outline-none bg-slate-100 px-2 h-1/4"
            ref={emailRef}
            type="email"
            placeholder="Enter Email"
            name="Email"
            required
          />
        </div>
        <div className="input-box h-28  w-full flex flex-col justify-center ">
          <label htmlFor="Password">Password</label>
          <input
            className="outline-none bg-slate-100 px-2 h-1/4"
            ref={passRef}
            type="password"
            placeholder="Enter Password"
            name="Password"
            required
          />
        </div>
      </form>
      <span
        className={`account-exist font-light mb-5 ${
          display ? "inline-block" : "hidden"
        } `}
      >
        {emptydata
          ? "Please Enter your Credentials"
          : noaccount
          ? "Account Does not exist"
          : wrongpass
          ? "Wrong Password"
          : ""}
      </span>
      <div className="btn h-10 w-28 -mt-2 flex justify-center">
        <button
          className=" h-full w-full text-center border-2 border-slate-800 rounded-xl hover:bg-slate-800 hover:text-slate-100"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
      <div className="text w-full h-10 mt-2  flex justify-center">
        <p>
          Don't have an account?{" "}
          <a
            className="text-indigo-700 underline underline-offset-1"
            href="/register"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
