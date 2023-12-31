import React from 'react'
import { Raleway } from 'next/font/google'
import { Dancing_Script } from 'next/font/google'
import styles from './styles/Header.module.css'




const raleway = Raleway({
  subsets: ['latin'],

})

const dancing_script = Dancing_Script({
  subsets: ['latin'],

})


function Footer() {
  return (
    <>
      <section className='footer ptb-1'>
        <div className="container ">
          <div className="row justify-content-end align-items-center mb-5 p-0">
            <div></div>
            <div className="col-6">
              <div>
                <img src="./images/foot-logo.png" alt="" />
              </div>
              <div className=''>
                <h1 className={`${styles.tag} fs-7 plr lh-lg pt-2 mt-1`}> "ALPHA MALE EXPORTS” is one of the leading Gujarat india Based company which activating in the field of producing, Supplying and exporting of Basmati Rice, Non Basmati Rice, Brown Rice, Indian Spices, Maize etc agrituture products from the Gujarat India, we are bulk exporters of agriculture product.</h1>
              </div>
            </div>
            <div className="col-6">
              <img src="./images/cost-info.png" alt="" />
            </div>
          </div>
          <img src="./images/foot-line.png" alt="" />
          <div className="row mt-5">
            <div className='d-flex justify-content-end gap-3 '>
            <div className="col-6">
              <div className='justify-content-star  d-flex'>
              <h1 className='text-dark fs-4 '>Product</h1>
                </div>
                <ul className='d-flex justify-content-start gap-5 p-0'>
                  <li><a href="" className={`${styles.tag}`}>Basmati Rice</a></li>
                  <li><a href="" className={`${styles.tag}`}>Spices</a></li>
                  <li><a href="" className={`${styles.tag}`}>Maiz</a></li>
                  <li><a href="" className={`${styles.tag}`}>Non-Basmati Rice</a></li>
                </ul>
              </div>
              <div className="col-6">
              <div className='justify-content-end  d-flex'>
              <h1 className='text-dark fs-4 '>Product</h1>
                </div>
                <ul className='d-flex justify-content-end gap-5'>
                  <li><a href="" className={`${styles.tag}`}>Basmati Rice</a></li>
                  <li><a href="" className={`${styles.tag}`}>Spices</a></li>
                  <li><a href="" className={`${styles.tag}`}>Maiz</a></li>
                  <li><a href="" className={`${styles.tag}`}>Non-Basmati Rice</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={`${styles.foot}`}>
          <div className="container">
            <div className='d-flex align-items-center '>
              <div className="col-6">
                <h1 className={`${styles.tag} fs-7 plr lh-lg pt-2 mt-1`}> © Copyright 2022 by Signal Bytes Technologies</h1>
              </div>
              <div className="col-6">
                <div className='s-icon d-flex justify-content-end gap-4'>
                  <li className={`${styles.eclips}`}>
                    <img src='./images/facebook.svg' alt="" />
                  </li>
                  <li className={`${styles.eclips}`}>
                    <img src='./images/twiter.svg' alt="" />
                  </li>
                  <li className={`${styles.eclips}`}>
                    <img src='./images/youtube.svg' alt="" />
                  </li>
                  <li className={`${styles.eclips}`}>
                    <img src='./images/insta.svg' alt="" />
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer