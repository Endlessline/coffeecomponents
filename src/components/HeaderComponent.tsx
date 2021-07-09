import * as React from "react";
import * as ReactDOM from "react-dom";

export class HeaderComponent extends React.Component {
    state: any = {
        color: 'green',
        height: 100
    };
    websiteId: number = 1;

    render() {
        return (
            <div>
                { this.state.color } { this.state.height }
            </div>
        );
    }
}