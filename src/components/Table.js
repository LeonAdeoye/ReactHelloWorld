import React, {Component} from 'react';
import Column from "./Column";

class Table extends Component
{
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <Column/>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;
