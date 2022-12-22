import React, {Component} from 'react';

class User extends Component
{
    // In React, it is possible to a use props whose value is a function to control what is rendered by a component.
    // The term "render prop" refers to a technique for sharing code between React components using a prop whose value is a function.
    render() {
        return (
            <div>
                {this.props.render(true)}
            </div>
        );
    }
}

export default User;
