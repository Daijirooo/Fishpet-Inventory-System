import React from 'react'

//Import Google Icon from https://react-icons.github.io/react-icons
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button className='flex items-center justify-center w-full bg-red-600 
    text-white px-7 py-[0.7rem] rounded uppercase text-sm font-medium 
    hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg
    transition duration-300 ease-in-out'>
        <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
        Continue with Google
    </button>
  )
}
