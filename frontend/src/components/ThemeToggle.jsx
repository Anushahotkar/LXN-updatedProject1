import React from 'react';
import SunIcon from '../icons/SunIcon';
import MoonIcon from '../icons/MoonIcon';

const ThemeToggle = ({ darkMode, setDarkMode }) => (
<button
  onClick={() => setDarkMode(!darkMode)}
  className={`p-2 rounded-full transition-colors theme-toggle-btn ${
    darkMode
      ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  }`}
>
  {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
</button>
);

export default ThemeToggle;
