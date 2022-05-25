import { PureComponent } from "react";

class CustomizedLabel extends PureComponent {
    render() {
        const { x, y, stroke, value, anchor, size, postfix } = this.props;

        return (
            <text
                x={x}
                y={y}
                dy={-4}
                fill={stroke}
                fontSize={size}
                textAnchor={anchor}
            >
                {value}{postfix}
            </text>
        );
    }
}

export default CustomizedLabel;
