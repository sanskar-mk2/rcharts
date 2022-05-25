import "./App.css";
import FTES from "./components/FTES";
import CostVsGoal from "./components/ProductionCost";
import ProductionHours from "./components/ProductionHours";
import QuantityProduced from "./components/QuantityProduced";
import { data3, work_data } from "./data";
import moment from "moment";
import { useState } from "react";
import TeamEfficiency from "./components/TeamEfficiency";

function App() {
    // const [interval, set_interval] = useState("weekly");
    const [date, set_date] = useState(
        moment(data3[0].date).format("YYYY-MM-DD")
    );

    return (
        <>
            <div className="container">
                <div></div>
                <div>
                    <input
                        type="date"
                        max={moment(data3[data3.length - 1].date)
                            .subtract(6, "days")
                            .format("YYYY-MM-DD")}
                        min={moment(data3[0].date).format("YYYY-MM-DD")}
                        value={date}
                        onChange={(e) => set_date(e.target.value)}
                    ></input>
                    <select>
                        <option value="weekly">Weekly</option>
                    </select>
                </div>
                <div className="contained production-cost">
                    <div className="heading">Production Cost</div>
                    <CostVsGoal data={data3} date={date} />
                </div>
                <div className="contained quantity-produced">
                    <div className="heading">Quantity Produced</div>
                    <QuantityProduced data={data3} date={date} />
                </div>
                <div className="contained production-hours">
                    <div className="heading">Production Hours</div>
                    <ProductionHours data={work_data} date={date} />
                </div>
                <div className="contained team-efficiency">
                    <div className="heading">Team Efficiency</div>
                    <TeamEfficiency data={work_data} date={date} />
                </div>
                <div className="contained efficiency-week">
                    <div className="heading">Efficiency Week</div>
                    <h1 style={{ color: "orange" }}>WIP</h1>
                </div>
                <div className="contained ftes">
                    <div className="heading">FTEs</div>
                    <FTES data={data3} date={date} />
                </div>
            </div>
        </>
    );
}

export default App;
