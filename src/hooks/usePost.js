import {useMemo} from "react";

export const useSortedPost = (posts, sort) => {
    return useMemo(() =>{
        if(sort){
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    },[sort, posts])
}

export const useSortedAndSearchPost = (post, sort, query) => {
    const sortedPost = useSortedPost(post, sort)
    return useMemo(() =>{
        return sortedPost.filter(p => p.title.includes(query))
    },[query, sortedPost])
}