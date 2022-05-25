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

function TeamEfficiency(props) {
    const [sliced, set_sliced] = useState(props.data);
    const [date, set_date] = useState(0);

    useEffect(() => {
        set_date(
            props.data.findIndex(
                (e) => moment(e.date).format("YYYY-MM-DD") === props.date
            )
        );
        const arr = [];
        for (const k of Object.keys(props.data[0])) {
            if (k !== "date")
                arr.push({ team_name: k, prod: 0, actual: 0, eff: 100 });
        }

        for (let i = 0; i < arr.length; i++) {
            for (let j = date; j < date + 7; j++) {
                let team = arr[i].team_name;
                console.log(arr[i]);
                console.log(props.data[j]);
                console.log(team);
                arr[i]["prod"] += props.data[j][team]["prod"];
                arr[i]["actual"] += props.data[j][team]["actual"];
            }
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i].eff *= (arr[i].prod / arr[i].actual).toFixed(2);
        }

        set_sliced([...arr]);
    }, [props, date]);

    return (
        <>
            <ResponsiveContainer width="100%" height="80%">
                <BarChart
                    width={500}
                    height={300}
                    data={sliced}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="team_name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="eff"
                        fill={colors.var9}
                        label={<CustomizedLabel anchor="start" postfix="%" />}
                    />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default TeamEfficiency;
