import React, { useState } from 'react';
import ChevronsUpDownIcon from '../icons/ChevronsUpDownIcon';
import LogOutIcon from '../icons/LogOutIcon';
const UserMenu = ({ user, setPage }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                <img src={`https://i.pravatar.cc/150?u=${user.name}`} alt="User" className="w-8 h-8 rounded-full" />
                <span className="hidden md:inline text-textDark dark:text-textLight">{user.name}</span>
                <ChevronsUpDownIcon className="w-4 h-4 text-textMuted" />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-cardDark rounded-md shadow-lg py-1 z-50">
                    <a href="#" className="block px-4 py-2 text-sm text-textDark dark:text-textLight hover:bg-lightBg dark:hover:bg-gray-700">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-textDark dark:text-textLight hover:bg-lightBg dark:hover:bg-gray-700">Settings</a>
                    <div className="border-t border-borderLight dark:border-borderDark my-1"></div>
                    <button onClick={() => setPage('login')} className="w-full text-left flex items-center px-4 py-2 text-sm text-pinkAccent hover:bg-lightBg dark:hover:bg-gray-700">
                        <LogOutIcon className="w-4 h-4 mr-2" />
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};
export default UserMenu;
