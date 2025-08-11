import React from 'react';
import Logo from './Logo';
import XIcon from '../icons/XIcon';
import BarChartIcon from '../icons/BarChartIcon';
import UsersIcon from '../icons/UsersIcon';
import TargetIcon from '../icons/TargetIcon';
import TrendingUpIcon from '../icons/TrendingUpIcon';
import MapIcon from '../icons/MapIcon';
import FileTextIcon from '../icons/FileTextIcon';
import SunIcon from '../icons/SunIcon';
import DollarSignIcon from '../icons/DollarSignIcon';
import CalendarIcon from '../icons/CalendarIcon';
import TvIcon from '../icons/TvIcon';
import MicIcon from '../icons/MicIcon';
import LineChartIcon from "../icons/LineChartIcon";

// NavData: Centralized configuration for sidebar items
const navData = {
  'Campaign Manager': [
    { name: 'Main Dashboard', icon: <BarChartIcon /> },
    { name: 'Budget Tracker', icon: <DollarSignIcon /> },
    { name: 'Competitor Analysis', icon: <UsersIcon /> },
    { name: 'Event Management', icon: <CalendarIcon /> },
    { name: 'Ad Campaign Performance', icon: <TrendingUpIcon /> },
  ],
  'Data Analyst': [
    { name: 'Main Dashboard', icon: <BarChartIcon /> },
    { name: 'Data Pipeline', icon: <LineChartIcon /> },
    { name: 'Model Performance', icon: <TrendingUpIcon /> },
    // { name: 'Geospatial Analysis', icon: <MapIcon /> },
  ],
  'Candidate': [
    { name: 'Main Dashboard', icon: <BarChartIcon /> },
    { name: 'Daily Briefing', icon: <SunIcon /> },
    { name: 'Speeches & Talking Points', icon: <MicIcon /> },
    // { name: 'Media Appearances', icon: <TvIcon /> },
  ],
  'Field Organizer': [
    { name: 'Main Dashboard', icon: <BarChartIcon /> },
    { name: 'Volunteer Management', icon: <UsersIcon /> },
    { name: 'GOTV Dashboard', icon: <TargetIcon /> },
    // { name: 'Canvassing Maps', icon: <MapIcon /> },
  ],
  'Communications Director': [
    { name: 'Main Dashboard', icon: <BarChartIcon /> },
    { name: 'Press Releases', icon: <FileTextIcon /> },
    { name: 'Social Media Planner', icon: <CalendarIcon /> },
    // { name: 'Sentiment Monitoring', icon: <TrendingUpIcon /> },
  ],
};

const DashboardSidebar = ({ userRole, activeScreen, setActiveScreen, isOpen, setIsOpen }) => {
  const navItems = navData[userRole] || [];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white dark:bg-cardDark text-gray-800 dark:text-gray-200">
      {/* Centered Logo */}
      <div className="flex justify-center items-center py-6 relative">
        <Logo />
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 md:hidden p-2 text-black-400 hover:text-black dark:text-black-500 dark:hover:text-black transition-colors"
          aria-label="Close sidebar"
        >
          <XIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2 overflow-y-auto flex-1">
        {navItems.map(item => {
          const isActive = item.name === activeScreen;
          return (
            <button
              key={item.name}
              onClick={() => { setActiveScreen(item.name); setIsOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors text-left
                ${isActive
                  ? 'bg-primaryAccent text-black shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-black hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className={`w-6 h-6 flex-shrink-0 ${isActive ? 'text-black' : 'text-primaryAccent'}`}>
                {item.icon}
              </div>
              <span className="flex-grow">{item.name}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 shadow-lg z-50 transform transition-transform duration-300 md:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {sidebarContent}
      </aside>

      {/* Desktop Sidebar */}
      <aside className="w-64 hidden md:flex flex-col flex-shrink-0">
        {sidebarContent}
      </aside>
    </>
  );
};

export default DashboardSidebar;