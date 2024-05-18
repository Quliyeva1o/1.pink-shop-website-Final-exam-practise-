import React from 'react'
import styles from "./index.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Footer = () => {

    return (
        <>
            <Container className= {styles.footer}>
                <div>
                    <Col lg={3} md={6} sm={12}><h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p></Col>
                    <Col lg={3} md={6} sm={12}><h1>
                        Newsletter</h1>
                        <p>Stay update with our latest
                        </p>
                        <input type="text" placeholder='Enter Email' />
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <h1>Instagram Feed</h1>
                        <div className={styles.images}>
                            <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" />
                            <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" />
                            <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" />
                            <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" />
                            <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" />
                            <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" />
                            <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" />

                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <h1>Follow Us</h1>
                        <p>Let us be social</p>
                    </Col>
                </div>
                <p style={{ color: "#777", textAlign: "center", paddingBottom: "80px " }}>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
            </Container>
        </>
    )
}

export default Footer
