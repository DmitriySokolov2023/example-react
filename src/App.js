import './styles/App.css';
import {useEffect, useState} from "react";
import PostList from "./components/PostList";
import PostsForm from "./components/PostsForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";


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
    const [sort, setSort] = useState('def')
    const [query, setQuery] = useState('')

    const createPost = (post) =>{
        setPosts([...posts, post])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const postFilter = (sort) =>{
        setSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }



    return (
        <div className="App">
            <PostsForm create={createPost}/>
            <MyInput
                value={query}
                placeholder={'Поиск по содержанию поста'}
                onChange={e => setQuery(e.target.value)}
            />
            <MySelect
                value={sort}
                defaultValue='Выберите сортировку'
                option={[
                    {value:'title', name:'По названию'},
                    {value:'body', name:'По описанию'},
                ]}
                onChange={postFilter}
            />
            {posts.length !== 0
                ? <PostList posts={posts} remove={removePost} title={'Список постов'}/>
                : <h2>Список постов пуст</h2>
            }

        </div>
    );
}

export default App;
