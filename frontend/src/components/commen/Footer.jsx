import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandMeta } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import { FiPhoneCall } from 'react-icons/fi';


const Footer = () => {
  return (
    <footer className=' border-b px-10 py-15 ' >
        <div className='border-t border-white mb-15 '></div>
        {/* <div className="container mx-auto  grid grid-col-1 md:grid-cols-4 gap-15
        px-4 lg:px- lg:ml-3 r"> */}
        <div className="container mx-auto flex sm:justify-evenly flex-col sm:flex-row
        px-4 lg:px- lg:ml-3 gap-15 sm:gap-0">





            {/* <div>
                <h3 className='text-lg text-gray-200 font-bold mb-4 '>
                    Newsletter

                </h3>
                <p className='text-gray-300 mb-4'>Be the first to hear about new products , exclusive events , and online offer

                </p>
                <p className='font-medium text-sm text-gray-500 mb-6'>
                    Sign up and get 10% off your first order
                </p>
                <form action="" className='flex'>
                    <input type="email" placeholder='Enter your email'
                    className='p-3 w-full text-sm placeholder:text-gray-600 border-t border-r border-l border-b border-gray-200
                    rounded0l-md focus:outline-none focus:ring-2 focus:ring-gray-500 *:
                    transition-all' />
                    <button type='submit' className='bg-black text-white px-6 py-3 text-sm
                    rounded-r-md hover:bg-gray-200 hover:text-black transition-all'>Subscribe</button>
                </form>
            </div> */}
            {/* shop */}
            <div className='text-center '>
                <h3 className='text-lg text-gray-200 mb-4 font-bold'>
                    Shop
                </h3>
                <ul className='space-y-2 text-gray-500'>
                    <li>
                        <Link to="#" className='hover:text-gray-200 transition-colors'>
                        Peripherals</Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-gray-200 transition-colors'>
                        Audio</Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-gray-200 transition-colors'>
                        Displays </Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-gray-200 transition-colors'>
                        Aesthetics</Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-gray-200 transition-colors'>
                        Console </Link>
                    </li>

                </ul>
            </div>
            {/* support links */}
             <div className='text-center'>
                <h3 className='text-lg text-gray-200 mb-4 font-bold'>
                    Support
                </h3>
                <ul className='space-y-2 text-gray-500'>
                    <li>
                        <Link to="#" className='hover:text-gray-200 transition-colors'>
                        Contact Us</Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-gray-200 transition-colors'>
                        About Us</Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-gray-200 transition-colors'>
                        FAQs </Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-gray-200 transition-colors'>
                        Features</Link>
                    </li>
                  

                </ul>
            </div>
         {/* follow us  */}
         <div className='text-center'>
            <h3 className='text-lg text-gray-200 mb-4 font-bold'>
                Follow Us
            </h3>
            <div className="flex item-center mb-6 space-x-4 text-white justify-center">
                <a href="#" target="_blank" rel="noopener noreferrer"
                className='hover:text-gray-500 '>
                    <TbBrandMeta className='h-6 w-6 '/>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                className='hover:text-gray-500'>
                    <RiTwitterXLine className='h-6 w-6 '/>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                className='hover:text-gray-500'>
                    <IoLogoInstagram className='h-6 w-6 '/>
                </a>
            </div>
            <p className='text-gray-300'>
                Call Us
            </p>
            <p className='text-gray-600 '>
                <FiPhoneCall className='inline-block text-gray-300 mr-2'/>
                9745752486
            </p>
         </div>
        </div>
{/* footer bottom */}
<div className='container mx-auo mt-12 px-4 lg:px-0 border-t 
border-gray-200 pt-6
'>
<p className='text-gray-500 text-sm tracking-tighter  text-center'>2025, All rights Reserved.</p>
</div>
    </footer>
  )
}

export default Footer