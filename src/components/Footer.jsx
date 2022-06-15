import React from 'react'
import { FaGithub,FaInstagram,FaTwitter,FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
      <>
        <div className='py-5 border-t-3/2'>
            <div className='flex justify-center mt-4'>
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
            <div className='flex justify-center mt-4'>
              <p className='text-black mb-4'>Made with <span className='mr-2' role={"link"} aria-label = {'heart'}> 💙</span>by <a className='text-blue-500 hover:underline' href='mailto:me.homaidafroz88@gmail.com'>Homaid Afroz</a></p>
            </div>

        </div>
      </>
  )
}
export default Footer
