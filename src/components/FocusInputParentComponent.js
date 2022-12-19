import React, {Component} from 'react';
import Input from "./Input";

class FocusInputParentComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.componentRef = React.createRef()
    }

    onClickHandler = () => {
        this.componentRef.current.focusInput()
    }

    render()
    {
        return (
            <div>
                <Input ref={this.componentRef}/>
                <button onClick={this.onClickHandler}>Set Focus</button>
            </div>
        );
    }
}

export default FocusInputParentComponent;
