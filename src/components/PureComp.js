import React, {PureComponent} from 'react';

class PureComp extends PureComponent
{
    // Unlike regular components, pure components are not re-rendered if there is no change in state.
    // A regular component does not implement the shouldComponentUpdate method. It always returns true by default.
    // A Pure component does implement the shouldComponentUpdate method with a shallow comparison (SC) of props and state.
    // It does a shallow comparison with previous state and current state, and previous props and current props.
    // Only if there is a difference will a pure component re-render.
    // Note that if the parent is also a pure component then the children (regardless of whether they are regular or pure components) will not re-render if there is no change is state or props.
    // Pure components provide a performance boast if you don't have rerender every time.
    // VERY IMPORTANT: Because pure components only check changes to reference (shallow comparison) then pushing a new element to array will not cause a change in reference, and the pure component will not be re-rendered.
    // Instead, always return a new object or array to effect change in the reference.
    // SHALLOW COMPARISON EXPLANATION: For two primitive types, if A and B have the same value and are of the same type then A (SC) B returns true.
    // For two complex types like objects and arrays, A (SC) B returns true only if they reference the same object.
    // For example, var a = [1,2,3]; var b = [1, 2, 3]; c = a; a===b is false while a===c is true.
    render()
    {
        console.log("Pure Component Render")
        return (
            <div>
                <h2>Pure Component: {this.props.name}</h2>
            </div>
        );
    }
}

export default PureComp;
