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
import { PureComponent, useEffect, useState } from "react";
import { colors } from "../colors";

class CustomizedLabel extends PureComponent {
    render() {
        const { x, y, stroke, value } = this.props;

        return (
            <text
                x={x}
                y={y}
                dy={-4}
                fill={stroke}
                fontSize={14}
                textAnchor="right"
            >
                {value}
            </text>
        );
    }
}

function FTES(props) {
    const [data, set_data] = useState(props.data);

    useEffect(() => {
        const mapped = props.data.map((e) => ({
            ...e,
            human_date: moment(e.date).format("DD-MM"),
        }));
        set_data([...mapped]);
    }, [props]);

    return (
        <ResponsiveContainer width="100%" height="80%">
            <LineChart
                data={data.slice(0, 7)}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey={"human_date"} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="fte"
                    strokeWidth={3}
                    stroke={colors.var9}
                    label={<CustomizedLabel />}
                />
                <Line
                    type="monotone"
                    dataKey="goal"
                    strokeWidth={3}
                    stroke={colors.var12}
                    label={<CustomizedLabel />}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default FTES;
