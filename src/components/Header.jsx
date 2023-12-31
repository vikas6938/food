import React from 'react'
import styles from './styles/Header.module.css'



const Header = () => {
    return (
        <>
            <header className='main pb-16'>
                <div className="content">
                    <div className='container'>
                        <div className={`${styles.header} d-flex justify-content-between align-items-center`}>
                            <div className={styles.logo}>
                                <img src='/images/logo.png' alt="" />
                            </div>
                            <div className={styles.menu}>
                                <ul className='d-flex justify-content-between align-items-center gap-4'>
                                    <li><a href="" className={`${styles.tag} ${styles.active} fw-bold border-bottom fw-bold text-dark`}>Home</a></li>
                                    <li><a href="" className={`${styles.tag}`}>About Us</a></li>
                                    <li><a href="" className={`${styles.tag}`}>Product</a></li>
                                    <li><a href="" className={`${styles.tag}`}>Blog</a></li>
                                    <li><a href="" className={`${styles.tag}`}>Contact Us</a></li>
                                </ul>
                            </div>
                            <div className='s-icon d-flex justify-content-between align-items-start gap-3'>
                                <li><a href="" className={`${styles.tag}`}>+91 8128128181</a></li>
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
            </header>
        </>
    )
}

export default Header