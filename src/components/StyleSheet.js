import React, {Component} from 'react';
import './myStyles.css'

class StyleSheet extends Component
{
    constructor(props)
    {
        super(props);

    }

    // Use a backtick to apply template font-xl literal to the styling.
    render()
    {
        let classNameValue = this.props.primary ? 'primary' : ''
        return (
            <div>
                <h1 className={`${classNameValue} font-xl`}>Stylesheets</h1>
            </div>
        );
    }
}

export default StyleSheet;
