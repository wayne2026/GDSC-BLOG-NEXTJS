"use client";

import React from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import Image from 'next/image';

const RecentBlog = ({ data }: RecentBlogProps) => {
    return (
        <section className="bg-white dark:bg-gray-900 w-full my-8">
            <div className="container w-[85%] px-2 md:px-6 lg:px-16 py-10 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {data.map((item, index) => (
                        <div className='group' key={index}>
                            <Image width={500} height={500} className="object-cover object-center w-full rounded-lg h-72 transition-transform duration-300 transform group-hover:scale-105" src={item.image} alt={item.author.name} />
                            <div className="mt-8">
                                <div className="group text-gray-800 transition-all duration-300 ease-in-out">
                                    <span className="bg-left-bottom bottom-[-2px] text-xl font-semibold bg-gradient-to-r from-purple-300 to-purple-300 bg-[length:0%_12px] bg-no-repeat group-hover:bg-[length:100%_11px] transition-all duration-500 ease-out">
                                        {item.heading}
                                    </span>
                                </div>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    {item.content}
                                </p>
                                <div className="flex items-center mt-4">
                                    <div className='flex items-center justify-evenly space-x-2'>
                                        <Avatar className='h-8 w-8'>
                                            <AvatarImage src={item.author.avatar} alt={item.author.name} />
                                            <AvatarFallback>{item.author.name.split(' ').map(word => word[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <p className="text-md text-gray-600 dark:text-gray-400">{item.author.name}</p>
                                        <p className="text-md text-gray-600 dark:text-gray-400">•</p>
                                        <p className="text-md text-gray-600 dark:text-gray-400">{item.createdAt}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecentBlog