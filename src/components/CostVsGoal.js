import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
} from "recharts";
import moment from "moment";
import { PureComponent, useEffect, useState } from "react";

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

function CostVsGoal(props) {
    const [data, set_data] = useState(props.data);
    const [interval, set_interval] = useState(5);

    useEffect(() => {
        const mapped = props.data.map((e) => ({
            ...e,
            human_date: moment(e.date).format("DD-MM"),
        }));
        set_data([...mapped]);
    }, [props]);

    return (
        <div>
            <label htmlFor="interval">Interval</label>
            <input
                id="interval"
                onChange={(e) => set_interval(e.target.value)}
                type="range"
                min="5"
                max="30"
                value={interval}
            ></input>
            {interval}
            <LineChart
                width={1000}
                height={600}
                data={data.slice(0, interval)}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey={"human_date"} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="cost"
                    strokeWidth={3}
                    stroke="#FFA500"
                    label={<CustomizedLabel />}
                />
                <Line
                    type="monotone"
                    dataKey="goal"
                    strokeWidth={3}
                    stroke="#0000FF"
                    label={<CustomizedLabel />}
                />
            </LineChart>
        </div>
    );
}

export default CostVsGoal;
