import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostsForm = (props) => {
    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (e =>{
        e.preventDefault()
        const newPost = {
            ...post, id:Date.now()
        }
        props.create(newPost)
        setPost({
            title: '',
            body: ''
        })
    })
    return (
        <form>
            <MyInput
                value={post.title}
                placeholder='Название поста'
                onChange={(e)=> setPost({...post, title: e.target.value})}
            />
            <MyInput
                value={post.body}
                placeholder='Название поста'
                onChange={(e)=> setPost({...post, body: e.target.value})}
            />
            <MyButton
                onClick={addNewPost}
            >
                Добавить пост
            </MyButton>
        </form>
    );
};

export default PostsForm;