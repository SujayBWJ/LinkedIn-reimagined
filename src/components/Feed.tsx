
import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Repost, Save, Image, Link2, Calendar, FileText, MoreHorizontal } from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Feed = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [postContent, setPostContent] = useState("");
  const [comments, setComments] = useState({});
  const [showComments, setShowComments] = useState({});
  const [newComment, setNewComment] = useState({});
  const [likedPosts, setLikedPosts] = useState({});
  const [repostedPosts, setRepostedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});
  
  // Mock posts data with real photos
  const posts = [
    {
      id: 1,
      author: {
        name: "Emily Johnson",
        role: "Product Manager at Tech Solutions",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
      },
      content: "Excited to announce that we're launching our new product next month! Stay tuned for more details. #ProductLaunch #Innovation",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      time: "2h",
      likes: 248,
      comments: [
        {
          id: 101,
          author: {
            name: "Thomas Brown",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          },
          content: "Looking forward to the launch! Can you share any sneak peeks?",
          time: "1h"
        },
        {
          id: 102,
          author: {
            name: "Sarah Williams",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          },
          content: "Congratulations on the upcoming launch! This is exciting news.",
          time: "2h"
        }
      ],
      type: "general"
    },
    {
      id: 2,
      author: {
        name: "Michael Chen",
        role: "Software Engineer at DevCorp",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
      },
      content: "Just published a new article about optimizing React performance. Check it out if you're interested in frontend development!",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      time: "5h",
      likes: 186,
      comments: [
        {
          id: 201,
          author: {
            name: "Alex Thompson",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          },
          content: "Great article! I especially liked the section on memo and useMemo.",
          time: "3h"
        }
      ],
      type: "technical"
    },
    {
      id: 3,
      author: {
        name: "Recruiter Network",
        role: "Official LinkedIn Recruiting Page",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
      },
      content: "We're looking for talented developers to join our team! Remote positions available. #JobOpening #TechJobs",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      time: "1d",
      likes: 432,
      comments: [],
      type: "jobs"
    },
    {
      id: 4,
      author: {
        name: "Sarah Williams",
        role: "Career Coach",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
      },
      content: "5 skills that will be essential for job seekers in 2025:\n\n1. AI & Machine Learning literacy\n2. Data Analysis\n3. Digital Communication\n4. Adaptability\n5. Critical Thinking\n\nWhich one are you focusing on developing?",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      time: "2d",
      likes: 892,
      comments: [
        {
          id: 401,
          author: {
            name: "James Wilson",
            avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          },
          content: "I'm focusing on AI & Machine Learning literacy. It's becoming crucial in almost every industry.",
          time: "1d"
        },
        {
          id: 402,
          author: {
            name: "Emma Davis",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          },
          content: "Digital Communication is my focus. The way we communicate in remote work environments is constantly evolving.",
          time: "1d"
        },
        {
          id: 403,
          author: {
            name: "Michael Chen",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          },
          content: "Adaptability has been key for me. The tech landscape changes so quickly!",
          time: "2d"
        }
      ],
      type: "skills"
    }
  ];
  
  const filteredPosts = activeTab === "all" ? posts : posts.filter(post => post.type === activeTab);

  const handleLike = (postId) => {
    setLikedPosts({
      ...likedPosts,
      [postId]: !likedPosts[postId]
    });
  };

  const handleRepost = (postId) => {
    setRepostedPosts({
      ...repostedPosts,
      [postId]: !repostedPosts[postId]
    });
  };

  const handleSave = (postId) => {
    setSavedPosts({
      ...savedPosts,
      [postId]: !savedPosts[postId]
    });
  };

  const toggleComments = (postId) => {
    setShowComments({
      ...showComments,
      [postId]: !showComments[postId]
    });
  };

  const handleCommentChange = (postId, value) => {
    setNewComment({
      ...newComment,
      [postId]: value
    });
  };

  const addComment = (postId) => {
    if (!newComment[postId] || newComment[postId].trim() === '') return;
    
    const updatedComments = comments[postId] ? [...comments[postId]] : [];
    updatedComments.push({
      id: Date.now(),
      author: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
      },
      content: newComment[postId],
      time: "Just now"
    });
    
    setComments({
      ...comments,
      [postId]: updatedComments
    });
    
    setNewComment({
      ...newComment,
      [postId]: ''
    });
  };
  
  const getPostComments = (postId) => {
    const existingComments = posts.find(post => post.id === postId)?.comments || [];
    const newComments = comments[postId] || [];
    return [...existingComments, ...newComments];
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Create Post */}
      <div className="linkedin-card p-4">
        <div className="flex items-start">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="JD" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
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
                <Avatar className="h-12 w-12 mr-3">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
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
                <button 
                  className={`flex items-center ${likedPosts[post.id] ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : 'text-gray-500 dark:text-gray-400'} hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue`}
                  onClick={() => handleLike(post.id)}
                >
                  <ThumbsUp className="h-5 w-5 mr-1" />
                  <span className="text-xs">{likedPosts[post.id] ? post.likes + 1 : post.likes}</span>
                </button>
                <button 
                  className="flex items-center text-gray-500 dark:text-gray-400 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue"
                  onClick={() => toggleComments(post.id)}
                >
                  <MessageSquare className="h-5 w-5 mr-1" />
                  <span className="text-xs">{getPostComments(post.id).length}</span>
                </button>
                <button 
                  className={`flex items-center ${repostedPosts[post.id] ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : 'text-gray-500 dark:text-gray-400'} hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue`}
                  onClick={() => handleRepost(post.id)}
                >
                  <Repost className="h-5 w-5 mr-1" />
                  <span className="text-xs">Repost</span>
                </button>
                <button 
                  className={`flex items-center ${savedPosts[post.id] ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : 'text-gray-500 dark:text-gray-400'} hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue`}
                  onClick={() => handleSave(post.id)}
                >
                  <Save className="h-5 w-5 mr-1" />
                  <span className="text-xs">Save</span>
                </button>
              </div>
            </div>

            {/* Comments Section */}
            {showComments[post.id] && (
              <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-3">
                <h4 className="text-sm font-medium mb-2">Comments</h4>
                <div className="space-y-3">
                  {getPostComments(post.id).map((comment) => (
                    <div key={comment.id} className="flex space-x-2">
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                        <AvatarFallback>{comment.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-2">
                        <div className="flex justify-between items-center">
                          <p className="text-xs font-medium">{comment.author.name}</p>
                          <span className="text-xs text-gray-500">{comment.time}</span>
                        </div>
                        <p className="text-sm mt-1">{comment.content}</p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Add Comment */}
                  <div className="flex space-x-2 mt-2">
                    <Avatar className="h-8 w-8 flex-shrink-0">
                      <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="JD" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 flex space-x-2">
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        className="flex-1 border border-gray-300 dark:border-gray-700 rounded-full px-3 py-1 text-sm bg-transparent focus:outline-none focus:border-linkedin-blue focus:ring-1 focus:ring-linkedin-blue"
                        value={newComment[post.id] || ''}
                        onChange={(e) => handleCommentChange(post.id, e.target.value)}
                      />
                      <button
                        className={`px-3 py-1 rounded-full text-xs font-medium ${(newComment[post.id] && newComment[post.id].trim() !== '') ? 'bg-linkedin-blue hover:bg-linkedin-darkBlue text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed'}`}
                        disabled={!newComment[post.id] || newComment[post.id].trim() === ''}
                        onClick={() => addComment(post.id)}
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
