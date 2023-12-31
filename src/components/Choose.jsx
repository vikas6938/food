import React from 'react'
import styles from './styles/Header.module.css'
import { Dancing_Script } from 'next/font/google'
import { Raleway } from 'next/font/google'

const raleway = Raleway({
    subsets: ['latin'],

})

const dancing_script = Dancing_Script({
    subsets: ['latin'],

})

function Choose() {
    return (
        <>
            <section className={`${styles.choose} `}>
                <div className="container ">
                    <div className=''>
                        <div className='d-flex justify-content-center align-items-center '>
                            <h1 className={`wel-2 m-0 ${dancing_script.className}`}>Why <span className={`${raleway.className} display-5 fw-bold text-dark`}>Choose Us?</span> </h1>
                        </div>
                        <div className={'d-flex justify-content-center'}>
                            <img src='./images/24-7.png' alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Choose