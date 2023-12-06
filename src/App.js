import './styles/App.css';
import {useState} from "react";
import PostList from "./components/PostList";
import PostsForm from "./components/PostsForm";


function App() {
    const [posts, setPosts] = useState([
        {id:1, title:'Java Script', body:'Это язык программирования'},
        {id:2, title:'C++', body:'Это язык программирования'},
        {id:3, title:'C#', body:'Это язык программирования'},
        {id:4, title:'HTML', body:'Это язык программирования'},
        {id:5, title:'CSS', body:'Это язык программирования'},
        {id:6, title:'SQL', body:'Это язык программирования'},
        {id:7, title:'Go', body:'Это язык программирования'},
    ])
    const createPost = (post) =>{
        setPosts([...posts, post])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    return (
        <div className="App">
            <PostsForm create={createPost}/>
            <PostList posts={posts} remove={removePost} title={'Список постов'}/>
        </div>
    );
}

export default App;
