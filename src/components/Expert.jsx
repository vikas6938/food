import React from 'react'
import { Dancing_Script } from 'next/font/google'
import { Raleway } from 'next/font/google'
const raleway = Raleway({
    subsets: ['latin'],

})

const dancing_script = Dancing_Script({
    subsets: ['latin'],

})

function expert() {
    return (
        <>
            <section className='expert ptb'>
                <div className={`container`}>
                    <div className='row'>
                        <div className='col-6'>
                            <img src="./images/bowl2.png" alt="" />
                        </div>
                        <div className='col-6 gap-2 d-flex justify-content-center align-items-center'>
                            <img src="./images/chili-corn.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default expert