import React, {Component} from 'react';
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { parentName: 'Papa' }
    }

    // Define the method to pass to the child in the parent and pass it to the props parameter of the child component.
    greetParent = (childName) => alert(`Hello ${this.state.parentName} from ${childName}`);

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}></ChildComponent>
            </div>
        );
    }
}

export default ParentComponent;
