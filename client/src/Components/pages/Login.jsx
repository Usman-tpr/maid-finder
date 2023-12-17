import React from 'react'
import '../../Css/signup.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-5 bg-signup mb-5 pb-5">
                        <h3 className='text-center'>logo | Login Here</h3>
                        <form>
                        

                            <div>
                                <label>Phone: <span className="important">*</span></label>
                                <input type="text" />
                            </div>
                            <div className=''>
                                
                                    <label>Password <span className="important">*</span></label>
                                    <input type="text" />
                                
                            
                            </div>

                            <div>
                                <button className='signup-btn'>Login</button>
                                <div className="d-flex flex-row">
                                    <hr class="custom-line" /><span className='text-center mt-2'>Not Have any Account?<Link className='link design-color mx-2 fw-bold' to='/signup'>SignUP</Link></span><hr class="custom-line" />
                                </div>

                            </div>



                        </form>

                    </div>
                </div>
            </div>
  )
}

export default Login