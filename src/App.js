import './styles/App.css';
import { useState} from "react";
import PostList from "./components/PostList";
import PostsForm from "./components/PostsForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {useSortedAndSearchPost} from "./hooks/usePost";
import PostServices from "./API/PostServices";




function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Java Script', body: 'Это язык программирования'},
        {id: 2, title: 'C++', body: 'Это язык программирования'},
        {id: 3, title: 'C#', body: 'Это язык программирования'},
        {id: 4, title: 'HTML', body: 'Это язык программирования'},
        {id: 5, title: 'CSS', body: 'Это язык программирования'},
        {id: 6, title: 'SQL', body: 'Это язык программирования'},
        {id: 7, title: 'Go', body: 'Это язык программирования'},
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [visible, setVisible] = useState(false)
    const sortedAndSearchPosts = useSortedAndSearchPost(posts, filter.sort, filter.query)

    async function getPosts(){
        const response = await PostServices.getAll()
        console.log(response.data)
    }

    getPosts()


    const createPost = (post) => {
        setPosts([...posts, post])
        setVisible(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton
                onClick={() => setVisible(true)}
            >
                Добавить пост
            </MyButton>
            <MyModal visible={visible} setVisible={setVisible}>
                <PostsForm create={createPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList posts={sortedAndSearchPosts} remove={removePost} title={'Список постов'}/>
        </div>
    );
}

export default App;
