import "./add.scss";
import React from "react";


export const Add = ({setOpen, columns, slug}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit " + slug);
        setOpen(false);
    }

    return (
        <div className="add">
            <div className="modal">
                <span className="close" onClick={() => setOpen(false)}>X</span>
                <h1>Add New {slug}</h1>
                <form onSubmit={handleSubmit}>
                    {columns
                        .filter(column => column.field !== "id" && column.field !== "img")
                        .map(column => (
                        <div className="item">
                            <label >{column.headerName}</label>
                            <input type={column.type} placeholder={column.field}/>
                        </div>
                    ))}
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}