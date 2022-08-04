import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-{1240px} mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio molestiae inventore deleniti pariatur. Eos dolores iusto reprehenderit odio?
            </p>
            <div className='flex md:w-[75%] justify-between my-6'>
                <FaInstagram size={30} />
                <FaFacebookSquare size={30} />
                <FaTwitterSquare size={30} />
                <FaGithubSquare size={30} />
                <FaDribbbleSquare size={30}/>
            </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
            <div>
                <h6  className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>

            <div>
                <h6  className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>pricing</li>
                    <li className='py-2 text-sm'>documentation</li>
                    <li className='py-2 text-sm'>guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul>
            </div>

            <div>
                <h6  className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blogs</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>

            <div>
                <h6  className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>claim</li>
                    <li className='py-2 text-sm'>policy</li>
                    <li className='py-2 text-sm'>terms</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Footer