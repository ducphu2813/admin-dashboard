import "./chartBox.scss";
import {Link} from "react-router-dom";
import {Line, LineChart, ResponsiveContainer, Tooltip} from "recharts";


export const ChartBox = (props) => {
    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <img src={props.icon} alt=""/>
                    <span>{props.title}</span>
                </div>
                <h1>{props.number}</h1>
                <Link to="/" style={{ color: props.color }}>
                    View All
                </Link>
            </div>

            <div className="chartInfo">
                <div className="charts">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={300} height={100} data={props.chartData}>
                            <Tooltip
                                contentStyle={{background: "transparent", border: "none"}}
                                labelStyle={{display: "none"}}
                                position={{x : 5, y : 60}}
                            />
                            <Line
                                type="monotone"
                                dataKey={props.dataKey}
                                stroke={props.color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="texts">
                    <span
                        className="percentage"
                        style={{color: props.percentage<0 ? "tomato" : "limegreen"}}
                    >
                        {props.percentage}%
                    </span>
                    <span className="duration">
                        this month
                    </span>
                </div>
            </div>
        </div>
    )
}