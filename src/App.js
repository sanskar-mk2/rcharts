import "./App.css";
import FTES from "./components/FTES";
import CostVsGoal from "./components/ProductionCost";
import QuantityProduced from "./components/QuantityProduced";
import { data3 } from "./data";

function App() {
    return (
        <div className="container">
            <div className="contained production-cost">
                <div className="heading">Production Cost</div>
                <CostVsGoal data={data3} />
            </div>
            <div className="contained quantity-produced">
                <div className="heading">Quantity Produced</div>
                <QuantityProduced data={data3} />
            </div>
            <div className="contained production-hours">
                <div className="heading">Production Hours</div>
            </div>
            <div className="contained team-efficiency">
                <div className="heading">Team efficiency</div>
            </div>
            <div className="contained efficiency-week">
                <div className="heading">efficiency week</div>
            </div>
            <div className="contained ftes">
                <div className="heading">FTEs</div>
                <FTES data={data3} />
            </div>
        </div>
    );
}

export default App;
