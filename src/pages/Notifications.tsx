
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
        avatar: 'SJ',
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
        avatar: 'MC',
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
        avatar: 'RT',
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
        avatar: 'AT',
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
        avatar: 'PS',
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
        avatar: 'JW',
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
        avatar: 'ED',
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
        avatar: 'RT',
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
        avatar: 'TB',
        role: 'CTO at Startup Inc.'
      },
      action: 'shared your post about cloud architecture',
      time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4), // 4 days ago
      read: true
    }
  ];

  const getFilteredNotifications = (category) => {
    if (category === 'all') {
      return notifications;
    } else {
      return notifications.filter(notification => notification.type === category);
    }
  };

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

  return (
    <div className="min-h-screen bg-linkedin-lightGrey dark:bg-linkedin-darkGrey">
      <NavBar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-6">Notifications</h1>
          
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
            
            {Object.keys(getFilteredNotifications).length === 0 ? (
              <div className="text-center py-10">
                <BellRing className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">No notifications</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">You don't have any notifications in this category yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {getFilteredNotifications(selectedCategory).map((notification) => (
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
                              <AvatarFallback>{notification.user.avatar}</AvatarFallback>
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
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          {notification.type === 'connection' && !notification.read && (
                            <div className="flex space-x-2 mt-2">
                              <Button size="sm">Accept</Button>
                              <Button size="sm" variant="outline">Ignore</Button>
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
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
