import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");

  const [display, setDisplay] = useState(false);
  const [emptydata, setEmptyData] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setName(nameRef.current.value);
    // setEmail(emailRef.current.value);
    // setPass(passRef.current.value);
    // console.log(nameRef.current.value);
    // console.log(emailRef.current.value);
    // console.log(passRef.current.value);

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    if (data.name == "" || data.email == "" || data.password == "") {
      // alert("Please Enter your credentials");
      setEmptyData(true);
      setDisplay(true);
    } else {
      try {
        setEmptyData(false);
        const response = await fetch("https://authentication-app-backend-five.vercel.app/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        //console.log(result);
        if (response.ok && result !== "Account Exists") {
          Swal.fire({
            title: "Registration Successful",
            text: "Please login to continue",
            icon: "success",
          });
          setDisplay(false);
          navigate("/login");
        } else if (result === "Account Exists") {
          // alert("Registration Failed");
          setDisplay(true);
        } else {
          alert("Registration Failed");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="bg-white h-fit lg:h-3/5 w-fit lg:w-1/4 px-5 py-5 rounded-2xl flex flex-col items-center ">
      <span className="text-2xl lg:text-3xl font-light">Register</span>
      <form method="POST" className="w-full ">
        <div className="input-box h-24  w-full flex flex-col  justify-center ">
          <label htmlFor="Name">Name</label>
          <input
            className="outline-none bg-slate-100 px-2 h-1/3 "
            ref={nameRef}
            type="text"
            placeholder="Enter Name"
            name="Name"
            required
          />
        </div>
        <div className="input-box h-24  w-full flex flex-col  justify-center ">
          <label htmlFor="Email">Email</label>
          <input
            className="outline-none bg-slate-100 px-2 h-1/3 "
            ref={emailRef}
            type="email"
            placeholder="Enter Email"
            name="Email"
            required
          />
        </div>
        <div className="input-box h-24  w-full flex flex-col justify-center ">
          <label htmlFor="Password">Password</label>
          <input
            className="outline-none bg-slate-100 px-2 h-1/3 "
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
          : "Email Exists. Proceed to login"}
      </span>
      <div className="btn h-10 w-28 -mt-2 flex justify-center">
        <button
          className=" h-full w-full text-center border-2 border-slate-800 rounded-xl hover:bg-slate-800 hover:text-slate-100"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>

      <div className="text w-full h-10 mt-2 flex justify-center">
        <p>
          Already have an account?{" "}
          <a
            className="text-indigo-700 underline underline-offset-1"
            href="/login"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
