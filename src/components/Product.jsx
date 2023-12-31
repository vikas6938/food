import React from 'react'
import styles from './styles/Header.module.css'
import { Dancing_Script } from 'next/font/google'
import Button from './Button';
import { Raleway } from 'next/font/google'


const raleway = Raleway({
    subsets: ['latin'],

})

const dancing_script = Dancing_Script({
    subsets: ['latin'],

})



function Product() {
    const carData = [
        {
            img: "./images/basmati.png",
            name: "Basmati Rice",
            desc: "Basmati, is a variety of long, slender-grained aromatic rice which is traditionally grown in India,Basmati is gluten-free and low in fat....."
        },
        {
            img: "./images/spices.png",
            name: "Basmati Rice",
            desc: "Whether you use spices fresh or dried, you'll still get beneficial compounds. Experts point out that frying or grilling can decrease spices'....",
        },
        {
            img: "./images/non-basmati.png",
            name: "Non-Basmati",
            desc: "Basmati, is a variety of long, slender-grained aromatic rice which is traditionally grown in India,Basmati is gluten-free and low in fat."
        },
        {
            img: "./images/maiz.png",
            name: "Maiz",
            desc: "Basmati, is a variety of long, slender-grained aromatic rice which is traditionally grown in India,Basmati is gluten-free and low in fat."
        },
    ]
    console.log(carData)
    return (
        <>
            <div className={`${styles.productrow} container-fluid `}>
                <div className='container '>
                    <div className='text-center mb-5'>
                        <h1 className={`wel-2 ${dancing_script.className}`}>Our <span className={`${raleway.className} display-5 fw-bold text-dark`}>Product</span> </h1>
                    </div>
                    <div className={` row `}>
                        {
                            carData.map((item, i) => (
                                <div className="col-3" key={i}>
                                    <div className="card border-0 ">
                                        <div className='sub-card b-r align-items-center text-center p-3'>
                                            <div className={`border-2 ${i % 2 === 0 ? 'border-danger' : 'border-warning'} b-r py-4`}>
                                                <div className='i-right d-flex justify-content-end m-0'>
                                                    <img variant="top" className='' src={item.img} />
                                                </div>
                                                <div className='tittle fw-bold fs-4 mt-1'>{item.name}</div>
                                                <div className='text fs-6 px-2 my-2'>{item.desc}</div>
                                                <div className={` text-center my-3  fw-semibold`}>
                                                    <Button props="Learn More" state={i} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;