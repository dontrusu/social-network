import React from "react"
import MyPosts from "../components/Profile/MyPosts/MyPosts"
import { addPost } from "../actions/myPostsActions"
import { useDispatch, useSelector } from "react-redux";

const MyPostsContainer = props => {

    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch();

    return(
        <MyPosts 
            posts={posts}
            addPost={(post) => dispatch(addPost(post))}
        />
    )
}

export default MyPostsContainer