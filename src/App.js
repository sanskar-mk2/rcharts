import "./App.css";
import CostVsGoal from "./components/CostVsGoal";
import DataTable from "./components/DataTable";
import { data } from "./data";

function App() {
    return (
        <div className="f">
            <DataTable data={data} />
            <CostVsGoal data={data} />
        </div>
    );
}

export default App;
