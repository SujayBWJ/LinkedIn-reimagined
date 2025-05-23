import React, { useState } from 'react';
import { Newspaper, X, MessageSquare, ChevronDown, ChevronUp, Search, Save } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RightSidebar = () => {
  const [showNews, setShowNews] = useState(true);
  const [showMessages, setShowMessages] = useState(true);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [chatMessages, setChatMessages] = useState<{[key: string]: {text: string, sender: 'user' | 'contact', time: string}[]}>(
    {
      '1': [
        { text: 'Hi there! How are you doing today?', sender: 'contact', time: '10:32 AM' },
        { text: "I'm doing great! Working on a new project. How about you?", sender: 'user', time: '10:35 AM' },
        { text: "That sounds exciting! I'd love to hear more about it.", sender: 'contact', time: '10:38 AM' },
      ],
      '2': [
        { text: 'I sent you the files', sender: 'contact', time: '2:15 PM' },
      ],
      '3': [
        { text: 'Thanks for your help!', sender: 'contact', time: '9:22 AM' },
        { text: 'No problem! Happy to help anytime.', sender: 'user', time: '9:30 AM' },
      ]
    }
  );
  
  // Mock messages data
  const messages = [
    { 
      id: '1', 
      name: 'Sarah Johnson', 
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80', 
      status: 'online', 
      lastMessage: 'Do you have time for a call?', 
      time: '2m' 
    },
    { 
      id: '2', 
      name: 'Alex Thompson', 
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80', 
      status: 'offline', 
      lastMessage: 'I sent you the files', 
      time: '1h' 
    },
    { 
      id: '3', 
      name: 'Michael Chen', 
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80', 
      status: 'online', 
      lastMessage: 'Thanks for your help!', 
      time: '3h' 
    },
    { 
      id: '4', 
      name: 'Priya Sharma', 
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80', 
      status: 'offline', 
      lastMessage: "Let's discuss the project tomorrow", 
      time: '5h' 
    },
    { 
      id: '5', 
      name: 'David Wang', 
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80', 
      status: 'online', 
      lastMessage: 'Can you review my PR?', 
      time: '1d' 
    }
  ];
  
  // Mock news data
  const newsItems = [
    {
      id: 1,
      title: "Tech layoffs continue as economy slows",
      time: "3h ago",
      readers: "94,305 readers"
    },
    {
      id: 2,
      title: "Remote work becomes the new normal",
      time: "5h ago",
      readers: "87,122 readers"
    },
    {
      id: 3,
      title: "New AI tool revolutionizes job market",
      time: "1d ago",
      readers: "116,438 readers"
    },
    {
      id: 4,
      title: "Cybersecurity trends for 2025",
      time: "2d ago",
      readers: "75,619 readers"
    },
    {
      id: 5,
      title: "Startup funding hits record high",
      time: "3d ago",
      readers: "63,854 readers"
    },
    {
      id: 6,
      title: "Top tech skills for 2025",
      time: "3d ago",
      readers: "58,721 readers"
    },
    {
      id: 7,
      title: "Green energy sector sees massive growth",
      time: "4d ago",
      readers: "42,198 readers"
    }
  ];

  const sendMessage = () => {
    if (!messageInput.trim() || !activeChat) return;

    const newMessages = chatMessages[activeChat] ? [...chatMessages[activeChat]] : [];
    newMessages.push({
      text: messageInput,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    
    setChatMessages({
      ...chatMessages,
      [activeChat]: newMessages
    });
    
    setMessageInput('');
    
    // Simulate reply after a short delay
    setTimeout(() => {
      const contact = messages.find(m => m.id === activeChat);
      if (contact) {
        const simulatedReplies = [
          "That sounds great!",
          "Thanks for letting me know.",
          "I'll get back to you on that.",
          "Perfect, thanks!",
          "Interesting! Tell me more."
        ];
        const randomReply = simulatedReplies[Math.floor(Math.random() * simulatedReplies.length)];
        
        setChatMessages(prev => ({
          ...prev,
          [activeChat]: [
            ...(prev[activeChat] || []),
            {
              text: randomReply,
              sender: 'contact',
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]
        }));
      }
    }, 1500);
  };
  
  return (
    <aside className="w-full md:w-80 lg:w-96 flex-shrink-0 space-y-4">
      {/* Messaging Section */}
      <div className="linkedin-card overflow-hidden">
        <div className="p-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center">
            <MessageSquare className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
            <h3 className="font-medium text-md">Messaging</h3>
          </div>
          <button 
            onClick={() => setShowMessages(!showMessages)} 
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            {showMessages ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
        
        {showMessages && (
          <>
            <div className="p-3 border-b border-gray-200 dark:border-gray-700">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search messages"
                  className="w-full pl-8 pr-3 py-1 text-sm border border-gray-300 dark:border-gray-700 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:border-linkedin-blue focus:ring-1 focus:ring-linkedin-blue"
                />
                <Search className="absolute left-2 top-1.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <div className={`${activeChat ? 'hidden' : 'block'}`}>
              <div className="overflow-y-auto max-h-[320px] scrollbar-hide">
                {messages.map(message => (
                  <button 
                    key={message.id}
                    onClick={() => setActiveChat(message.id)}
                    className="w-full text-left p-3 hover:bg-gray-100 dark:hover:bg-gray-800/70 flex items-start border-b border-gray-200 dark:border-gray-700 last:border-0"
                  >
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={message.avatar} alt={message.name} />
                        <AvatarFallback className="bg-linkedin-blue text-white">{message.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      {message.status === 'online' && (
                        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white dark:border-linkedin-darkGrey"></span>
                      )}
                    </div>
                    
                    <div className="ml-3 flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-medium truncate">{message.name}</h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">{message.time}</span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                        {message.lastMessage}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {activeChat && (
              <div className="h-[320px] flex flex-col">
                <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage 
                        src={messages.find(m => m.id === activeChat)?.avatar} 
                        alt={messages.find(m => m.id === activeChat)?.name || ''} 
                      />
                      <AvatarFallback className="bg-linkedin-blue text-white">
                        {messages.find(m => m.id === activeChat)?.name.split(' ').map(n => n[0]).join('') || ''}
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="font-medium text-sm">
                      {messages.find(m => m.id === activeChat)?.name}
                    </h4>
                  </div>
                  <button 
                    onClick={() => setActiveChat(null)} 
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-3">
                  <div className="flex flex-col space-y-3">
                    {(chatMessages[activeChat] || []).map((msg, idx) => (
                      <div 
                        key={idx} 
                        className={`${
                          msg.sender === 'user' 
                            ? 'bg-linkedin-blue text-white rounded-lg p-2 max-w-[80%] self-end' 
                            : 'bg-gray-100 dark:bg-gray-800 rounded-lg p-2 max-w-[80%] self-start'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <span className={`text-xs ${msg.sender === 'user' ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>{msg.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <input 
                      type="text" 
                      placeholder="Write a message..."
                      className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:border-linkedin-blue focus:ring-1 focus:ring-linkedin-blue"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          sendMessage();
                        }
                      }}
                    />
                    <button 
                      className={`ml-2 ${messageInput.trim() ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : 'text-gray-400'} hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-2`}
                      onClick={sendMessage}
                      disabled={!messageInput.trim()}
                    >
                      <Save className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      
      {/* LinkedIn News Section */}
      {showNews && (
        <div className="linkedin-card overflow-hidden">
          <div className="p-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div className="flex items-center">
              <Newspaper className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
              <h3 className="font-medium text-md">LinkedIn News</h3>
            </div>
            <button 
              onClick={() => setShowNews(false)} 
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="p-3">
            <ul className="space-y-3">
              {newsItems.map((item) => (
                <li key={item.id} className="group">
                  <Link to="/news" className="block">
                    <h4 className="text-sm font-medium group-hover:text-linkedin-blue dark:group-hover:text-linkedin-lightBlue">
                      {item.title}
                    </h4>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {item.time} • {item.readers}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/40 text-center">
            <Link to="/news" className="text-sm font-medium text-linkedin-blue dark:text-linkedin-lightBlue hover:underline">
              View all news
            </Link>
          </div>
        </div>
      )}
    </aside>
  );
};

export default RightSidebar;
