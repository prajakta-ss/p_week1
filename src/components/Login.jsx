import React from 'react'

function Login() {
  return (
    <div>
        <dialog id="my_modal_2" className="text-black modal">
  <div className="modal-box">
    <h3 className="font-semibold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div>
    {/* Password */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="password" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div>
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
        <p>Not Registerd <span className='underline text-blue-500 cursor-pointer'>Signup</span>{""}
        </p>
    </div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  )
}

export default Login