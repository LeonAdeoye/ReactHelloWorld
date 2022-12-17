import React, {Component} from 'react';
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";

class ParentCompOfPure extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            name: "Horatio and Harper"
        }
    }

    componentDidMount()
    {
        // No change to the previous value.
        setInterval(() => { this.setState({name: "Horatio and Harper"})}, 2000)
    }

    render()
    {
        console.log("**************Parent Component Render*****************")
        return (
            <div>
                <h2>Parent Component</h2>
                <RegularComp name = {this.state.name}/>
                <PureComp name = {this.state.name}/>
            </div>
        );
    }
}

export default ParentCompOfPure;
