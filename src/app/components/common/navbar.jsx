import { Store } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
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
            <div className='text-center text-lg flex-1 bg-red-800 text-white duration-200 hover:border-red-800 border border-transparent hover:bg-white hover:text-red-800 hover:font-bold transition ease rounded-[5px] cursor-pointer'>
                <Link href="#contact" className='p-1'>Contact Us</Link>
            </div>
        </div>
    )
}

export default Navbar