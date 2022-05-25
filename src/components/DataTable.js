import moment from "moment";

function DataTable(props) {
    return (
        <div>
            <table>
                <caption>Test Data</caption>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Cost</th>
                        <th>Goal</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((e, i) => (
                        <tr key={i}>
                            <td>{moment(e.date).format("MMM Do YY")}</td>
                            <td>{e.cost}</td>
                            <td>{e.goal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
