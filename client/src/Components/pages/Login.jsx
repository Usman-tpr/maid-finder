import React,{ useState } from 'react'
import '../../Css/signup.css'
import { Link } from 'react-router-dom'
const Login = () => {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const [ error , setError ] = useState();
    const [formData,setFormData]=useState({
        phone:'',
        password:''
    })


  return (
    <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-5 bg-signup mb-5 pb-5">
                        <h3 className='text-center'>logo | Login Here</h3>
                        <form>
                        

                            <div>
                                <label>Phone: <span className="important">*</span></label>
                                <input type="text" name='phone'onChange={handleInputChange }/>
                            </div>
                            <div className=''>
                                
                                    <label>Password <span className="important">*</span></label>
                                    <input type="text" name='password' onChange={handleInputChange}/>
                                
                            
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