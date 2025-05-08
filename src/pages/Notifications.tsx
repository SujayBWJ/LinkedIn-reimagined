
import React, { useState, useMemo } from 'react';
import NavBar from '../components/NavBar';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BellRing, User, Briefcase, Share2, UserPlus, MessageSquare } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';

const Notifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock notification data
  const notifications = [
    {
      id: 1,
      type: 'connection',
      user: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        role: 'Product Manager at Tech Co.'
      },
      action: 'wants to connect with you',
      time: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
      read: false
    },
    {
      id: 2,
      type: 'post_engagement',
      user: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        role: 'Software Engineer at Dev Inc.'
      },
      action: 'liked your post about React',
      time: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      read: true
    },
    {
      id: 3,
      type: 'job',
      user: {
        name: 'Recruitment Team',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        role: 'Innovation Tech'
      },
      action: 'posted a job that matches your skills: Senior Developer',
      time: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
      read: false
    },
    {
      id: 4,
      type: 'message',
      user: {
        name: 'Alex Thompson',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        role: 'UX Designer'
      },
      action: 'sent you a message',
      time: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
      read: true
    },
    {
      id: 5,
      type: 'post_engagement',
      user: {
        name: 'Priya Sharma',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        role: 'Data Scientist at Analytics Co.'
      },
      action: 'commented on your post about machine learning',
      time: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      read: true
    },
    {
      id: 6,
      type: 'birthday',
      user: {
        name: 'James Wilson',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        role: 'Marketing Director at Brand Inc.'
      },
      action: 'is celebrating a birthday today',
      time: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      read: false
    },
    {
      id: 7,
      type: 'connection',
      user: {
        name: 'Emma Davis',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        role: 'HR Manager at Corp Co.'
      },
      action: 'accepted your connection request',
      time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
      read: true
    },
    {
      id: 8,
      type: 'job',
      user: {
        name: 'Recruitment Team',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        role: 'Global Tech Solutions'
      },
      action: 'your job application was viewed by the hiring manager',
      time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
      read: true
    },
    {
      id: 9,
      type: 'post_engagement',
      user: {
        name: 'Thomas Brown',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        role: 'CTO at Startup Inc.'
      },
      action: 'shared your post about cloud architecture',
      time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4), // 4 days ago
      read: true
    },
    {
      id: 10,
      type: 'job',
      user: {
        name: 'Recruitment Team',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        role: 'TechGrow Inc.'
      },
      action: 'a job you might be interested in: Frontend Developer',
      time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1), // 1 day ago
      read: false
    },
    {
      id: 11,
      type: 'connection',
      user: {
        name: 'David Wang',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        role: 'Backend Developer at Cloud Tech'
      },
      action: 'wants to connect with you',
      time: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      read: false
    },
    {
      id: 12,
      type: 'message',
      user: {
        name: 'Lisa Chen',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        role: 'Product Designer'
      },
      action: 'sent you a message about the project',
      time: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
      read: false
    },
    {
      id: 13,
      type: 'birthday',
      user: {
        name: 'Robert Lee',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        role: 'Full Stack Developer at TechNow'
      },
      action: 'is celebrating a birthday today',
      time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
      read: true
    }
  ];

  const filteredNotifications = useMemo(() => {
    if (selectedCategory === 'all') {
      return notifications;
    } else {
      return notifications.filter(notification => notification.type === selectedCategory);
    }
  }, [selectedCategory, notifications]);

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'connection':
        return <UserPlus className="h-5 w-5 text-linkedin-blue" />;
      case 'job':
        return <Briefcase className="h-5 w-5 text-green-600" />;
      case 'post_engagement':
        return <Share2 className="h-5 w-5 text-orange-500" />;
      case 'message':
        return <MessageSquare className="h-5 w-5 text-purple-500" />;
      case 'birthday':
        return <div className="text-yellow-500">🎂</div>;
      default:
        return <BellRing className="h-5 w-5 text-gray-500" />;
    }
  };
  
  const handleMarkAsRead = (id) => {
    // In a real app, this would update the notification status in a database
    console.log(`Marked notification ${id} as read`);
  };

  const handleAcceptConnection = (id) => {
    // In a real app, this would accept the connection request
    console.log(`Accepted connection request ${id}`);
  };

  const handleIgnoreConnection = (id) => {
    // In a real app, this would ignore the connection request
    console.log(`Ignored connection request ${id}`);
  };

  return (
    <div className="min-h-screen bg-linkedin-lightGrey dark:bg-linkedin-darkGrey">
      <NavBar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col">
          
          <Tabs 
            defaultValue="all" 
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="mb-6"
          >
            <div className="bg-white dark:bg-linkedin-darkGrey rounded-lg shadow p-1">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-1 mb-2">
                <TabsTrigger value="all" className="data-[state=active]:bg-linkedin-blue data-[state=active]:text-white">
                  All
                </TabsTrigger>
                <TabsTrigger value="connection" className="data-[state=active]:bg-linkedin-blue data-[state=active]:text-white">
                  Connections
                </TabsTrigger>
                <TabsTrigger value="post_engagement" className="data-[state=active]:bg-linkedin-blue data-[state=active]:text-white">
                  Engagement
                </TabsTrigger>
                <TabsTrigger value="job" className="data-[state=active]:bg-linkedin-blue data-[state=active]:text-white">
                  Jobs
                </TabsTrigger>
                <TabsTrigger value="message" className="data-[state=active]:bg-linkedin-blue data-[state=active]:text-white">
                  Messages
                </TabsTrigger>
                <TabsTrigger value="birthday" className="data-[state=active]:bg-linkedin-blue data-[state=active]:text-white">
                  Birthdays
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value={selectedCategory}>
              {filteredNotifications.length === 0 ? (
                <div className="text-center py-10">
                  <BellRing className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">No notifications</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">You don't have any notifications in this category yet.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredNotifications.map((notification) => (
                    <Card key={notification.id} className={`transition-all ${!notification.read ? 'bg-blue-50 dark:bg-blue-900/10' : ''}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 mt-1">
                            <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                              {getNotificationIcon(notification.type)}
                            </div>
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="flex items-start">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
                                <AvatarFallback>{notification.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">
                                  <span className="font-semibold">{notification.user.name}</span> {notification.action}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                  {notification.user.role}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                  {formatDistanceToNow(notification.time, { addSuffix: true })}
                                </p>
                                {!notification.read && (
                                  <button
                                    onClick={() => handleMarkAsRead(notification.id)}
                                    className="text-xs text-linkedin-blue dark:text-linkedin-lightBlue mt-1 hover:underline"
                                  >
                                    Mark as read
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            {notification.type === 'connection' && !notification.read && (
                              <div className="flex space-x-2 mt-2">
                                <Button size="sm" onClick={() => handleAcceptConnection(notification.id)}>Accept</Button>
                                <Button size="sm" variant="outline" onClick={() => handleIgnoreConnection(notification.id)}>Ignore</Button>
                              </div>
                            )}
                            {notification.type === 'message' && !notification.read && (
                              <Button size="sm" variant="outline" className="mt-2">
                                Reply
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
