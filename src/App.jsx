import React, { useEffect, useState } from 'react';
import './index.css'; // make sure this is here
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import Routing from './components/Routing';

const App = () => {
  const themeMode = JSON.parse(localStorage.getItem('darkTheme'))
  const [darkTheme, setDarkTheme] = useState(themeMode || false);
  useEffect(()=>{
    localStorage.setItem('darkTheme', JSON.stringify(darkTheme))

  },[darkTheme])

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkThem={darkTheme} setDarkTheme={setDarkTheme}/>
        <Routing />
        <Footer />
      
      </div>
    </div>

  );
};

export default App;
