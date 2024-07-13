import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Video from "../assets/background.mp4";
const Home = (props) => {
  const [bgvideo, setBgVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBgVideo(true);
      props.bgvideo();
    }, 9500);
  }, []);

  return (
    <div className=" home-container h-screen w-screen flex flex-col justify-center items-center ">
      <button
        onClick={props.isLogout}
        className="absolute top-1 right-5 lg:right-10 text-sm lg:text-base text-slate-300 h-10 w-20 lg:w-40 mt-10 cursor-pointer border-2 border-slate-200 rounded-xl hover:bg-slate-200 hover:text-slate-800 "
      >
        Logout
      </button>
      {bgvideo ? (
        <video
          className="absolute -z-50 top-0 left-0 w-screen h-screen object-cover"
          autoPlay
          loop
          src={Video}
        ></video>
      ) : (
        <>
          <motion.p
            className="text-slate-300 font-thin text-4xl lg:text-6xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 1, 0],
              y: [100, 50, 0],
            }}
            transition={{
              delay: 0.5,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            Hiiiiii
          </motion.p>
          <motion.p
            className="text-slate-300 font-thin text-4xl lg:text-6xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 1, 0],
              y: [100, 50, 0],
            }}
            transition={{
              delay: 3,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            {props.name}
          </motion.p>
          <motion.span
            className="text-slate-300 font-thin text-4xl lg:text-6xl text-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 1, 0],
              y: [100, 50, 0],
            }}
            transition={{
              delay: 6,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            Hope you enjoy the experience !
          </motion.span>
        </>
      )}
    </div>
  );
};

export default Home;
