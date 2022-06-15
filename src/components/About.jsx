import React from 'react'
import ScrollIntoView from "react-scroll-into-view"
import  {FaChevronDown} from "react-icons/fa"

export const About = () => {
  return (
    <div className='max-w-4xl mt-20 mx-auto'>
          <p className='text-2xl text-black  md:text-4xl font-bold text-center'>
              Hey!👋
          </p>
          <p className='text-base   sm:text-xl  text-center text-gray-600 leading-relaxed mt-4'>
                I'm a passionate React developer. A Student Sophomore and highly curious to explore new programming languages and dive deeper into the coding world. Also hold interest in Competitive programming and Open Source.I'm a Front-end Enthusiast.Feel free to reach out to me!
          </p>
          <ScrollIntoView  selector='#tech'>
            <div className='mx-auto p-20 '>
              <FaChevronDown className = 'animate-bounce mx-auto text-3xl text-blue-500'/>
            </div>
          </ScrollIntoView>
          
    </div>
  
     
  )
}
export default About
