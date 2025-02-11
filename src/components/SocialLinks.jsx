import React from 'react'
import {FaGithub,FaHackerrank,FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    const links=[
        {
            id:1,
            child:(
                <>LinkedIn <FaLinkedin size={24}/></>
            ),
            href: 'https://www.linkedin.com/in/sunil-kumar-pathakamuri/',
            style: 'rounded-tr-lg',
        },
        {
            id:2,
            child:(
                <>Github <FaGithub size={24}/></>
            ),
            href: 'https://github.com/sunil-7777',
        },
        {
            id:3,
            child:(
                <>Hackerrank <FaHackerrank size={24}/></>
            ),
            href: 'https://www.hackerrank.com/profile/sunil7777',
        },
        {
            id:4,
            child:(
                <>Resume <BsFillPersonLinesFill size={24}/></>
            ),
            href: 'https://drive.google.com/drive/folders/1tRIEd-JfYxWx6afMkfV1abl_bJq4kent?usp=sharing',
            style: 'rounded-br-lg',
            download: true,
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[40%] left-0 fixed'>
        <ul>
            {links.map(({id,child,href,style,download}) => (
                <li key={id} className={'flex justify-between items-center w-36 h-12 pl-4 pr-3 hover:rounded-lg hover:ml-[-10px] duration-300 bg-opacity-10 bg-gray-400 ml-[-100px]'+' '+style}>
                <a href={href} className='flex justify-between items-center w-full text-red-700' download={download} target='_blank' rel='noreferrer'>
                    {child}
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks