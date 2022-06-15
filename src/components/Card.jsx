import React from "react";
import profile from "../0fe00f0759660c97dc4668cae473378e.jpg";
import { FaGithub,FaInstagram,FaTwitter,FaEnvelope } from "react-icons/fa";

export const Card = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-[22rem] md:max-w-sm mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm "
            src={profile}
            alt="profile_photo"
          />
        </div>
        <div className="text-center mt-5">
          <h1 className="text-4xl font-bold  sm:text-2xl text-gray-900">Homaid Afroz</h1>
          <p
            className="text-xs  sm:text-base text-gray-600 pt-2 pb-4 px-5
                    w-auto inline-block border-b-2"
          >
            React Developer/Student
          </p>

          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href="https://github.com/Kakashi786"
            >
              <FaGithub /> <span className="sr-only">Github</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              href="https://twitter.com/Kakashi__9"
            >
              <FaTwitter /> <span className="sr-only">Twitter</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
              href="https://www.instagram.com/__homaid.___1/"
            >
              <FaInstagram /> <span className="sr-only">Instagram</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-black-500 hover:bg-green-900 rounded-full hover:text-white transition-colors duration-300"
              href="mailto:me.homaidafroz88@gmail.com"
            >
              <FaEnvelope /> <span className="sr-only">Email</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Card;
