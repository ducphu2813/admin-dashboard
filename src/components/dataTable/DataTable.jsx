import * as React from 'react';
import "./dataTable.scss";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {userRows} from "../../data.js";
import {Link} from "react-router-dom";


export const DataTable = ({slug, columns, rows}) => {

    const handleDelete = (id) => {
        console.log("Delete", id);
    }

    const actionColumns = {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to={`/${slug}/${params.row.id}`}>
                        <img src="./view.svg" alt=""/>
                    </Link>
                    <div className="delete" onClick={() => handleDelete(params.row.id)}>
                        <img src="./delete.svg" alt=""/>
                    </div>
                </div>
            );
        },
    }

    return (
        <div className="dataTable">
            <DataGrid
                className="dataGrid"
                rows={userRows}
                columns={[...columns, actionColumns]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{toolbar: GridToolbar}}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: {debounceMs: 500},
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    )
}