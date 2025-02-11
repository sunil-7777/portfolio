import React from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  
  const [nav,setNav]=useState(false);

  const links=[
    {
      id:1,
      link:'home'
    },
    {
      id:2,
      link:'about'
    },
    {
      id:3,
      link:'skills'
    },
    {
      id:4,
      link:'projects'
    },
    {
      id:5,
      link:'contact'
    },
  ]


  return (
    <div className='flex justify-between items-center w-full h-20 px-6 bg-black bg-opacity-80 text-white fixed z-[100] '>
      <div>
        <Link to='home' smooth duration={500}><h1 className='cursor-pointer text-4xl font-StrangerThings ml-2 text-red-700'>Sunil kumaR</h1></Link>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({id,link})=>(
          <li key={id} className='px-6 cursor-pointer capitalize text-md text-white font-semibold hover:scale-105 hover:text-red-700 duration-200'><Link to={link} smooth duration={500}>{link}</Link></li>
        ))}
      </ul>

      <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'>
        {nav? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-bl from-black to-red-950 text-white'>
          {links.map(({id,link})=>(
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link to={link} smooth duration={500} onClick={()=>setNav(!nav)}>{link}</Link></li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Navbar