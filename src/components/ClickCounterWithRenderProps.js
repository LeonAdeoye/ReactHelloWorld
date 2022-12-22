import React, {Component} from 'react';

class ClickCounterWithRenderProps extends Component
{
    render()
    {
        const {count, incrementCount} = this.props
        return <button onClick={incrementCount}>Clicked {count} times</button>
    }
}

export default ClickCounterWithRenderProps;
