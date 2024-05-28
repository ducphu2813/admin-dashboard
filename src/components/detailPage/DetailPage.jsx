import "./detailPage.scss";
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export const DetailPage = (props) => {
    return (
        <div className="detailPage">
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        {props.img && <img
                            src={props.img}
                            alt=""
                        />}
                        <h1>{props.title}</h1>
                        <button>Update</button>
                    </div>

                    <div className="details">
                        {Object.entries(props.info).map((item) => (
                            <div className="item" key={item[0]}>
                                <span className="itemTitle">{item[0]}: </span>
                                <span className="itemValue">{item[1]}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <hr/>
                {props.chart &&
                    (<div className="chart">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={props.chart.data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip
                                    labelStyle={{display: "none"}}
                                />
                                <Legend/>
                                {props.chart.dataKeys.map( dataKey => (
                                    <Line
                                        key={dataKey.name}
                                        type="monotone"
                                        dataKey={dataKey.name}
                                        stroke={dataKey.color}
                                        activeDot={{r: 8}}
                                    />
                                ))}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>)
                }
            </div>

            <div className="activities">
                <h2>Latest Activities</h2>
                {props.activities && (
                        <ul>
                        {props.activities.map(activity => (
                            <li>
                                <div>
                                    <p>{activity.text}</p>
                                    <time>{activity.time}</time>
                                </div>
                            </li>
                        ))}
                        </ul>
                    )
                }
            </div>
        </div>
    )
}