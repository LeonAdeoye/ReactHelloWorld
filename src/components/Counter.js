import React, {Component} from "react";

class Counter extends  Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment()
    {
        // The only way to set state after it is set in the constructor is to use the setState.
        // Calls to setState are asynchronous. Anything following is being called before the state is being set.
        // To execute some code after the state has been updated, you can pass in a callback function as a second argument to the setState method.
        this.setState({ count : this.state.count + 1 },() =>
        {
            console.log("In setState callback the state is now: " + this.state.count);
        });
    }

    render()
    {
        return (
            <div>
                Count = {this.state.count}
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        );
    }
}

export default Counter;
