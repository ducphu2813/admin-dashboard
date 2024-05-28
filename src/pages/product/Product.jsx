import "./product.scss";
import {DetailPage} from "../../components/detailPage/DetailPage.jsx";
import {singleProduct} from "../../data.js";

export const Product = () => {

    //lấy data và đưa vào component detail


    return (
        <div className="product">
            <DetailPage {...singleProduct}/>
        </div>
    )
}