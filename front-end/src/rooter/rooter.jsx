import AddProduct from "../pages/AddProduct";
import Detail from "../pages/Detail";
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
            },
            {

                "path": "/:id",
                "element": <Detail/>
            }
        ]

    }
]