import React from 'react';
import logo from '../../public/images/logo.png'
import Image from 'next/image';
import { LinkList } from './NavList';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const router = useRouter();

  const isLinkActive = (path) => {
    if (path === '/') {
      return router.pathname === path;
    } else if (path === '/' || router.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-gray-50 px-5 md:px-0 fixed md:py-2 left-0 right-0 top-0 z-10 shadow-lg'>
      <div className='container flex justify-between items-center mx-auto'>
        <div className='logo'>
          <Link href='/'>
            <Image src={logo} className='' alt='Logo' />
          </Link>
        </div>

        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='text-black'>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className='hidden lg:flex font-syne items-center'>
          {/* Desktop navigation */}
          <div className='link flex mr-10 items-center text-black'>
            {LinkList.map((link, id) => (
              <ul key={id} className='mx-[10px]'>
                <li className={` ${
                  isLinkActive(link.path) ? 'text-primary' : 'text-black'
                }  cursor-pointer text-[16px] font-medium`}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              </ul>
            ))}
          </div>

          <Link href='/signup'>
            <button className='border-[#060489] border-[2px] rounded-br-lg text-[16px] rounded-tl-lg py-1 text-primary px-10 font-medium'>
              Sign up
            </button>
          </Link>

          <Link href='/login'>
            <button className='border-[#060489] border-[1px] rounded-br-lg rounded-tl-lg text-[16px] py-1 text-white bg-primary ml-[20px] px-10 font-medium'>
              Login
            </button>
          </Link>
        </div>

        {isMenuOpen && (
          <div className='lg:hidden absolute  shadow-lg w-full top-16 left-0  right-0 bg-gray-50 p-4'>
            {/* Mobile navigation */}
            {LinkList.map((link, id) => (
              <div key={id} className='my-2 w-full text-center border border-slate-200 bg-[aliceblue]'>
                <Link className='text-[16px] font-medium text-black' href={link.path}>
                  {link.name}
                </Link>
              </div>
            ))}
            <div className='my-2 w-full text-center'>
              <Link className=' w-full' href='/signup'>
              <button className=' w-full border-[#060489] border-[2px] rounded-br-lg text-[16px] rounded-tl-lg py-1 text-primary px-10 font-medium'>
              Sign up
            </button>
              </Link>
            </div>
            <div className='my-2 w-full text-center mt-2'>
              <Link className=' w-full' href='/login'>
              <button className=' w-full border-[#060489] border-[1px] rounded-br-lg rounded-tl-lg text-[16px] py-1 text-white bg-primary px-10 font-medium'>
              Login
            </button>
                
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
