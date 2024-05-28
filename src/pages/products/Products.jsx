import "./products.scss"
import {DataTable} from "../../components/dataTable/DataTable.jsx";
import {products} from "../../data.js";
import {Add} from "../../components/add/Add.jsx";
import * as React from "react";
import {useState} from "react";

const columns= [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
        },
    },
    {
        field: "title",
        type: "string",
        headerName: "Title",
        width: 250,
    },
    {
        field: "color",
        type: "string",
        headerName: "Color",
        width: 150,
    },
    {
        field: "price",
        type: "string",
        headerName: "Price",
        width: 150,
    },
    {
        field: "producer",
        headerName: "Producer",
        type: "string",
        width: 150,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 120,
        type: "string",
    },
    {
        field: "inStock",
        headerName: "In Stock",
        width: 150,
        type: "boolean",
    },
];

export const Products = () => {

    const [open, setOpen] = useState(false);

    console.log("Products");
    return (
        <div className="product">
            <div className="info">
                <h1>Products</h1>
                <button onClick={() => setOpen(true)}>Add New Product</button>
            </div>

            <div className="table">
                <DataTable slug="products" columns={columns} rows={products}/>
            </div>

            {open && <Add slug="product" columns={columns} setOpen={setOpen}/>}
        </div>
    )
}