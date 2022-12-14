import React, {Component} from 'react';

class Column extends Component
{
    render()
    {
        // Fragments let you group a list of child components without adding extra div nodes to the DOM.
        // Without these, you would have to use a div tag which would appear in the DOM.
        // Sometimes div tags cannot be a parent or child or other tags.
        // For example, table tags. You will get a warning that the <td> cannot be a child of the <div> tag.
        // Key attribute is the only attribute that can be applied to a fragment.
        // There is a shorthand syntax for rendering fragments: <>, </> but the key attribute cannot be used with this shorthand.
        return (
            <React.Fragment key={"kids"}>
                <td>Horatio</td>
                <td>Harper</td>
            </React.Fragment>
        );
    }
}

export default Column;
