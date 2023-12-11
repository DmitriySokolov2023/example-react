import React from 'react';
import MyButton from "./UI/button/MyButton";

const Posts = ({post, remove, number}) => {
    return (
        <div>
                <div className='post' key={post.id}>
                    <div className='post__content'>
                        <strong>{number}. {post.title}</strong>
                        <div>{post.body}</div>
                    </div>
                    <MyButton
                        onClick={()=>remove(post)}
                    >
                        Удалить
                    </MyButton>
                </div>
        </div>
    );
};

export default Posts;