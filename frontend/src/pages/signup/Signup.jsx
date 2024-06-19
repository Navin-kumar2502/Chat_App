import React from 'react';
import GenderCheckBox from './GenderCheckBox.jsx';
const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 ron shadow-md rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-100'>Signup
        <span className='text-green-400'>  ChatApp</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type='text' placeholder='Navin' className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Enter Username</span>
            </label>
            <input type='text' placeholder='Username' className='w-full input input-bordered h-10'/>
          </div>
          <div>
          <label className='label'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input 
            type='password'
            placeholder='Enter Password'
            className='w-full input input-bordered h-10'
          />
          </div>
          <div>
          <label className='label'>
            <span className='text-base label-text'>Confirm Password</span>
          </label>
          <input 
            type='password'
            placeholder='Confirm Password'
            className='w-full input input-bordered h-10'
          />
          </div>
          <GenderCheckBox/>
          <a className='text-sm hover:underline hover:text-green-600 mt-3 inline-block' href='#'>
           Already have an account?
          </a>
          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Signup</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Signup;

// STARTERCODE FOR THE SIGN UP COMPOONENT
// const Signup = () => {
//   return (
//     <div className='felx flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 ron shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-100'>Signup
//         <span className='text-green-400'>  ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Full Name</span>
//             </label>
//             <input type='text' placeholder='Navin' className='w-full input input-bordered h-10'/>
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Enter Username</span>
//             </label>
//             <input type='text' placeholder='Username' className='w-full input input-bordered h-10'/>
//           </div>
//           <div>
//           <label className='label'>
//             <span className='text-base label-text'>Password</span>
//           </label>
//           <input 
//             type='password'
//             placeholder='Enter Password'
//             className='w-full input input-bordered h-10'
//           />
//           </div>
//           <div>
//           <label className='label'>
//             <span className='text-base label-text'>Confirm Password</span>
//           </label>
//           <input 
//             type='password'
//             placeholder='Confirm Password'
//             className='w-full input input-bordered h-10'
//           />
//           </div>
//           <GenderCheckBox/>
//           <a className='text-sm hover:underline hover:text-green-600 mt-3 inline-block' href='#'>
//            Already have an account?
//           </a>
//           <div>
//             <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Signup</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }
// export default Signup;