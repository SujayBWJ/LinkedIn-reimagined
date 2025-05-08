
import React from 'react';
import NavBar from '../components/NavBar';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Feed from '../components/Feed';

const Index = () => {
  return (
    <div className="min-h-screen bg-linkedin-lightGrey dark:bg-linkedin-darkGrey">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/4 order-2 lg:order-1">
            <LeftSidebar />
          </div>
          
          {/* Main Content */}
          <div className="w-full lg:w-2/4 order-1 lg:order-2">
            <Feed />
          </div>
          
          {/* Right Sidebar */}
          <div className="w-full lg:w-1/4 order-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
