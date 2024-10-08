import React,{useEffect,useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'



function Home() {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    
    if(posts.length === 0){
        return(
            
            <div className="w-full py-3 mt-4 text-center">
                <h1 className='text-4xl pb-2 font-bold' >Home1</h1>
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-3'>
            <h1 className='text-4xl pb-2 font-bold' >Home</h1>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
