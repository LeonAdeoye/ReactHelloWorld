import React, {useEffect, useState} from 'react';
import axios from "axios";

function DataFetchingFunctionalComponent(props)
{
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(result =>
            {
                setPosts(result.data)
            })
            .catch(err =>
            {
                console.error(err)
            })
    }, []) // empty dependency array is used so that the axios get method is called only once.
    return (
        <div>
            <ul>
                {
                    posts.slice(0, 3).map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    );
}

export default DataFetchingFunctionalComponent;
