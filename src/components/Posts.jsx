import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate, useParams} from "react-router-dom";

const Posts = ({post, remove, number}) => {
    const router = useNavigate()
    return (
        <div>
                <div className='post' key={post.id}>
                    <div className='post__content'>
                        <strong>{post.id}. {post.title}</strong>
                        <div>{post.body}</div>
                    </div>
                    <MyButton onClick={()=> router(`/posts/${post.id}/`)}>Открыть</MyButton>
                    <MyButton onClick={()=>remove(post)}>Удалить</MyButton>
                </div>
        </div>
    );
};

export default Posts;