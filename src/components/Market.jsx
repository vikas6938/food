import React from 'react'
import { Raleway } from 'next/font/google'
import { Dancing_Script } from 'next/font/google'



const raleway = Raleway({
    subsets: ['latin'],

})

const dancing_script = Dancing_Script({
    subsets: ['latin'],

})

function Market() {
  return (
    <>
        <section className='market'>
            <div className="container">
            <div className='text-center mb-5'>
                        <h1 className={`wel-2 ${dancing_script.className}`}>Why <span className={`${raleway.className} display-5 fw-bold text-dark`}>The Indian Market is Best?</span> </h1>
                    </div>
                <div className="row market-main">
                </div>
            </div>
                   <img src="./images/market.png" alt="" />
        </section>
    </>
  )
}

export default Market