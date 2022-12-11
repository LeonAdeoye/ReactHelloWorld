import React, {Component} from 'react';

class UserGreeting extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            isLoggedIn: false,
            isChristmas: true,
            isAlive: false
        }
    }

    // Conditional rendering
    render()
    {
        // Use a variable outside the JSX for conditional rendering
        let nameOfPerson
        if(this.state.isLoggedIn)
        {
            nameOfPerson = "Papa"
        }
        else
        {
            nameOfPerson = "Guest"
        }
        // if else do not work with JSX - they are invalid and must be placed outside.
        if(this.state.isLoggedIn)
        {
            // Conditional rendering using a ternary operator.
            return (this.state.isChristmas ? <div>Merry Christmas {nameOfPerson}</div> : <div>Welcome {nameOfPerson}</div>)
        }
        else
        {
            // Short circuit operator to show something only if boolean expression evaluates to true.
            return this.state.isAlive && <div>Welcome {nameOfPerson}</div>
        }
    }
}

export default UserGreeting;
