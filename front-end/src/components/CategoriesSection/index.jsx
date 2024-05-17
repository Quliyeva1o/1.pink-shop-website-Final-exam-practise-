import { Container } from '@mui/material'
import React from 'react'
import styles from  "./index.module.scss"

const CategoriesSection = () => {
    return (
        <>
            <Container className={styles.categoriesContainer}>
                <div className={styles.textconteiner}>
                    <h1>Shop for Different Categories</h1>
                    <p>Who are in extremely love with eco friendly system.

                    </p>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <div style={{display:"flex"}}>
                            <div><img src="https://preview.colorlib.com/theme/shop/img/c1.jpg" alt="" /></div>
                            <div> <img src='https://preview.colorlib.com/theme/shop/img/c2.jpg' alt="" /></div>
                        </div>
                        <div> <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg" alt="" /></div>
                    </div>
                    <div><img src="https://preview.colorlib.com/theme/shop/img/c4.jpg" alt="" /></div>
                </div>
            </Container>
        </>
    )
}

export default CategoriesSection
