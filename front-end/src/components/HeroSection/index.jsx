import { Container } from '@mui/material'
import React from 'react'
import styles from './index.module.scss'
const Hero = () => {
    return (
        <>
            <div className={styles.heroContainer}>
                <div className={styles.imgdiv}><img src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt="" /></div>
                <div className={styles.textContent}>
                    <h2><span>Flat</span> 75%Off</h2>
                    <h1>IT’S HAPPENING <br />
                        THIS SEASON!</h1>
                    <button>PURCHASE NOW
                    </button></div>

            </div>
        </>
    )
}

export default Hero
