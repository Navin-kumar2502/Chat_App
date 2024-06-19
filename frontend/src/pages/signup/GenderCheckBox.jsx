import React from 'react'
const GenderCheckBox = () => {
  return (
    <div className='flex'>
    <div className='form-control'>
    <div className="form-control">
      <label className="cursor-pointer label">
        <span className="label-text">Male 👨</span>
        <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
      </label>
    </div>

    </div>
    <div className='form-control'>
    <div className="form-control">
      <label className="cursor-pointer label">
        <span className="label-text">Female 👩</span>
        <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
      </label>
    </div>
    </div>
    </div>
  )
}
export default GenderCheckBox;


// // STARTERCODE FOR THE Gender COMPOONENT
// const GenderCheckBox = () => {
//   return (
//     <div className='flex'>
//     <div className='form-control'>
//     <div className="form-control">
//       <label className="cursor-pointer label">
//         <span className="label-text">Male 👨</span>
//         <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
//       </label>
//     </div>

//     </div>
//     <div className='form-control'>
//     <div className="form-control">
//       <label className="cursor-pointer label">
//         <span className="label-text">Female 👩</span>
//         <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
//       </label>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default GenderCheckBox;