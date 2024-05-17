import { Card, CardContent, Container } from '@mui/material'
import React from 'react'
import styles from './index.module.scss'
const MenProducts = () => {
    return (
        <>
            <div className={styles.menProductsDiv}>
                <div className={styles.bg}>
                <Container >
                    <div className={styles.textContainer}>
                        <h1>New realeased Products for Men
                        </h1>
                        <p>Who are in extremely love with eco friendly system.</p>
                    </div>
                    <CardContent style={{display:"flex" ,justifyContent:"space-between"}}>

                        <Card>
                            <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg" alt="" />
                            <h6>Long Sleeve shirt
                            </h6>
                            <h3>$150.00
                            </h3>
                        </Card>
                        <Card>
                            <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg" alt="" />
                            <h6>Long Sleeve shirt
                            </h6>
                            <h3>$150.00
                            </h3>
                        </Card>
                        <Card>
                            <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg" alt="" />
                            <h6>Long Sleeve shirt
                            </h6>
                            <h3>$150.00
                            </h3>
                        </Card>
                        <Card>
                            <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg" alt="" />
                            <h6>Long Sleeve shirt
                            </h6>
                            <h3>$150.00
                            </h3>
                        </Card>
                    </CardContent>
                </Container>
                </div>
            </div>
        </>
    )
}

export default MenProducts
