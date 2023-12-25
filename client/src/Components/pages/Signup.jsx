import React, { useEffect, useState } from 'react'
import '../../Css/signup.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
    const [error, setError] = useState();
    const [notification , setNotification] = useState("visually-hidden")
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        phone: '',
        password: '',
        cpassword: ''
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        setError('')
    };
    const displayNotification = () => {
        setNotification('');
        setTimeout(() => {
            setNotification('visually-hidden');
            console.log('h')
        }, 3000);
    };
    const submitData = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:5000/user/signup", formData)
            console.log(response)
            if (response.status === 200) {
                displayNotification();
            }
        } catch (error) {
            console.log(error.response.data.error)
            setError(error.response.data.error)
        }
    }
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-5 bg-signup ">
                        <h3 className='text-center'>logo | Signup Here</h3>
                        <form onSubmit={submitData}>
                            <div className='d-flex flex-row justify-content-between'>
                                <div>
                                    <label>First Name <span className="important">*</span></label>
                                    <input type="text" name="fname" onChange={handleInputChange} />
                                </div>
                                <div>
                                    <label>Last Name <span className="important">*</span></label>
                                    <input type="text" name="lname" onChange={handleInputChange} />
                                </div>
                            </div>

                            <div>
                                <label>Phone: <span className="important">*</span></label>
                                <input type="text" name="phone" onChange={handleInputChange} />
                            </div>
                            <div className='d-flex flex-row justify-content-between'>
                                <div>
                                    <label>Password <span className="important">*</span></label>
                                    <input type="password" name="password" onChange={handleInputChange} />
                                </div>
                                <div>
                                    <label>Re-Enter Password <span className="important">*</span></label>
                                    <input type="password" name="cpassword" onChange={handleInputChange} />
                                </div>
                            </div>

                            <div>
                                {error && <span className='text-danger'>{error}</span>}
                                <button className='signup-btn' type='submit'>Sign Up</button>
                                <div className="d-flex flex-row">
                                    <hr class="custom-line" /><span className='text-center mt-2'>Already Have an Account?<Link className='link design-color mx-2 fw-bold' to='/login'>LogIn</Link></span><hr class="custom-line" />
                                </div>

                            </div>



                        </form>

                    </div>
                </div>
            </div>

            <div className={`${notification} position-absolute`}>
                <div className="position-a">
                    <p>Account Created Sucessfully</p>
                </div>
            </div>
            
        </>
    )
}

export default Signup