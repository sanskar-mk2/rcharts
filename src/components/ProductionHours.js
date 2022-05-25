import { useState, useEffect } from "react";
import moment from "moment";
import { colors } from "../colors";
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    ResponsiveContainer,
} from "recharts";
import CustomizedLabel from "./CustomizedLabel";
function ProductionHours(props) {
    const [data, set_data] = useState(props.data);
    const [date, set_date] = useState(0);

    useEffect(() => {
        const arr = [];
        for (let i = 0; i < props.data.length; i++) {
            const o = {};
            let t_actual = 0;
            let t_prod = 0;
            o.date = props.data[i].date;
            o.human_date = moment(o.date).format("DD-MMM");
            for (const [key, value] of Object.entries(props.data[i])) {
                if (key !== "date") {
                    t_actual += value.actual;
                    t_prod += value.prod;
                }
            }
            o.t_actual = t_actual;
            o.t_prod = t_prod;
            arr.push(o);
        }
        set_data([...arr]);
        set_date(
            arr.findIndex(
                (e, i) => moment(e.date).format("YYYY-MM-DD") === props.date
            )
        );
    }, [props]);

    return (
        <>
            <ResponsiveContainer width="100%" height="80%">
                <BarChart
                    width={500}
                    height={300}
                    data={data.slice(date, date + 7)}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="human_date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="t_prod"
                        fill={colors.var9}
                        label={<CustomizedLabel anchor="start" size={11} />}
                    />
                    <Bar
                        dataKey="t_actual"
                        fill={colors.var12}
                        label={<CustomizedLabel anchor="start" size={11} />}
                    />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default ProductionHours;
