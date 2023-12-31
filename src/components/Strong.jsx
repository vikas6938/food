import React from 'react'
import { Dancing_Script } from 'next/font/google'
import { Raleway } from 'next/font/google'
import { video } from '../../public/images/video.png'
const raleway = Raleway({
  subsets: ['latin'],

})

const dancing_script = Dancing_Script({
  subsets: ['latin'],

})

function Strong() {
  console.log(video)
  return (
    <>
      <section className=' strong my- position-relative'>
        <div className="container">
          <div className="row">

            <div className="col-12 col-md-6">
              <img src="./images/triangle.png" className='d-block m-auto pb-5 pb-md-0' alt="" />
            </div>
            <div className="col-12 col-md-6">
              <div className='text-center mb-5'>
                <h1 className={`strong-text ${dancing_script.className} fs-3rem`}>What Makes <span className={`${raleway.className} display-5 fw-bold text-dark`}>Us Strong?</span> </h1>
              </div>
              <div className=''>
                <div className='position-relative ' style={{}}>
                  <img className='w-100' src="./images/video.png" alt="" />
                  <div className='play position-absolute top-50 left-50 ' style={{ transform: 'translate(240%,-50%)!important' }}>
                    <img src="./images/play.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='read'>
          <img src="./images/read-color.png" alt="" />
        </div>
      </section>
    </>
  )
}

export default Strong