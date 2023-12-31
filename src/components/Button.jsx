import React from 'react'
import styles from './styles/Header.module.css'

function Button({ props, state }) {
    return (
        <button className={`${styles.button}  ${state % 2 === 0 ? 'text-danger' : 'text-warning'}`}>
            <img src={state % 2 === 0 ? './images/arrow-button.svg' : './images/yellow-arrow.svg'} className={`d-inline`} alt="" /> {props}
        </button>
    )
}

export default Button