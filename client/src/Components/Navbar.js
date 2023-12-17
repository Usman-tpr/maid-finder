import React from 'react'
import logo from '../images/logo.jpg'
const Navbar = () => {
  return (
        <>
           <div className='container nav-shadow p-2  mt-2 rounded-pill '>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-lg-6 col-md-6 col-2'><img src={logo}  className='mx-lg-5 mx-0 logo'/></div>
                <div className='col-lg-6 col-md-6 col-10 d-flex justify-content-around align-items-center nav-items'>
                    <a>Home</a>
                    <a>Contact Us</a>
                    <a>About</a>
                    <a>VIP Order</a>
                </div>
           
            </div>
           </div>

          
        </>
  )
}

export default Navbar