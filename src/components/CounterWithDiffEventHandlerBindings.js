import React, {Component} from "react";

class CounterWithDiffEventHandlerBindings extends  Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            count: 0
        }
        // this binding happens in constructor - React recommended.
        this.incrementBy100 = this.incrementBy100.bind(this);
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
            //console.log("In the setState callback the state is now: " + this.state.count);
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

    incrementBy100()
    {
        for(let i = 0; i < 100; ++i)
        this.increment();
    }

    incrementBy1000 = () => {
        for(let i = 0; i < 1000; ++i)
            this.increment();
    }

    render()
    {
        // Four different ways to bind event handlers in React.
        // With onClick={this.incrementByFive} THIS is undefined ergo you have to bind the THIS reference.
        // The first two methods have various performance drawbacks in large applications.
        // The third is the most efficient and React recommended because the binding happens once in the constructor.
        // The forth approach is syntactically a relatively new approach but is also efficient.
        return (
            <div>
                <h4>Count = {this.state.count}</h4>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={this.incrementByFive.bind(this)}>IncrementByFive</button>
                <button onClick={this.incrementBy100}>IncrementBy100</button>
                <button onClick={this.incrementBy1000}>IncrementBy1000</button>
            </div>
        );
    }
}

export default CounterWithDiffEventHandlerBindings;
