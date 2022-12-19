import React, {Component} from 'react';

// Refs make it possible to access DOM nodes directly in React.
// For example if you have a login form with an input field, and if you want the input field to have focus immediately then you would use Refs.
// Refs can only be attached to class components. They cannot be attached to functional components.
class RefsDemo extends Component
{
    constructor(props)
    {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount()
    {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default RefsDemo
