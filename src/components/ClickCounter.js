import React, {Component} from 'react';
import withCounter from "./withCounter";

class ClickCounter extends Component
{
    render()
    {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>{this.props.name} clicked {count} times</button>
            </div>
        );
    }
}

// Passing an increment number of 5 as a parameter to the HOC function.
export default withCounter(ClickCounter, 5);
