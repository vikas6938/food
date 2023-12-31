import React from 'react'

import { Dancing_Script } from 'next/font/google'
import styles from './styles/Header.module.css'
import { Raleway } from 'next/font/google'
const raleway = Raleway({
    subsets: ['latin'],

})

const dancing_script = Dancing_Script({
    subsets: ['latin'],

})

function Client() {
    return (
        <>
            <section className='client '>
                <div className={`container`}>
                    <div className='text-center mb-5'>
                        <h1 className={`wel-3 ${dancing_script.className}`}>What <span className={`${raleway.className} display-5 fw-bold text-dark`}>Our Clients Say!</span> </h1>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <img src="./images/l-client.png" alt="" />
                        </div>
                        <div className='col-8 client-body gap-2 d-flex justify-content-center align-items-center'>
                            <div className="col-4">
                                <img src="./images/center-client.png" alt="" />
                            </div>
                            <div className="col-8 px-4">
                                <div className='d-flex justify-content-between'>
                                    <img src="./images/inverter.svg" alt="" />
                                    <img src="./images/dot.png" alt="" />
                                </div>
                                <div className=''>
                                    <h1 className={`${styles.tag} fs-7 plr lh-lg pt-2 mt-1`}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h1> <span className='tittle fw-bold fs-4 mt-1'>Cody Fisher</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-2'>
                            <img src="./images/r-client.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Client