
import React, { useState, useEffect } from 'react';

// Page imports
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
// import "./App.css"

// You may need to adjust the import paths if your structure changes

export default function App() {
    const [page, setPage] = useState('landing'); // 'landing', 'login', 'dashboard'
    const [userRole, setUserRole] = useState(null);
    
    const [darkMode, setDarkMode] = useState(false); // Default to light mode

    const user = {
        name: userRole ? userRole.split(' ')[0] : 'Guest',
        email: userRole ? `${userRole.split(' ')[0].toLowerCase()}@lxn.app` : '',
    };


    useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');  // add 'dark' class on <html>
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

// return (
//     <div>
//       {/* Your app content */}
//       <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
//     </div>
//   );
    
    // useEffect(() => {
    //     document.documentElement.classList.toggle('dark', darkMode);
    // }, [darkMode]);


    const renderPage = () => {
        switch (page) {
            case 'login':
                return <LoginPage setPage={setPage} setUserRole={setUserRole} />;
            case 'dashboard':
                return <Dashboard userRole={userRole} setPage={setPage} user={user} darkMode={darkMode} setDarkMode={setDarkMode} />;
            case 'landing':
            default:
                return <LandingPage setPage={setPage} />;
        }
    };

    return <div className="antialiased">{renderPage()}</div>;
}