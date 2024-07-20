import React from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { HeartIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';

const RecentBlog = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container w-[88%] px-2 md:px-6 lg:px-16 py-10 mx-auto">

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

                    <div className='group'>
                        <img className="object-cover object-center w-full rounded-lg h-72 transition-transform duration-300 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                        <div className="mt-8">
                            <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white underline-animation z-10">
                                What do you want know about UI
                            </h1>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores ve...
                            </p>
                            <div className="flex items-center justify-between mt-4">
                                <div className='flex items-center justify-evenly space-x-2'>
                                    <Avatar className='h-8 w-8'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <p className="text-md text-gray-600 dark:text-gray-400">John Snow</p>

                                    <p className="text-md text-gray-600 dark:text-gray-400">•</p>

                                    <p className="text-md text-gray-600 dark:text-gray-400">Feb 1, 2022</p>
                                </div>
                                <Button variant="ghost">
                                    <HeartIcon className='h-6 w-6' />
                                    <span className='px-2'>12</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className='group'>
                        <img className="object-cover object-center w-full h-72 rounded-lg transition-transform duration-300 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className="mt-8">

                            <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white underline-animation z-10">All the features you want to know</h1>

                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores ve...
                            </p>

                            <div className="flex items-center justify-between mt-4">
                                <div className='flex items-center justify-evenly space-x-2'>
                                    <Avatar className='h-8 w-8'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <p className="text-md text-gray-600 dark:text-gray-400">John Snow</p>

                                    <p className="text-md text-gray-600 dark:text-gray-400">•</p>

                                    <p className="text-md text-gray-600 dark:text-gray-400">Feb 1, 2022</p>
                                </div>

                                <Button variant="ghost">
                                    <HeartIcon className='h-6 w-6' />
                                    <span className='px-2'>12</span>
                                </Button>
                            </div>

                        </div>
                    </div>

                    <div className='group'>
                        <img className="object-cover object-center w-full h-72 rounded-lg transition-transform duration-300 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />

                        <div className="mt-8">

                            <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white underline-animation z-10">
                                Which services you get Meraki UI
                            </h1>

                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel...
                            </p>

                            <div className="flex items-center justify-between mt-4">
                                <div className='flex items-center justify-evenly space-x-2'>
                                    <Avatar className='h-8 w-8'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <p className="text-md text-gray-600 dark:text-gray-400">John Snow</p>

                                    <p className="text-md text-gray-600 dark:text-gray-400">•</p>

                                    <p className="text-md text-gray-600 dark:text-gray-400">Feb 1, 2022</p>
                                </div>

                                <Button variant="ghost">
                                    <HeartIcon className='h-6 w-6' />
                                    <span className='px-2'>12</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecentBlog