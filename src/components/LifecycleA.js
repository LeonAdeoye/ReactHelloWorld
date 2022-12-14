import React, {Component} from 'react';
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: 'Harper'
        }

    }
    // Called only once and is invoked immediately after a component and its children components have been rendered to the DOM.
    componentDidMount()
    {
        console.log("Lifecycle A did mount!")
    }

    // Can be used as a performance optimization, and determines whether the component should update or not, and returns false if no update is required.
    // You can compare the state and props with the nextProps and nextState, if there is no difference then return false.
    shouldComponentUpdate(nextProps, nextState, nextContext)
    {
        if(this.props === nextProps && this.state === nextState)
        {
            console.log(`No difference detected in shouldComponentUpdate. Next state: ${nextState.name}`)
            return false;
        }
        else
        {
            console.log(`Difference detected in shouldComponentUpdate. Next state: ${nextState.name}`)
            return true;
        }
    }

    // Called immediately before a component is unmounted from the DOM and destroyed.
    componentWillUnmount()
    {

    }

    changeState = () =>
    {
        this.setState({name: "Horatio"})
    }

    // Called after the component and its children have been rendered.
    componentDidUpdate(prevProps, prevState, snapshot)
    {
        if(prevState !== this.state)
            console.log(`previous state: ${prevState.name} and current state: ${this.state.name}`)
    }

    // Called when there is an error during rendering, in lifecycle methods, or in the constructor of any child component.
    componentDidCatch(error, info)
    {
        console.log(`error : ${error.message}`)
    }

    render()
    {
        return (
            <div>
                <div>LifecycleA:{this.state.name}</div>
                <button  onClick={this.changeState}>Change state</button>
                <LifecycleB/>
            </div>
        );
    }
}

export default LifecycleA;
