import React from 'react'
import styles from './styles/Header.module.css'
import { Dancing_Script } from 'next/font/google'
import Button from './Button'
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],

})

const dancing_script = Dancing_Script({
  subsets: ['latin'],

})

function About() {
  return (
    <>
      <section className='about'>
        <div className="container">
          <div className='main-content position-relative'>
            <div className='d-flex justify-content-center align-items-center mt-5'>
              <h1 className={`wel-2 ${dancing_script.className}`}>Welcome To <span className={`${raleway.className} display-5 fw-bold text-dark`}>Alpha Male exports at glance</span> </h1>
            </div>
            <div>
              <h1 className={`${styles.tag} plr lh-lg pt-2 text-justify text-center mt-1`}> Alpha Male exports is a well-known exporter and supplier of a variety of agro-food products. A wide range of agricultural items are offered by our Gujrat, India-based company, including spices, non-basmati rice, fresh potato, red potato, pink potato, and maize. Our business offers the greatest and highest-quality agricultural supplies and agricultural Products at cheap prices. The savvy management of our company build a solid name in the food and Spices industries in recent years. While exporting goods to a number of countries, we guarantee high-quality products by implementing stringent quality control measures before to sending them to the consumers. Various Food Products We offer a variety of agricultural products..</h1>
            </div>

            <div className='conman'>
              <img src='./images/conman.png' alt="" />
            </div>
            <div className='leaf'>
              <img src='./images/leaf.svg' alt="" />
            </div>
            <div className='nut'>
              <img src='./images/nut.svg' alt="" />
            </div>
            <div className='text-center mt-5 text-danger fw-semibold'>
              <Button props="Learn More" state={0}/>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default About