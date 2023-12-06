import React from 'react';
import Posts from "./Posts";

const PostList = ({posts, remove, title}) => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{title}</h1>
            {posts.map((post, index)=>
                <Posts post={post} remove={remove} key={post.id} number={index+1}/>
            )}
        </div>
    );
};

export default PostList;