import React from 'react'


import { Dancing_Script } from 'next/font/google'

const dancing_script = Dancing_Script({
    subsets: ['latin'],

})

const Homeservice = () => {
    return (
        <>
            <div className="d-flex align-items-center main pb-14">
                <div className='alpha mt-1'>
                    <div className=''>
                        <div className='d-flex'>
                            <h1 className={`wel ${dancing_script.className} me-1`}>Welcome To</h1>
                            <div>
                                <img src='./images/bowl.png' alt="" />
                            </div>
                        </div>
                        <span className='tag1 '>Alpha Male exports</span>
                        <div className='d-flex rate'>
                            <h1 className='pos-1 text-white fs-4'>01</h1>
                            <p className='prew me-4 text-white fs-4'>PREW  </p>
                            <div className='mt-2'>
                                <img src='./images/line-1.png' alt="" />
                            </div>
                            <p className='next ms-4 text-white fs-4'>NEXT  </p>
                        </div>

                    </div>
                </div>
                <div className='rectngle ms-auto'>
                    <img src='./images/rectngle.png' alt="" />
                </div>
            </div>
            <div className='sketch'>
                <img src='./images/sketch.png' alt="" />
            </div>
        </>
    )
}

export default Homeservice