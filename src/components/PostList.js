import React, {Component} from 'react';
import axios from "axios";

class PostList extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            posts: [],
            errorMessage: ''
        }
    }

    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response =>
            {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMessage: 'Error retrieving data!'})
            })
    }

    render()
    {
        const { posts, errorMessage } = this.state
        return (
            <div>
                {posts.length ? posts.slice(0, 5).map(post => <h6 key={post.id}> {post.title}</h6>) : null}
                {errorMessage ? <div>{errorMessage}</div> : null}
            </div>
        )
    }
}

export default PostList;
