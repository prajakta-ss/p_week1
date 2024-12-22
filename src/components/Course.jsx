import React from 'react'
import list from "../../public/list.json"
import Cards from './cards'
import {  Link } from "react-router-dom";
function Course() {
  return (
   <>

   <div className='max-w-2x1 container mx-auto md:px-20 px-4  '>
    <div className='  mt-28 items-center justify-center text-center'>
      <h1 className='text-black text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here!! :)</span> 
      </h1>
      <p className=' text-black mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur, laboriosam, veritatis libero omnis, ipsum vel quo soluta fugit quod explicabo cumque earum nulla molestiae. Assumenda ea optio perferendis quibusdam!</p>
      <Link to = '/'>
      <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300ms'>Back</button>

      </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-4'>
      {
       list.map((item) => (
             <Cards key = {item.id} item = {item} />
       ))
      }
    </div>
   </div>
   
   </>
  )
}

export default Course