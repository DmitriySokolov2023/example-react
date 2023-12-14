import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import PostServices from "../API/PostServices";
import {useParams} from "react-router-dom";


const PostIdPage = () => {
    const param = useParams()
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const [fetchPost, isLoading, error] = useFetching(async (id)=>{
        const response = await PostServices.getPostById(id)
        setPost(response.data)
    })
    const [fetchPostComments, isLoadingComments, errorComments] = useFetching(async (id)=>{
        const response = await PostServices.getComments(id)
        setComments(response.data)

    })
    useEffect(() => {
        fetchPost(param.id)
        fetchPostComments(param.id)
    }, []);

    return (
        <div>
            {error && <h1 style={{color: "red"}}>{error}</h1>}
            {
                isLoading
                    ? <h1>Загрузка....</h1>
                    :
                    <div>
                        <h1>Пост {param.id}</h1>
                        <div>{post.title}</div>
                        <div>{post.body}</div>
                        <h1>Комментарии</h1>
                        {comments.map(comment =>
                            <div key={comment.id}>
                                <h4>{comment.email}</h4>
                                <div>{comment.body}</div>
                            </div>
                        )}
                    </div>

            }
        </div>
    );
};

export default PostIdPage;