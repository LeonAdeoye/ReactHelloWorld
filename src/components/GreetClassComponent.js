import React, {Component} from "react";

class GreetClassComponent extends Component
{
    render()
    {
        /* props are readonly and immutable - once set they cannot be re-assigned */
        return <h1>Hello {this.props.name}</h1>
    }
}

export default GreetClassComponent;
