import React from 'react'
import CreatePost from '../components/CreatePost'
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'

async function Page() {


const posts = await getDocs(collection(db, "posts"))

  return (
    <div>
        <div>
            <CreatePost/>
        </div>

        <ul>
          {posts.docs.map(p => <li>{p.data().post}</li>)}
        </ul>
    </div>
  )
}

export default Page
