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
                this.setState({posts: response.data})
            })
            .catch(error => {
                this.setState({errorMessage: 'Error retrieving data!'})
            })
    }

    render()
    {
        const { posts, errorMessage } = this.state
        return (
            <div>
                {posts.length ? posts.slice(0, 5).map(post => <h6 key={post.id}> {post.title}</h6>) : null}
                {errorMessage ? <h4>{errorMessage}</h4> : null}
            </div>
        )
    }
}

export default PostList;
