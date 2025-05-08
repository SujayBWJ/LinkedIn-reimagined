
import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Share2, Send, Image, Link2, Calendar, FileText, MoreHorizontal } from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Feed = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [postContent, setPostContent] = useState("");
  
  // Mock posts data
  const posts = [
    {
      id: 1,
      author: {
        name: "Emily Johnson",
        role: "Product Manager at Tech Solutions",
        avatar: "EJ"
      },
      content: "Excited to announce that we're launching our new product next month! Stay tuned for more details. #ProductLaunch #Innovation",
      image: null,
      time: "2h",
      likes: 248,
      comments: 45,
      type: "general"
    },
    {
      id: 2,
      author: {
        name: "Michael Chen",
        role: "Software Engineer at DevCorp",
        avatar: "MC"
      },
      content: "Just published a new article about optimizing React performance. Check it out if you're interested in frontend development!",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      time: "5h",
      likes: 186,
      comments: 23,
      type: "technical"
    },
    {
      id: 3,
      author: {
        name: "Recruiter Network",
        role: "Official LinkedIn Recruiting Page",
        avatar: "RN"
      },
      content: "We're looking for talented developers to join our team! Remote positions available. #JobOpening #TechJobs",
      image: null,
      time: "1d",
      likes: 432,
      comments: 78,
      type: "jobs"
    },
    {
      id: 4,
      author: {
        name: "Sarah Williams",
        role: "Career Coach",
        avatar: "SW"
      },
      content: "5 skills that will be essential for job seekers in 2025:\n\n1. AI & Machine Learning literacy\n2. Data Analysis\n3. Digital Communication\n4. Adaptability\n5. Critical Thinking\n\nWhich one are you focusing on developing?",
      image: null,
      time: "2d",
      likes: 892,
      comments: 156,
      type: "skills"
    }
  ];
  
  const filteredPosts = activeTab === "all" ? posts : posts.filter(post => post.type === activeTab);
  
  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Create Post */}
      <div className="linkedin-card p-4">
        <div className="flex items-start">
          <div className="h-10 w-10 rounded-full bg-linkedin-blue text-white flex items-center justify-center flex-shrink-0">
            <span>JD</span>
          </div>
          <div className="ml-3 flex-1">
            <textarea
              placeholder="What's on your mind?"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm bg-transparent focus:outline-none focus:border-linkedin-blue focus:ring-1 focus:ring-linkedin-blue"
              rows={3}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <div className="flex items-center justify-between mt-3">
              <div className="flex space-x-2">
                <button className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Image className="h-5 w-5 text-linkedin-blue" />
                </button>
                <button className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Link2 className="h-5 w-5 text-linkedin-blue" />
                </button>
                <button className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Calendar className="h-5 w-5 text-linkedin-blue" />
                </button>
                <button className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                  <FileText className="h-5 w-5 text-linkedin-blue" />
                </button>
              </div>
              <button 
                className={`py-1.5 px-3 rounded-full text-sm font-medium ${postContent ? 'bg-linkedin-blue hover:bg-linkedin-darkBlue text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed'}`}
                disabled={!postContent}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Filter Tabs */}
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full bg-white dark:bg-linkedin-darkGrey border border-gray-200 dark:border-gray-800 rounded-lg">
          <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
          <TabsTrigger value="general" className="flex-1">General</TabsTrigger>
          <TabsTrigger value="technical" className="flex-1">Technical</TabsTrigger>
          <TabsTrigger value="jobs" className="flex-1">Jobs</TabsTrigger>
          <TabsTrigger value="skills" className="flex-1">Skills</TabsTrigger>
        </TabsList>
      </Tabs>
      
      {/* Posts */}
      {filteredPosts.map((post) => (
        <div key={post.id} className="linkedin-card">
          <div className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-linkedin-blue text-white flex items-center justify-center">
                  <span className="font-medium">{post.author.avatar}</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-sm">{post.author.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{post.author.role}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{post.time}</p>
                </div>
              </div>
              <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <MoreHorizontal className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            
            <div className="mt-3">
              <p className="text-sm whitespace-pre-line">{post.content}</p>
            </div>
            
            {post.image && (
              <div className="mt-3">
                <img 
                  src={post.image} 
                  alt="Post attachment" 
                  className="rounded-lg w-full object-cover max-h-[350px]"
                />
              </div>
            )}
            
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between">
                <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                  <ThumbsUp className="h-5 w-5 mr-1" />
                  <span className="text-xs">{post.likes}</span>
                </button>
                <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                  <MessageSquare className="h-5 w-5 mr-1" />
                  <span className="text-xs">{post.comments}</span>
                </button>
                <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                  <Share2 className="h-5 w-5 mr-1" />
                  <span className="text-xs">Share</span>
                </button>
                <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue">
                  <Send className="h-5 w-5 mr-1" />
                  <span className="text-xs">Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
