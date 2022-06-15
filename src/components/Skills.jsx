import React from 'react'
import {SiJavascript,SiTailwindcss,SiTypescript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FiFigma} from 'react-icons/fi'

const Skills = () => {
  return (
    <div className='max-w-4xl mx-auto justify-center py-12 ' id = 'tech'><p className='text-2xl text-black sm:text-4xl text-center pt-4 font-bold'>
    Tech I use

    </p>
    <div className='flex flex-wrap justify-center pt-2'>
      <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
      <FaReact color='#2196f3' className='mx-auto text-4xl'/>
      <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>React</p>

      </div>
      <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
      <SiTailwindcss color='#00C0A3' className='mx-auto text-4xl'/>
      <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Tailwind</p>

      </div>
      <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
      <SiJavascript color='#ffdf00' className='mx-auto text-4xl'/>
      <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Java Script</p>

      </div>
      <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
      <SiTypescript color='#2196f3' className='mx-auto text-4xl'/>
      <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Type Script</p>

      </div>
      <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
      <FiFigma color='orange' className='mx-auto text-4xl'/>
      <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Figma</p>

      </div>
    </div>
    </div>
  )
}

export default Skills