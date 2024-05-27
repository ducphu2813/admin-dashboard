import "./users.scss"
import {DataTable} from "../../components/dataTable/DataTable.jsx";
import * as React from "react";
import {userRows} from "../../data.js";


const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "img",
        headerName: "Avatar",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
        },
    },
    {
        field: "firstName",
        type: "string",
        headerName: "First name",
        width: 150,
    },
    {
        field: "lastName",
        type: "string",
        headerName: "Last name",
        width: 150,
    },
    {
        field: "email",
        type: "string",
        headerName: "Email",
        width: 200,
    },
    {
        field: "phone",
        type: "string",
        headerName: "Phone",
        width: 150,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 150,
        type: "string",
    },
    {
        field: "verified",
        headerName: "Verified",
        width: 120,
        type: "boolean",
    },
];


export const Users = () => {
    console.log("Users");
    return (
        <div className="user">
            <div className="info">
                <h1>Users</h1>
                <button>Add New User</button>
            </div>

            <div className="table">
                <DataTable slug="users" columns={columns} rows={userRows}/>
            </div>
        </div>
    )
}