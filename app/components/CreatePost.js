'use client'

import { useState } from "react"

function CreatePost() {

    const [post, setPost] = useState("")
  return (
    <div>
    <h1 className="font-bold text-x-l">CreatePost</h1>
    <form>
        <textarea 
        onChange={(e) => setPost(e.target.value)}
        className="border border-black w-[400px] h-[80px] resize-none"/>
        <br/>
        <button className="p-3 bg-blue-600 text-white w-full">Post</button>
    </form>

    </div>
  )
}

export default CreatePost