import "./users.scss"
import {DataTable} from "../../components/dataTable/DataTable.jsx";
export const Users = () => {
    console.log("Users");
    return (
        <div className="user">
            <div className="info">
                <h1>Users</h1>
                <button>Add New User</button>
            </div>

            <div className="table">
                <DataTable />
            </div>
        </div>
    )
}