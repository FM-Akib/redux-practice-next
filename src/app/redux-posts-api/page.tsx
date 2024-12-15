"use client";
import { fetchPosts } from '@/redux/slices/posts/postsSlice';
import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Post {
    id: number;
    title: string;
    body: string;
}
const Page = () => {
    const {posts,isLoading, isError,error} = useSelector((state: { posts: { posts: Post[];
         isLoading: boolean; isError: boolean; error: string; } }) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    
    let content;
    if(isLoading){
        content = <p>Loading...</p>;
    }
    if(!isLoading && isError){
        content = <p>{error}</p>;
    }
    if(!isLoading && !isError && posts.length === 0){
        content = <p>No posts available</p>;
    }
    if(!isLoading && !isError && posts.length > 0){
        content = posts.map((post: Post, i: number) => (
            <div key={post.id} className='bg-white p-4 mb-4'>
            <h3>{i + 1} - {post.title}</h3>
            <p>{post.body}</p>
            </div>
        ));
    }

    return (
        <div className='max-w-5xl mx-auto p-4 bg-gray-100'>
            <p className='text-center font-semibold text-xl py-10'>All Posts Come from jsonplaceholder using async thunk of redux</p>
            {content}
        </div>
    );
};

export default Page;