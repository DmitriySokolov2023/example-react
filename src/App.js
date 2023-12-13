import './styles/App.css';
import React, {useEffect, useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostsForm from "./components/PostsForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {useSortedAndSearchPost} from "./hooks/usePost";
import PostServices from "./API/PostServices";
import {useFetching} from "./hooks/useFetching";
import {pageCount} from "./components/utils/pageCount";
import {usePagination} from "./hooks/usePagination";




function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [visible, setVisible] = useState(false)
    const [totalPages, setTotalCount] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchPosts = useSortedAndSearchPost(posts, filter.sort, filter.query)

    const [fetchPosts, isLoading, error] = useFetching(async ()=>{
        const response = await PostServices.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalCount(pageCount(totalCount, limit))
    })

     const pagesArray = usePagination(totalPages)
    console.log(pagesArray)

    useEffect(() => {
        fetchPosts()
    }, []);



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
            {error && <h1 style={{color:"red"}}>{error}</h1>}
            {
                isLoading
                    ? <h1>Загрузка....</h1>
                    : <PostList posts={sortedAndSearchPosts} remove={removePost} title={'Список постов'}/>
            }
            {pagesArray?.map((p, index) =>
                <MyButton
                    key={index}
                    style={{margin:'20px 0'}}
                    className={page === p ? 'page page__current' : 'page'}
                    onClick={()=>setPage(p)}
                >{p}</MyButton>
            )}
        </div>
    );
}

export default App;
