import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@mui/material/Container';
import styles from './index.module.scss'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
      <div className={styles.mainHeader}>
      <div className={styles.header}>
        <Container className={styles.headerContainer} direction="horizontal" gap={2} >
          <div > <Link className={styles.links} href="#">+12312-3-1209</Link>
            <Link className={styles.links} href="#">SUPPORT@COLORLIB.COM</Link></div>
          <Link className={styles.links} href="#">LOGIN</Link>
        </Container></div>

        <nav className={styles.nav}>
          <Container className={styles.navContainer}>
           <div> <Link>
            <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" /></Link></div>
           <div>
            <ul>
              <li><Link className={styles.navLinks} to={"/"}>HOME</Link></li>
              <li><Link className={styles.navLinks} to={"/category"}>CATEGORY</Link></li>
              <li><Link className={styles.navLinks} to={"/men"}>MEN</Link></li>
              <li><Link className={styles.navLinks} to={"/women"}>WOMEN</Link></li>
              <li><Link className={styles.navLinks} to={"/latest"}>LATEST</Link></li>
              <li><Link className={styles.navLinks} to={"/pages"}>PAGES</Link></li>
              <li><Link className={styles.navLinks} to={"/add-product"}>ADD PRODUCT</Link></li>
            </ul>
           </div>
          </Container>
        </nav>
      </div>
    </>
  )
}

export default Header
