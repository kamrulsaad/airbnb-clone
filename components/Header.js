import Image from 'next/image'
import React from 'react'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid"

const Header = () => {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

            {/* left */}

            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src="https://links.papareact.com/qd3" layout="fill" alt='' objectFit='contain'
                    objectPosition="left" />
            </div>

            {/* Search */}

            <div className='flex items-center md:border-2 md:shadow-sm rounded-full py-2 '>
                <input className='pl-5 text-gray-600 placeholder-gray-400 text-sm bg-transparent outline-none flex-grow' type="text" placeholder='Start your serach' />
                <SearchIcon className='h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:flex md:mx-2' />
            </div>

            {/* right  */}

            <div className='flex space-x-4 text-gray-500 items-center justify-end'>
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer'></GlobeAltIcon>
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <MenuIcon className='h-6 cursor-pointer'></MenuIcon>
                    <UserCircleIcon className='h-6 cursor-pointer'></UserCircleIcon>
                </div>
            </div>

        </header>
    )
}

export default Header