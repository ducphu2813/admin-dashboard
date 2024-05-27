import "./home.scss"
import {TopBox} from "../../components/topBox/TopBox.jsx";
import {ChartBox} from "../../components/chartBox/ChartBox.jsx";

import {chartBoxUser} from "../../data.js";
import {chartBoxProduct} from "../../data.js";
import {chartBoxRevenue} from "../../data.js";
import {chartBoxConversion} from "../../data.js";
import {barChartBoxVisit} from "../../data.js";
import {barChartBoxRevenue} from "../../data.js";
import {BarChartBox} from "../../components/barChartBox/BarChartBox.jsx";
import {PieChartBox} from "../../components/pieChartBox/PieChartBox.jsx";
import {BigChartBox} from "../../components/bigChartBox/BigChartBox.jsx";

const Home = () => {
    console.log("Home");
    return (
        <div className="home">
            <div className="box box1">
                <TopBox />
            </div>

            <div className="box box2">
                <ChartBox {...chartBoxUser}/>
            </div>

            <div className="box box3">
                <ChartBox {...chartBoxProduct}/>
            </div>

            <div className="box box4">
                <PieChartBox />
            </div>

            <div className="box box5">
                <ChartBox {...chartBoxRevenue}/>
            </div>

            <div className="box box6">
                <ChartBox {...chartBoxConversion}/>
            </div>

            <div className="box box7">
                <BigChartBox />
            </div>

            <div className="box box8">
                <BarChartBox {...barChartBoxVisit}/>
            </div>

            <div className="box box9">
                <BarChartBox {...barChartBoxRevenue}/>
            </div>

        </div>
    )
}

export default Home;
