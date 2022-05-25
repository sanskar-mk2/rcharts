import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
    ResponsiveContainer,
} from "recharts";
import moment from "moment";
import { useEffect, useState } from "react";
import { colors } from "../colors";
import CustomizedLabel from "./CustomizedLabel";

function QuantityProduced(props) {
    const [data, set_data] = useState(props.data);
    const [date, set_date] = useState(0);

    useEffect(() => {
        const mapped = props.data.map((e) => ({
            ...e,
            human_date: moment(e.date).format("DD-MMM"),
        }));
        set_data([...mapped]);
        set_date(
            mapped.findIndex(
                (e, i) => moment(e.date).format("YYYY-MM-DD") === props.date
            )
        );
    }, [props]);

    return (
        <ResponsiveContainer width="100%" height="80%">
            <LineChart
                data={data.slice(date, date + 7)}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey={"human_date"} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="quantity_actual"
                    strokeWidth={3}
                    stroke={colors.var9}
                    label={<CustomizedLabel stroke={colors.var7} />}
                />
                <Line
                    type="monotone"
                    dataKey="quantity_goal"
                    strokeWidth={3}
                    stroke={colors.var12}
                    label={<CustomizedLabel stroke={colors.var7} />}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default QuantityProduced;
