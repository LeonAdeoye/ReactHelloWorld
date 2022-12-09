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
        // The only way to set state after it has been set in the constructor is to use the setState. State cannot be modified directly.
        // Calls to setState are asynchronous. Anything following setState is being called before the state is being set.
        // To execute some code after the state has been updated, you can pass in a callback function as a second argument to the setState method.
        // React may group multiple set state calls in one go and give you unpredictable results so use the below syntax with previous state to make each state change unique.
        this.setState((previousState) => ({
            count: previousState.count + 1
        }), () =>
        {
            console.log("In the setState callback the state is now: " + this.state.count);
        });
    }

    // React may group multiple set state calls in one go and give you unpredictable results so use the below syntax with previous state to make each state change unique.
    incrementByFive()
    {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render()
    {
        return (
            <div>
                Count = {this.state.count}
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementByFive()}>IncrementByFive</button>
            </div>
        );
    }
}

export default Counter;
