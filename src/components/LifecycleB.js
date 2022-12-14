import React, {Component} from 'react';

class LifecycleB extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: 'Horatio'
        }

    }

    componentDidMount()
    {
        console.log("Lifecycle B did mount!")
    }

    render()
    {
        return (
            <div>LifecycleB:{this.state.name}</div>
        );
    }
}

export default LifecycleB;
