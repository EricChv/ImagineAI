import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center 
      bg-white sm:px-8 px-4 py-3 border-b border-b-[#e6ebf4]
      dark:bg-dark dark:border-medium">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain
          dark:invert" />
        </Link>

        <div className='flex items-center'>
          <Link to="/create-post" className="font-inter font-medium text-[#222328] px-4 py-2 mr-4
          dark:text-white"
          >Create</Link>
          <ThemeToggle />
        </div>

      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-65px)]
      dark:bg-dark">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} /> 
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
