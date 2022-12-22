import React, {Component} from 'react';
import withCounter from "./withCounter";

class HoverCounter extends Component
{
    render()
    {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onMouseOver={incrementCount}>{this.props.name} hovered {count} times</button>
            </div>
        );
    }
}
// Passing an increment number of 10 as a parameter to the HOC function.
export default withCounter(HoverCounter, 10);
