import React from 'react'
import Navbar from './Navbar'
import header from '../images/header.avif'
const HomePage = () => {
  return (
    <>
          <Navbar />
           <div className='container'>
            <div className='row d-flex justify-content-around align-items-center mt-5'>
                <div className='col-3 btn btn-warning text-white fw-bold'>Join as a Maid</div>
                <div className='col-3 btn btn-warning text-white fw-bold'>Find a Maid</div>
            </div>
            
           </div>
        <div className='container mt-5 '>
                  <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-sm-5'>
                       <h3 className='red-line'>Discover Trusted Maids Near You. </h3>
                        {/* <form >
                           <div className='btn-warning btn text-white mt-3 fw-bold'>Click to Search Near You</div>
                        </form> */}
                       <h3 className='mt-3 red-line'>We are Your Partner in Household Solutions. </h3>
                     </div>
                    <div className='col-sm-5 header-image'><img src={header}  width='400px'/></div>
                  </div>
              </div>

              <div className='container '>
                <div className='row  d-flex justify-content-center align-items-center'> 
                    <div className='col-4 d-flex justify-content-center align-items-center'><h3 className='border-bottom border-danger border-3 pb-2'>Our Services</h3></div>

                  </div>
                <div className='row'>
                     <div className='col-3'> 
                           
                      </div>
                     <div className='col-3'>  </div>
                     <div className='col-3'>  </div>
                     <div className='col-3'>  </div>
                </div>
              </div>
    
    </>
  )
}

export default HomePage