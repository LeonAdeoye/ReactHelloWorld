import React, {Component} from 'react';

class Column extends Component
{
    render()
    {
        // Fragments let you group a list of child components without adding extra div nodes to the DOM.
        // Without these, you would have to use a div tag which would appear in the DOM.
        // Sometimes div tags cannot be a parent or child or other tags.
        // For example, table tags. You will get a warning that the <td> cannot be a child of the <div> tag.
        return (
            <React.Fragment>
                <td>Horatio</td>
                <td>Harper</td>
            </React.Fragment>
        );
    }
}

export default Column;
