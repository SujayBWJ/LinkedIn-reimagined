
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LeftSidebar = () => {
  const [showLibrary, setShowLibrary] = useState(true);

  return (
    <aside className="w-full md:w-64 flex-shrink-0 space-y-4">
      {/* Profile Card */}
      <div className="linkedin-card overflow-hidden">
        <div className="h-16 bg-gradient-to-r from-linkedin-blue to-linkedin-lightBlue"></div>
        <div className="p-4 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 border-4 border-white dark:border-linkedin-darkGrey rounded-full">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="John Doe" />
              <AvatarFallback className="bg-linkedin-blue text-white">JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-8 text-center">
            <h3 className="font-semibold text-lg">John Doe</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Software Engineer at Tech Company
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Profile views</span>
              <span className="font-medium text-linkedin-blue dark:text-linkedin-lightBlue">324</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-gray-500 dark:text-gray-400">Post impressions</span>
              <span className="font-medium text-linkedin-blue dark:text-linkedin-lightBlue">1,892</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Library Card */}
      <div className="linkedin-card">
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-medium text-md">Library</h3>
          <button 
            onClick={() => setShowLibrary(!showLibrary)} 
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            {showLibrary ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
        
        {showLibrary && (
          <div className="p-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="saved">
                <AccordionTrigger className="py-2 text-sm">
                  <div className="flex items-center">
                    <Bookmark className="h-4 w-4 mr-2" />
                    <span>Saved Posts</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pl-6">
                    <li className="text-sm text-gray-600 dark:text-gray-400">
                      <Link to="/saved/articles" className="hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">Articles</Link>
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-400">
                      <Link to="/saved/jobs" className="hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">Jobs</Link>
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-400">
                      <Link to="/saved/companies" className="hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">Companies</Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="content">
                <AccordionTrigger className="py-2 text-sm">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>Your Content</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pl-6">
                    <li className="text-sm text-gray-600 dark:text-gray-400">
                      <Link to="/content/posts" className="hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">Posts</Link>
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-400">
                      <Link to="/content/articles" className="hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">Articles</Link>
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-400">
                      <Link to="/content/analytics" className="hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">Analytics</Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
        
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/40 text-center">
          <Link to="/my-items" className="text-sm font-medium text-linkedin-blue dark:text-linkedin-lightBlue hover:underline">
            View all items
          </Link>
        </div>
      </div>
      
      {/* Followed Hashtags */}
      <div className="linkedin-card p-4 hidden lg:block">
        <h3 className="font-medium text-md mb-2">Followed Hashtags</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/hashtag/programming" className="text-sm text-linkedin-blue dark:text-linkedin-lightBlue hover:underline">#programming</Link>
          </li>
          <li>
            <Link to="/hashtag/webdevelopment" className="text-sm text-linkedin-blue dark:text-linkedin-lightBlue hover:underline">#webdevelopment</Link>
          </li>
          <li>
            <Link to="/hashtag/technology" className="text-sm text-linkedin-blue dark:text-linkedin-lightBlue hover:underline">#technology</Link>
          </li>
          <li>
            <Link to="/hashtag/artificialintelligence" className="text-sm text-linkedin-blue dark:text-linkedin-lightBlue hover:underline">#artificialintelligence</Link>
          </li>
          <li>
            <Link to="/hashtag/career" className="text-sm text-linkedin-blue dark:text-linkedin-lightBlue hover:underline">#career</Link>
          </li>
        </ul>
        
        <Link to="/hashtags" className="text-sm text-linkedin-blue dark:text-linkedin-lightBlue hover:underline block mt-3">
          See all hashtags
        </Link>
      </div>
    </aside>
  );
};

export default LeftSidebar;
