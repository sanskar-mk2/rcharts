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
function ProductionHours(props) {
    const [data, set_data] = useState(props.data);

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
    }, [props]);

    return (
        <>
            <ResponsiveContainer width="100%" height="80%">
                <BarChart
                    width={500}
                    height={300}
                    data={data.slice(0, 7)}
                    margin={{
                        top: 5,
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
                    <Bar dataKey="t_prod" fill={colors.var9} />
                    <Bar dataKey="t_actual" fill={colors.var12} />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default ProductionHours;