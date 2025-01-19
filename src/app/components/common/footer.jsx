import { Copyright } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='px-20 pt-16 pb-4 flex flex-col'>
            <div className='flex text-lg'>
                <p className='flex-[8] text-xl'>Wishop is the leading creative partner to startups and new ventures</p>
                <div className='flex flex-1'>
                    <ul className=''>
                        <li className=''>Work</li>
                        <li>Clients</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <ul>
                        <li>Careers</li>
                        <li>Contact</li>
                        <li>Team</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-end'>
                <div className='flex flex-col flex-[9]'>
                    <p className='text-[200px] leading-[250px]'>WI SHOP</p>
                    <div className='flex '>
                        <div className='flex-[3] flex gap-1'>
                            <Copyright />
                            <p>WiSHOP 2025</p>
                        </div>
                        <p className='flex-[4]'>Privacy Policy</p>
                    </div>
                </div>
                <div className='flex-[1]'>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    )
}

export default Footer