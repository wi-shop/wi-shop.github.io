"use client"
import { Store, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useTheme } from '@/app/context/ThemeProvider'

const Navbar = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className='p-8 px-20 flex items-center'>
            <div className='flex flex-1 gap-1 mr-10 cursor-pointer'>
                <Store />
                <p className='text-xl'>WiSHOP</p>
            </div>
            <div className='flex text-lg flex-[8] gap-8 *:cursor-pointer'>
                <p>Products</p>
                <p>Solutions</p>
                <p>Portfolio</p>
                <p>Use Cases</p>
                <p>About</p>
            </div>
            <div className='flex gap-4 items-center'>
                <button
                    onClick={toggleTheme}
                    className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200'
                    aria-label='Toggle theme'
                >
                    {theme === 'dark' ? (
                        <Sun className='w-5 h-5' />
                    ) : (
                        <Moon className='w-5 h-5' />
                    )}
                </button>
                <div className='text-center text-lg bg-red-800 text-white duration-200 hover:border-red-800 border border-transparent hover:bg-white hover:text-red-800 transition ease rounded-[5px] cursor-pointer p-3 px-6'>
                    <Link href="#contact" className=''>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar