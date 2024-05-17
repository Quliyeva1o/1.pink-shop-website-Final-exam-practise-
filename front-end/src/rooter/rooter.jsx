import AddProduct from "../pages/AddProduct";
import Home from "../pages/Home";
import MainRoot from "../pages/mainRoot";

export const root = [
    {
        "path": "/",
        element: <MainRoot />,
        children: [
            {
                index: true,
                "element": <Home />
            },
            {

                "path": "/add-product",
                "element": <AddProduct />
            }
        ]

    }
]