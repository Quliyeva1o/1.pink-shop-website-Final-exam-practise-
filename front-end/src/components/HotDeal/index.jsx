import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./index.module.scss"


const HotEnds = () => {
    return (
        <>
            <div className={styles.mainCont}>
                <div className={styles.textContent}>
                    <h1>Exclusive Hot Deal Ends in:</h1>
                    <p>Who are in extremely love with eco friendly system</p>
                </div>
                <div>
                    <div className={`row ${styles.HotContainer}`}>
                        <div className="col-xl-4 col-lg-4"></div>
                        <div className="col-xl-6 col-lg-7 d-flex justify-content-around  ">
                            <img src="https://preview.colorlib.com/theme/shop/img/cd.png" className={`${styles.img} img-fluid cd-img`} alt="" />
                            <div className={`countdown d-flex justify-content-center justify-content-md-end`} id="js-countdown">

                                <div className="countdown-item">
                                    <div className={`countdown-timer js-countdown-days time ${styles.pink}`} aria-labelledby="day-countdown ">-2041</div>
                                    <div className="countdown-label" id="day-countdown">Days</div>
                                </div>
                                <div className="countdown-item">
                                    <div className={`countdown-timer js-countdown-days time ${styles.pink}`} aria-labelledby="hour-countdown">18</div>
                                    <div className="countdown-label" id="hour-countdown">Hours</div>
                                </div>
                                <div className="countdown-item">
                                    <div className={`countdown-timer js-countdown-days time ${styles.pink}`} aria-labelledby="minute-countdown">53</div>
                                    <div className="countdown-label" id="minute-countdown">Minutes</div>
                                </div>
                                <div className="countdown-item">
                                    <div className={`countdown-timer js-countdown-days time ${styles.pink}`} aria-labelledby="second-countdown">44</div>
                                    <div className="countdown-label text" id="second-countdown">Seconds</div>
                                </div>
                                <a href="#" className={`view-btn primary-btn2 ${styles.shopBtn}`}><span>Shop Now</span></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotEnds
