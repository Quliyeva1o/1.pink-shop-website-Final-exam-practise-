import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import styles from './index.module.scss'
import addProductSchema from '../../validations/addProductValidations';
import Product from '../../classes/productClass';
import { postOne } from '../../API/requests';
import { endpoints } from '../../API/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      description: '',
      img: '',
    },
    onSubmit: values => {
      const newProduct = new Product(values.name, values.price, values.description, values.img)
      postOne(endpoints.cards, newProduct)
      toast.success("Product added");
      formik.resetForm()
    },

    validationSchema: addProductSchema
  });

  return (
    <>
      <form action="" className={styles.form} onSubmit={formik.handleSubmit}>
        <TextField value={formik.values.name} id="outlined-basic" label="name" name='name' variant="outlined" onChange={formik.handleChange} />
        {formik.errors.name && <span style={{ color: "red" }}>{formik.errors.name}</span>}
        <TextField value={formik.values.price} id="outlined-basic" label="price" name='price' variant="outlined" onChange={formik.handleChange} />
        {formik.errors.price && <span style={{ color: "red" }}>{formik.errors.price}</span>}
        <TextField value={formik.values.description} id="outlined-basic" label="description" name='description' variant="outlined" onChange={formik.handleChange} />
        {formik.errors.description && <span style={{ color: "red" }}>{formik.errors.description}</span>}
        <TextField value={formik.values.img} id="outlined-basic" label="image src" name='img' variant="outlined" onChange={formik.handleChange} />
        {formik.errors.img && <span style={{ color: "red" }}>{formik.errors.img}</span>}

        <Button type='submit'>Add Product</Button>

      </form>
      <ToastContainer />

    </>
  )
}

export default AddProduct
