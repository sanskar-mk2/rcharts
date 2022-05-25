import { useState, useEffect } from "react";
import moment from "moment";
import { colors } from "../colors";
import {
    PieChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Pie,
    Cell,
    ResponsiveContainer,
    LabelList,
} from "recharts";
import CustomizedLabel from "./CustomizedLabel";

function EfficiencyWeek(props) {
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
                <PieChart>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={[
                            { name: "Poor", value: 85 },
                            { name: "Fair", value: 10 },
                            { name: "Good", value: 5 },
                        ]}
                        cx="50%"
                        cy="70%"
                        innerRadius={120}
                        outerRadius={180}
                        fill="#8884d8"
                        // label
                    >
                        <LabelList fontSize={11} dataKey="name" />
                         <Cell fill={colors.var8} />
                         <Cell fill={colors.var9} />
                         <Cell fill={colors.var11} />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </>
    );
}

export default EfficiencyWeek;
