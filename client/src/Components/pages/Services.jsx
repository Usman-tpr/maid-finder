import React from 'react'
import img1 from '../../images/header.avif'
const Services = () => {
    return (
        <>
            <div className='grid grid-cols-2 items-center mx-20'>
                <img src={img1} alt="" className='h-96 m-5' />
                <div >
                    <h6>Discover Trusted Maids Near You. </h6>
                    <h6>We are Your Partner in Household Solutions.</h6>
                    <button className='bg-pink-950 px-10 py-2 mx-auto rounded-lg mt-3 text-white'>Read More</button>
                </div>
            </div>
        </>
    )
}

export default Services