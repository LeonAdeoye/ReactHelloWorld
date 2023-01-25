import React, {Component} from 'react';
import axios from "axios";

class PostForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (event) =>
    {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = (event) =>
    {
        event.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => console.log("post-added"))
            .catch(error => console.log(error))
    }

    render()
    {
        const{ userId, title, body }  = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" aria-label="UserId" value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="title" aria-label="Title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="body" aria-label="Body" value={body} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;
