import RecentBlog from '@/components/custom/recent-blog';
import { blogData } from '@/data/blog';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

const Home = () => {

    return (
        <div className='flex flex-col items-center justify-center bg-white dark:bg-gray-900 '>
            <div className="relative isolate px-6 min-w-fit mt-36 mb-10 lg:px-24">
                <div className=' relative flex flex-col items-center'>
                    <div className='z-10 -top-16 absolute bg-white '>
                        <h1 className='text-center border-[7px] text-7xl font-medium text-gray-8 p-4 font-Orbitron border-black'>BINARY BARD</h1>
                    </div>
                    <Image src='/background.jpg' alt='' width={1300} height={400} />
                </div>
            </div>
            <div className="container px-6 py-8 mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">Browse Recent Blogs</h1>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <RecentBlog data={blogData} />
            <Link href="/post" className="relative mt-8 mb-8 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-black rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">Browse All Blogs</span>
                <span className="relative invisible">Browse All Blogs</span>
            </Link>

            <div className='w-[85%] mx-auto px-16'>
                <div className='flex justify-between items-center m-4'>
                    <p className='text-3xl font-semibold'>Top Authors</p>
                    <Link href="/author" className='flex justify-center items-center gap-2 text-md'>
                        all authors
                        <span><MdArrowOutward /></span>
                    </Link>
                </div>
                <hr className="rounded-full border" />
                <div className='pb-24 flex flex-wrap justify-center items-center w-full my-8 gap-8'>
                    {
                        [1, 2, 3].map(item => (
                            <Link href="/author/34" key={item} className="flex flex-col lg:flex-row justify-center items-center gap-8 px-6 py-4 border border-gray-300 cursor-pointer bg-gray-50 hover:bg-white hover:shadow-xl rounded-2xl transform transition-transform duration-100 hover:-translate-y-2">
                                <Image height={100} width={100} className="object-cover rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                <div className='flex flex-col justify-center mr-6'>
                                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">John Doe</h1>
                                    <p className="text-gray-500 dark:text-gray-300">Design Director</p>
                                    <p className="text-gray-500 dark:text-gray-300">03 published post</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;