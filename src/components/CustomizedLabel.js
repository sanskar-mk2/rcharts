import { PureComponent } from "react";

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

export default CustomizedLabel;
