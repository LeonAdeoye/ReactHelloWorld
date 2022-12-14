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

    handleSubmit = (event) =>
    {
        alert(`username: ${this.state.userName}, comment: ${this.state.comment}, topic: ${this.state.topic}`);
        event.preventDefault();
    }

    render()
    {
        // destruct values from this.state
        const {userName, comment, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type='text' value={userName} onChange={this.handleUsernameChange}/>
                    <h2>{userName}</h2>
                </div>
                <div>
                    <label>Comment:</label>
                    <textarea value={comment} onChange={this.handleCommentChange}/>
                    <h2>{comment}</h2>
                </div>
                <div>
                    <label>Topic:</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="blazor">Blazor</option>
                    </select>
                    <h2>{topic}</h2>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default FormComponent;
