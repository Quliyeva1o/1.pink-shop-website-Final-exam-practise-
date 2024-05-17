import * as yup from 'yup';

let addProductSchema = yup.object({
    name: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().required(),
    img: yup.string().required()
})
export default addProductSchema