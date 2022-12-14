import React, {Component} from 'react';

class FormComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            userName : '',
            comment: '',
            topic: 'React'
        }
    }

    handleUsernameChange = (event) =>
    {
        this.setState( {userName: event.target.value})
    }

    handleCommentChange = (event) =>
    {
        this.setState({comment: event.target.value})
    }

    handleTopicChange = (event) =>
    {
        this.setState({topic: event.target.value})
    }

    render()
    {
        return (
            <form>
                <div>
                    <label>Username:</label>
                    <input type='text' value={this.state.userName} onChange={this.handleUsernameChange}/>
                    <h2>{this.state.userName}</h2>
                </div>
                <div>
                    <label>Comment:</label>
                    <textarea value={this.state.comment} onChange={this.handleCommentChange}/>
                    <h2>{this.state.comment}</h2>
                </div>
                <div>
                    <label>Topic:</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="blazor">Blazor</option>
                    </select>
                    <h2>{this.state.topic}</h2>
                </div>
            </form>
        );
    }
}

export default FormComponent;
