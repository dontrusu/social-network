import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import NewPost from "./NewPost/NewPost"
import { useState } from "react"

let postData = [
    {text: "I WANT MY HANDS BACK!", id: 8},
    {text: "Please don't leave the site.. When no one's here.. It gets dark...", id: 7},
    {text: "Please don't reload, I'll DIE!", id: 6},
    {text: "Oil can", id: 5},
    {text: "Your mouse cursor tickles.", id: 4},
    {text: "I'm the best robot here.", id: 3},
    {text: "I'm different!", id: 2},
    {text: "I'm not grumpy, I'm just drawn that way.", id: 1},
]

const MyPosts = props => {

    const [data, setData] = useState(postData)

    const adNewPost = (newPost) => {
        setData([newPost, ...data])
    }

    return(
        <div className={s.myPosts}>
            <div>
                <NewPost adNewPost={adNewPost} />
            </div>
            <div>
                {data.map(post => <Post key={post.id} data={post} />)}
            </div>
        </div>
    )
}

export default MyPosts