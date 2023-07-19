import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaGuilded} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo1.png'
import {Link} from 'react-scroll'

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='logo' style={{width: '50px'}} />
      </div>
      
        <ul className='hidden md:flex font-bold'>
            <li>
              <Link to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li>
            <Link to="skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li>
            <Link to="project" smooth={true} duration={500}>Projects</Link>
            </li>
            <li>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

    {/*3 lines*/ }
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>
      
    {/*opening 3 lines*/ }
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link> </li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link> </li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="project" smooth={true} duration={500}>Projects</Link></li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

    {/*Social icons*/ }
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/faizanjaved71/'> Linkedin <FaLinkedin size={30}/> 
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/ItsFaizan'> Github <FaGithub size={30}/> 
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='mailto:faizanjavid71@gmail.com'> Email <HiOutlineMail size={30}/> 
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1EhC2KLT3IFKm2XIlSA9oEN2G29pHnAU5/view?usp=sharing'> Resume   <BsFillPersonLinesFill size={30}/> 
                </a>
              </li>
            </ul>
        </div>
    </div>


  )
}
