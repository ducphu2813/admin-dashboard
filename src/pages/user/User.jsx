import "./user.scss";
import {DetailPage} from "../../components/detailPage/DetailPage.jsx";
import {singleUser} from "../../data.js";

export const User = () => {

    //lấy data và đưa vào component detail


    return (
        <div className="user">
            <DetailPage {...singleUser}/>
        </div>
    )
}