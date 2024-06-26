import { useParams } from 'react-router-dom'
import { endpoints } from '../../API/constants';
import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Card, Modal, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import CardsContext from '../../context/CardsContext/CardsContext';
import { delOne, getOne, patchOne } from '../../API/requests';
import addProductSchema from '../../validations/addProductValidations';
import Product from '../../classes/productClass';
const Detail = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])

    useEffect(() => {
        getOne(endpoints.cards, id).then((res) => {
            // console.log(res.res.data);
            setItem(res.res.data)
        })
    }, [])


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const { cards, setCards } = useContext(CardsContext);

    const [open, setOpen] = React.useState(false);
    const [openid, setopenid] = useState(null)
    const [formikValues, setFormikValues] = React.useState({
        name: '',
        price: '',
        description: '',
        img: ''
    });


    const handledel = (id) => {
        delOne(endpoints.cards, id)
        const filteredcards = cards.filter((x) => (x._id != id))
        setCards(filteredcards)
    }
    const handleOpen = (id) => {
        getOne(endpoints.cards, id).then((res) => {
            setopenid(id)
            setFormikValues(res.res.data);
            setOpen(true);
        });
    };

    const handleClose = () => setOpen(false);

    const handleBasket = (id) => {
        let local = JSON.parse(localStorage.getItem("localBasket")) || [];
        const idx = local.findIndex(item => item.id === id);
        if (idx !== -1) {
            local[idx].count += 1;
        } else {
            local.push({ id: id, count: 1 });
        }
        localStorage.setItem("localBasket", JSON.stringify(local));
    }

    useEffect(() => {
        formik.setValues(formikValues);

    }, [formikValues]);

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            description: '',
            img: ''
        },
        onSubmit: values => {
            const newProduct = new Product(values.name, values.price, values.description, values.img)
            patchOne(endpoints.cards, openid, newProduct)
            toast.success("Product updated");
            formik.resetForm();
            handleClose()
        },
        validationSchema: addProductSchema
    });
    return (
        <>
            <Card key={item._id} style={{padding:"200px auto"}}>
                <img src={item.img} alt="" />
                <h6>{item.name}</h6>
                <h3>${item.price}</h3>
                <Button onClick={(e) => { e.preventDefault(), handledel(item._id) }}>del</Button>
                <Button onClick={() => { handleOpen(item._id) }}>update</Button>
                <Button onClick={() => { handleBasket(item._id) }}>basket</Button>
                {/* <Button><Link to={`/${item._id}`}>detail</Link></Button> */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <form action="" onSubmit={formik.handleSubmit}>
                            <TextField value={formik.values.name} id="outlined-basic" label="name" name='name' variant="outlined" onChange={formik.handleChange} />

                            <TextField value={formik.values.price} id="outlined-basic" label="price" name='price' variant="outlined" onChange={formik.handleChange} />

                            <TextField value={formik.values.description} id="outlined-basic" label="description" name='description' variant="outlined" onChange={formik.handleChange} />

                            <TextField value={formik.values.img} id="outlined-basic" label="image src" name='img' variant="outlined" onChange={formik.handleChange} />

                            <Button type='submit'>update Product</Button>
                        </form>

                    </Box>
                </Modal>
            </Card>
        </>
    )
}

export default Detail
