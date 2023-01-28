import React from 'react';
import {useEffect, useState} from 'react';
import axios from "axios";

function DataFetchingOnDemandFunctionalComponent()
{
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(result =>
            {
                setPost(result.data);
            })
            .catch(err =>
            {
                console.log(err)
            })
    }, [idFromButtonClick])
    return (
        <div>
            <input type="text" aria-label="postId" value={id} onChange={event => setId(parseInt(event.target.value)) } />
            <button onClick={() => setIdFromButtonClick(id)}>Get Post</button>
            <h2>{post.title}</h2>
        </div>
    );
}

export default DataFetchingOnDemandFunctionalComponent;
