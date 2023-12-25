import React from 'react'
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
        <>
           <div className='container nav-shadow   mt-2 rounded-pill '>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-lg-6 col-md-6 col-2'><img src={logo}  className='mx-lg-2 mx-0 logo'/></div>
                <div className='col-lg-6 col-md-6 col-10 d-flex justify-content-around align-items-center nav-items'>
                    
                     <Link className='link'>Home</Link>
                     <Link className='link'>Service</Link>
                     <Link className='link'>Customer</Link>
                     <Link className='link' to='/login'>Login</Link>
                     <Link className='link' to='/signup'>Signup</Link>

                    
                  
                </div>
           
            </div>
           </div>

           
        </>
  )
}

export default Navbar