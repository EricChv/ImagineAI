'use client';
import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') setDarkMode(true) 
        }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <div className='relative w-14 h-6 flex items-center
        dark:bg-medium bg-[#dfe0e1] cursor-pointer rounded-full p-1'
        onClick={() => setDarkMode(!darkMode)}
        >
            <FaMoon className='text-white size' size={13} />
            <div className='absolute bg-white dark:bg-[#22272B] w-6 h-6 rounded-full shadow-md
            transform transition-transform duration-300'
            style={darkMode ? {left: '2px'} : {right: '2px'}}
            ></div>
            <BsSunFill className='ml-auto text-yellow-400' size={13} />
        </div>
    )
}

export default ThemeToggle