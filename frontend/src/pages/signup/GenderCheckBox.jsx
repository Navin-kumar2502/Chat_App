import React from 'react'
const GenderCheckBox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex'>
    <div className='form-control'>
    <div className="form-control">
      <label className={`cursor-pointer label  ${selectedGender==="male"? "selected":""}`}>
        <span className="label-text">Male 👨</span>
        <input type="checkbox" defaultChecked className="checkbox checkbox-success" 
          checked={selectedGender==="male"}
          onChange={()=>onCheckboxChange("male")}
        />
      </label>
    </div>

    </div>
    <div className='form-control'>
    <div className="form-control">
    <label className={`cursor-pointer label  ${selectedGender==="female"? "selected":""}`}>
        <span className="label-text">Female 👩</span>
        <input type="checkbox" defaultChecked className="checkbox checkbox-success" 
          checked={selectedGender==="female"}
          onChange={()=>onCheckboxChange("female")}
        />
      </label>
    </div>
    </div>
    </div>
  )
}
export default GenderCheckBox;