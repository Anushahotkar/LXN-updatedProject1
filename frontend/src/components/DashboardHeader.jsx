

import React from 'react';
import MenuIcon from '../icons/MenuIcon';
import ThemeToggle from './ThemeToggle';
import UserMenu from './UserMenu';

const DashboardHeader = ({
  userRole,
  setPage,
  user,
  darkMode,
  setDarkMode,
  toggleSidebar,
}) => {
  return (
    <header className="bg-white dark:bg-cardDark p-4 flex justify-between items-center border-b border-borderLight dark:border-borderDark sticky top-0 z-30 shadow-sm">
      <div className="flex items-center min-w-0 space-x-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle sidebar"
        >
          <MenuIcon className="w-6 h-6 text-textDark dark:text-textLight" />
        </button>

        <div className="flex flex-col min-w-0">
          <h1 className="text-2xl font-extrabold text-textDark dark:text-textLight truncate">
            LXN Intelligence
          </h1>

          <p className="text-xs text-textMuted dark:text-textMuted mt-1 truncate max-w-xs">
            {userRole} Dashboard
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        <UserMenu user={user} setPage={setPage} />
      </div>
    </header>
  );
};

export default DashboardHeader;
