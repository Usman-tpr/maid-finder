import {useEffect, useState} from 'react'
import Navbar from './Navbar'

const MaidForm = () => {

 useEffect(()=>{
  navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position)
  })
})

  const Genders = ['Select Gender','Male','Female']

  const workingHours = ['Select Working Time','24 Hours','Day Time' , 'Night Time' , '1-3 Hours']
  return (
   <>
       <Navbar />
       <form className='container col-lg-4 col-11 form-shadow mt-5 p-3'>
 
<div className='d-flex'>
<div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input  className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3 mx-3">
    <label for="phoneNumber" className="form-label">Phone Number</label>
    <input  className="form-control" id="phoneNumber"/>
  </div>
</div>
  <div className="mb-3">
    <label for="location" className="form-label">Location</label>
    <input  className="form-control" id="location"/>
  </div>

  <div className="mb-3">
    <label for="age" className="form-label">Age</label>
    <input type='Number' className="form-control" id="age"/>
  </div>
 <div className='d-flex justify-content-between mt-5'>
 <div className="mb-3">
    <label for="working Hours" className="form-label">Working Hours</label>
   <select className='form-control' id='dropdown' name='working Hours' required>
     {workingHours.map((workingHour)=>(
      <option value={workingHour} key={workingHour}>{workingHour}</option>
     ))}
    
     </select>
  </div>
  <div className='mb-3'>
    
  <label htmlFor="dropdown" className='form-label'>Select Gender</label>
                      <select className="form-control " id="dropdown" name="industry" required>
                        {Genders.map((Gender) => (
                          <option key={Gender} value={Gender}>
                            {Gender}
                          </option>
                        ))}
             </select>
  </div>
 </div>
    
  <button type="submit" className="btn btn-warning text-white fw-bold">Submit</button>
</form>
   
   </>
  )
}

export default MaidForm