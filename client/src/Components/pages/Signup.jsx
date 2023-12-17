import React from 'react'
import '../../Css/signup.css'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-5 bg-signup ">
                        <h3 className='text-center'>logo | Signup Here</h3>
                        <form>
                            <div className='d-flex flex-row justify-content-between'>
                                <div>
                                    <label>First Name <span className="important">*</span></label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label>Last Name <span className="important">*</span></label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div>
                                <label>Phone: <span className="important">*</span></label>
                                <input type="text" />
                            </div>
                            <div className='d-flex flex-row justify-content-between'>
                                <div>
                                    <label>Password <span className="important">*</span></label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label>Re-Enter Password <span className="important">*</span></label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div>
                                <button className='signup-btn'>Sign Up</button>
                                <div className="d-flex flex-row">
                                    <hr class="custom-line" /><span className='text-center mt-2'>Already Have an Account?<Link className='link design-color mx-2 fw-bold' to='/login'>LogIn</Link></span><hr class="custom-line" />
                                </div>

                            </div>



                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup