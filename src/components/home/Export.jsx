import React from 'react'
import { Raleway } from 'next/font/google'
import { Dancing_Script } from 'next/font/google'



const raleway = Raleway({
    subsets: ['latin'],

})

const dancing_script = Dancing_Script({
    subsets: ['latin'],

})


function Export() {
  return (
    <>
        <section className='export py-4 bg-danger'>
            <div className="container">
                <div className="d-flex">
                    <div className="col-4 d-flex justify-content-center align-items-center border-end">
                        <img src="./images/global.png" alt="" />
                    </div>
                    <div className="col-4 border-end">
                        <img src="./images/costumer.png" alt="" />
                    </div> 
                    <div className="col-4">
                        <img src="./images/deliver.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
    )

}

export default Export