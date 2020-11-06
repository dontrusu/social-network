import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import NewPost from "./NewPost/NewPost"

const MyPosts = props => {

    let { posts, addPost } = props

    return(
        <div className={s.myPosts}>
            <div>
                <NewPost adNewPost={addPost} />
            </div>
            <div>
                {posts.map(post => <Post key={post.id} data={post} />)}
            </div>
        </div>
    )
}

export default MyPosts