import React, { useState } from 'react'
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const {loading,login}=useLogin();
  const handleSubmit =async (e) =>{
    e.preventDefault();
    await login(username,password);
  }
  return (
    <div className='felx flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 ron shadow-md rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-100'>Login
        <span className='text-green-500'>  ChatApp</span>
        </h1>
        <form on onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
          <label className='label'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input 
            type='password'
            placeholder='Enter Password'
            className='w-full input input-bordered h-10'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <a href='/signup' className='text-sm hover:underline hover:text-green-600 mt-2 inline-block'>
            Don't have an account?
          </a>
          <div>
            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
            {loading ? <span className='loading loading-spinner'></span>:"Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 
export default Login