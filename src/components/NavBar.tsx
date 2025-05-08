
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Home, Search, Users, Briefcase, User, LogOut, Settings, Moon, Sun, DollarSign } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavBar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white dark:bg-linkedin-darkGrey border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-linkedin-blue">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </Link>
            
            <div className="relative ml-4 md:ml-6 flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-linkedin-blue focus:border-transparent"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`flex flex-col items-center px-3 py-2 text-sm font-medium ${isActive('/') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : 'text-gray-500 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue'}`}
            >
              <Home className={`h-6 w-6 ${isActive('/') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : ''}`} />
              <span>Home</span>
            </Link>
            <Link 
              to="/network" 
              className={`flex flex-col items-center px-3 py-2 text-sm font-medium ${isActive('/network') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : 'text-gray-500 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue'}`}
            >
              <Users className={`h-6 w-6 ${isActive('/network') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : ''}`} />
              <span>Network</span>
            </Link>
            <Link 
              to="/jobs" 
              className={`flex flex-col items-center px-3 py-2 text-sm font-medium ${isActive('/jobs') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : 'text-gray-500 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue'}`}
            >
              <Briefcase className={`h-6 w-6 ${isActive('/jobs') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : ''}`} />
              <span>Jobs</span>
            </Link>
            <Link 
              to="/your-space" 
              className={`flex flex-col items-center px-3 py-2 text-sm font-medium ${isActive('/your-space') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : 'text-gray-500 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue'}`}
            >
              <User className={`h-6 w-6 ${isActive('/your-space') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : ''}`} />
              <span>Your Space</span>
            </Link>
            <Link 
              to="/salaries" 
              className={`flex flex-col items-center px-3 py-2 text-sm font-medium ${isActive('/salaries') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : 'text-gray-500 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue'}`}
            >
              <DollarSign className={`h-6 w-6 ${isActive('/salaries') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : ''}`} />
              <span>Salaries</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/notifications" 
              className={`relative p-1 rounded-full ${isActive('/notifications') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : 'text-gray-500 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue'}`}
            >
              <span className="sr-only">Notifications</span>
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="John Doe" />
                    <AvatarFallback className="bg-linkedin-blue text-white">JD</AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="p-2">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="John Doe" />
                      <AvatarFallback className="bg-linkedin-blue text-white">JD</AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Software Engineer</p>
                    </div>
                  </div>
                  <Link to="/profile" className="mt-2 w-full text-center text-sm text-linkedin-blue dark:text-linkedin-lightBlue font-medium block hover:underline">
                    View Profile
                  </Link>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/profile" className="flex items-center w-full">
                    <User className="mr-2 h-4 w-4" />
                    <span>View Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings" className="flex items-center w-full">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={toggleDarkMode}>
                  <div className="flex items-center w-full">
                    {isDarkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                    <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className="flex items-center text-red-500 w-full">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="sm:hidden border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-between px-2">
          <Link 
            to="/" 
            className={`flex flex-col items-center pt-2 pb-1 flex-1 text-xs font-medium ${isActive('/') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : 'text-gray-500 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue'}`}
          >
            <Home className={`h-6 w-6 ${isActive('/') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : ''}`} />
            <span>Home</span>
          </Link>
          <Link 
            to="/network" 
            className={`flex flex-col items-center pt-2 pb-1 flex-1 text-xs font-medium ${isActive('/network') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : 'text-gray-500 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue'}`}
          >
            <Users className={`h-6 w-6 ${isActive('/network') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : ''}`} />
            <span>Network</span>
          </Link>
          <Link 
            to="/jobs" 
            className={`flex flex-col items-center pt-2 pb-1 flex-1 text-xs font-medium ${isActive('/jobs') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : 'text-gray-500 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue'}`}
          >
            <Briefcase className={`h-6 w-6 ${isActive('/jobs') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : ''}`} />
            <span>Jobs</span>
          </Link>
          <Link 
            to="/your-space" 
            className={`flex flex-col items-center pt-2 pb-1 flex-1 text-xs font-medium ${isActive('/your-space') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : 'text-gray-500 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue'}`}
          >
            <User className={`h-6 w-6 ${isActive('/your-space') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : ''}`} />
            <span>Your Space</span>
          </Link>
          <Link 
            to="/salaries" 
            className={`flex flex-col items-center pt-2 pb-1 flex-1 text-xs font-medium ${isActive('/salaries') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : 'text-gray-500 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue'}`}
          >
            <DollarSign className={`h-6 w-6 ${isActive('/salaries') ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : ''}`} />
            <span>Salaries</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
