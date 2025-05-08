
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserPlus, UserMinus, MessageSquare, Filter, Search } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Network = () => {
  const [activeTab, setActiveTab] = useState('connections');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock connections data
  const connections = [
    { id: 1, name: 'Emma Thompson', role: 'Product Designer at Creative Co.', mutualConnections: 12, avatar: 'ET' },
    { id: 2, name: 'James Wilson', role: 'Software Engineer at Tech Solutions', mutualConnections: 8, avatar: 'JW' },
    { id: 3, name: 'Sophia Garcia', role: 'Marketing Manager at Brand Inc.', mutualConnections: 15, avatar: 'SG' },
    { id: 4, name: 'Daniel Martinez', role: 'UX Researcher at Design Studio', mutualConnections: 6, avatar: 'DM' },
    { id: 5, name: 'Olivia Johnson', role: 'Content Strategist at Media Group', mutualConnections: 10, avatar: 'OJ' }
  ];
  
  // Mock invitations data
  const invitations = [
    { id: 1, name: 'Noah Brown', role: 'Frontend Developer at Web Solutions', mutualConnections: 4, avatar: 'NB' },
    { id: 2, name: 'Ava Williams', role: 'Data Analyst at Analytics Co.', mutualConnections: 7, avatar: 'AW' }
  ];
  
  // Mock people you may know data
  const peopleYouMayKnow = [
    { id: 1, name: 'Liam Johnson', role: 'Project Manager at Management Inc.', mutualConnections: 18, avatar: 'LJ' },
    { id: 2, name: 'Charlotte Davis', role: 'Graphic Designer at Creative Studio', mutualConnections: 5, avatar: 'CD' },
    { id: 3, name: 'Mason Rodriguez', role: 'Business Analyst at Consulting Group', mutualConnections: 9, avatar: 'MR' },
    { id: 4, name: 'Isabella Smith', role: 'Content Creator at Media House', mutualConnections: 11, avatar: 'IS' },
    { id: 5, name: 'Ethan Wilson', role: 'AI Researcher at Tech Labs', mutualConnections: 3, avatar: 'EW' }
  ];
  
  return (
    <div className="min-h-screen bg-linkedin-lightGrey dark:bg-linkedin-darkGrey">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">My Network</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your connections and grow your professional network
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Navigation */}
          <div className="col-span-1">
            <Card className="linkedin-card sticky top-20">
              <CardContent className="p-4">
                <nav className="space-y-1">
                  <a href="#connections" className="flex justify-between items-center p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                    <span>Connections</span>
                    <Badge variant="outline">{connections.length}</Badge>
                  </a>
                  <a href="#invitations" className="flex justify-between items-center p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                    <span>Invitations</span>
                    <Badge variant="outline">{invitations.length}</Badge>
                  </a>
                  <Separator className="my-2" />
                  <a href="#people" className="flex justify-between items-center p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                    <span>People You May Know</span>
                  </a>
                  <a href="#groups" className="flex justify-between items-center p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                    <span>Groups</span>
                  </a>
                  <a href="#pages" className="flex justify-between items-center p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                    <span>Pages</span>
                  </a>
                  <a href="#events" className="flex justify-between items-center p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                    <span>Events</span>
                  </a>
                  <a href="#newsletter" className="flex justify-between items-center p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                    <span>Newsletters</span>
                  </a>
                  <a href="#hashtags" className="flex justify-between items-center p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                    <span>Hashtags</span>
                  </a>
                </nav>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="col-span-1 lg:col-span-3">
            <Card className="linkedin-card mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <div className="relative flex-grow w-full md:w-auto">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search by name"
                      className="pl-10 pr-3 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-linkedin-blue focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <button className="flex items-center px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm">
                    <Filter className="h-4 w-4 mr-2" />
                    <span>Filter</span>
                  </button>
                </div>
                
                <Tabs defaultValue="connections" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="w-full bg-white dark:bg-linkedin-darkGrey mb-4">
                    <TabsTrigger value="connections" className="flex-1">Connections</TabsTrigger>
                    <TabsTrigger value="invitations" className="flex-1">Invitations</TabsTrigger>
                    <TabsTrigger value="people" className="flex-1">People You May Know</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="connections" className="mt-0">
                    <div className="space-y-4">
                      {connections.map((connection) => (
                        <div key={connection.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                          <div className="flex items-center">
                            <div className="h-12 w-12 rounded-full bg-linkedin-blue text-white flex items-center justify-center">
                              <span className="font-medium">{connection.avatar}</span>
                            </div>
                            <div className="ml-4">
                              <h3 className="font-medium">{connection.name}</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{connection.role}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{connection.mutualConnections} mutual connections</p>
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-4 md:mt-0">
                            <Button variant="outline" size="sm">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Message
                            </Button>
                            <Button variant="outline" size="sm" className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 border-gray-300 dark:border-gray-700">
                              <UserMinus className="h-4 w-4 mr-2" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="invitations" className="mt-0">
                    <div className="space-y-4">
                      {invitations.map((invitation) => (
                        <div key={invitation.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                          <div className="flex items-center">
                            <div className="h-12 w-12 rounded-full bg-linkedin-blue text-white flex items-center justify-center">
                              <span className="font-medium">{invitation.avatar}</span>
                            </div>
                            <div className="ml-4">
                              <h3 className="font-medium">{invitation.name}</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{invitation.role}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{invitation.mutualConnections} mutual connections</p>
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-4 md:mt-0">
                            <Button variant="default" size="sm" className="bg-linkedin-blue hover:bg-linkedin-darkBlue">
                              Accept
                            </Button>
                            <Button variant="outline" size="sm">
                              Ignore
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="people" className="mt-0">
                    <div className="space-y-4">
                      {peopleYouMayKnow.map((person) => (
                        <div key={person.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                          <div className="flex items-center">
                            <div className="h-12 w-12 rounded-full bg-linkedin-blue text-white flex items-center justify-center">
                              <span className="font-medium">{person.avatar}</span>
                            </div>
                            <div className="ml-4">
                              <h3 className="font-medium">{person.name}</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{person.role}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{person.mutualConnections} mutual connections</p>
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-4 md:mt-0">
                            <Button variant="outline" size="sm" className="border-linkedin-blue text-linkedin-blue hover:bg-linkedin-blue hover:text-white">
                              <UserPlus className="h-4 w-4 mr-2" />
                              Connect
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
