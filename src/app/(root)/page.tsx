import { ModeToggle } from '@/components/custom/mode-toggle';
import RecentBlog from '@/components/custom/recent-blog';
import React from 'react';

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <ModeToggle />
            <RecentBlog />
            <RecentBlog />
            <a href="#_" className="relative mt-8 mb-8 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-black rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">Browse All Blogs</span>
                <span className="relative invisible">Browse All Blogs</span>
            </a>
        </div>
    )
}

export default Home;