import { useState } from 'react';
import Logo from '../assets/CodeSandbox.svg';
import { NavLink } from 'react-router-dom'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#1B0C4D] py-4 px-32 flex justify-between items-center">
            {/* Logo section */}
            <div className="flex items-center space-x-2">
                <img src={Logo} alt="CodeLearn Logo" className="h-8 w-8" />
                <span className="text-white text-2xl font-semibold">CodeLearn</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? 'text-[#EAE34A]' : 'text-white hover:text-[#EAE34A]'} 
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/course" 
                    className={({ isActive }) => isActive ? 'text-[#EAE34A]' : 'text-white hover:text-[#EAE34A]'} 
                >
                    Course
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? 'text-[#EAE34A]' : 'text-white hover:text-[#EAE34A]'}
                >
                    About us
                </NavLink>
                <NavLink 
                    to="/pricing" 
                    className={({ isActive }) => isActive ? 'text-[#EAE34A]' : 'text-white hover:text-[#EAE34A]'}
                >
                    Pricing
                </NavLink>
                <NavLink 
                    to="/contact" 
                    className={({ isActive }) => isActive ? 'text-[#EAE34A]' : 'text-white hover:text-[#EAE34A]'}
                >
                    Contact
                </NavLink>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex space-x-4">
                <button  className="bg-[#EAE34A] text-[#37266F] font-semibold py-3 px-5 rounded hover:bg-yellow-500">
                    Login
                </button>
                <button  className="bg-[#37266F] text-white font-semibold py-3 px-5 rounded hover:bg-indigo-700">
                    Sign up
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-4 mt-4">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? 'text-[#EAE34A]' : 'text-white hover:text-[#EAE34A]'}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/course" 
                        className={({ isActive }) => isActive ? 'text-[#EAE34A]' : 'text-white hover:text-[#EAE34A]'}
                    >
                        Course
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => isActive ? 'text-[#EAE34A]' : 'text-white hover:text-[#EAE34A]'}
                    >
                        About us
                    </NavLink>
                    <NavLink 
                        to="/pricing" 
                        className={({ isActive }) => isActive ? 'text-[#EAE34A]' : 'text-white hover:text-[#EAE34A]'}
                    >
                        Pricing
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => isActive ? 'text-[#EAE34A]' : 'text-white hover:text-[#EAE34A]'}
                    >
                        Contact
                    </NavLink>
                    <button  className="bg-[#EAE34A] text-[#37266F] font-semibold py-3 px-5 rounded hover:bg-yellow-500">
                        Login
                    </button>
                    <button  className="bg-[#37266F] text-white font-semibold py-3 px-5 rounded hover:bg-indigo-700">
                        Sign up
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
