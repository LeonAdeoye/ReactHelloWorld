import React, {Component} from 'react';
import {UserConsumer} from "./UserContext";

class ComponentC extends Component
{
    render()
    {
        return (
            <UserConsumer>
                {
                    (userName) =>
                    {
                        return <h3>From Component A-> B -> C: Hello {userName}</h3>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentC;
