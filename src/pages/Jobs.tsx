
import React, { useState } from 'react';
import CustomNavbar from '@/components/NavBar';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Clock, 
  Filter, 
  Save,
  CheckCircle2,
  Calendar,
  ListTodo,
  Star,
  Building,
  Users,
  DollarSign,
  TrendingUp,
  FileText
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

const JobListings = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const jobListings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=100&auto=format&fit=crop",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      posted: "2 days ago",
      saved: true,
      description: "We're looking for an experienced software engineer to join our team and help build scalable cloud applications.",
      requirements: [
        "5+ years of experience with React and Node.js",
        "Experience with cloud services (AWS or Azure)",
        "Strong communication skills"
      ]
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateNow",
      logo: "https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?w=100&h=100&auto=format&fit=crop",
      location: "New York, NY",
      type: "Full-time",
      salary: "$115,000 - $140,000",
      posted: "3 days ago",
      saved: false,
      description: "Lead product development for our SaaS platform, working with cross-functional teams to deliver exceptional user experiences.",
      requirements: [
        "3+ years of product management experience",
        "Background in B2B software",
        "MBA preferred but not required"
      ]
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "DesignWorks",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&auto=format&fit=crop",
      location: "Remote",
      type: "Contract",
      salary: "$80 - $100/hour",
      posted: "1 week ago",
      saved: false,
      description: "Create intuitive user interfaces and experiences for our mobile applications. This is a 6-month contract with possibility of extension.",
      requirements: [
        "Portfolio demonstrating UI/UX work",
        "Experience with Figma and Adobe Creative Suite",
        "Knowledge of design systems"
      ]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudTech Solutions",
      logo: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=100&h=100&auto=format&fit=crop",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$130,000 - $160,000",
      posted: "1 day ago",
      saved: false,
      description: "Join our infrastructure team to design, implement and maintain our cloud-based systems with a focus on automation and scalability.",
      requirements: [
        "Experience with Kubernetes and Docker",
        "Knowledge of CI/CD pipelines",
        "Strong scripting skills"
      ]
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Analytics Innovations",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&auto=format&fit=crop",
      location: "Remote",
      type: "Full-time",
      salary: "$125,000 - $155,000",
      posted: "4 days ago",
      saved: true,
      description: "Develop machine learning models to extract insights from our data and improve product recommendations for our e-commerce platform.",
      requirements: [
        "MS or PhD in Computer Science or related field",
        "Experience with machine learning frameworks",
        "Knowledge of Python and R"
      ]
    }
  ];

  const applications = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "WebTech Solutions",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&auto=format&fit=crop",
      status: "Applied",
      date: "Applied on May 5, 2025",
      nextStep: "Waiting for review"
    },
    {
      id: 2,
      title: "DevOps Engineer",
      company: "CloudNative Inc.",
      logo: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=100&h=100&auto=format&fit=crop",
      status: "Interviewing",
      date: "Applied on April 28, 2025",
      nextStep: "Technical interview on May 10"
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "DataViz Corporation",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&auto=format&fit=crop",
      status: "Applied",
      date: "Applied on May 7, 2025",
      nextStep: "Initial screening"
    }
  ];

  const savedJobs = jobListings.filter(job => job.saved);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left sidebar - Search and filters */}
      <div className="lg:col-span-1 space-y-4">
        <Card className="linkedin-card p-4 dark:bg-zinc-900 dark:border-zinc-800">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Search job titles" 
                className="pl-9 dark:bg-zinc-800 dark:border-zinc-700" 
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Location" 
                className="pl-9 dark:bg-zinc-800 dark:border-zinc-700" 
              />
            </div>
            
            <div className="flex items-center border-t border-gray-200 dark:border-zinc-700 pt-4">
              <Filter className="h-4 w-4 text-linkedin-blue dark:text-blue-400 mr-2" />
              <h3 className="font-medium text-sm dark:text-white">Filters</h3>
            </div>
            
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-sm font-medium dark:text-gray-300">Job Type</label>
                <Select>
                  <SelectTrigger className="dark:bg-zinc-800 dark:border-zinc-700">
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-zinc-900 dark:border-zinc-700">
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium dark:text-gray-300">Experience Level</label>
                <Select>
                  <SelectTrigger className="dark:bg-zinc-800 dark:border-zinc-700">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-zinc-900 dark:border-zinc-700">
                    <SelectItem value="entry">Entry Level</SelectItem>
                    <SelectItem value="mid">Mid-Level</SelectItem>
                    <SelectItem value="senior">Senior Level</SelectItem>
                    <SelectItem value="executive">Executive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium dark:text-gray-300">Date Posted</label>
                <Select>
                  <SelectTrigger className="dark:bg-zinc-800 dark:border-zinc-700">
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-zinc-900 dark:border-zinc-700">
                    <SelectItem value="24h">Past 24 hours</SelectItem>
                    <SelectItem value="week">Past week</SelectItem>
                    <SelectItem value="month">Past month</SelectItem>
                    <SelectItem value="any">Any time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium dark:text-gray-300">Salary Range</label>
                <Select>
                  <SelectTrigger className="dark:bg-zinc-800 dark:border-zinc-700">
                    <SelectValue placeholder="Select salary range" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-zinc-900 dark:border-zinc-700">
                    <SelectItem value="50k">$50,000+</SelectItem>
                    <SelectItem value="75k">$75,000+</SelectItem>
                    <SelectItem value="100k">$100,000+</SelectItem>
                    <SelectItem value="150k">$150,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium dark:text-gray-300">Industry</label>
                <Select>
                  <SelectTrigger className="dark:bg-zinc-800 dark:border-zinc-700">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-zinc-900 dark:border-zinc-700">
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium dark:text-gray-300">Remote Options</label>
                <Select>
                  <SelectTrigger className="dark:bg-zinc-800 dark:border-zinc-700">
                    <SelectValue placeholder="Select remote option" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-zinc-900 dark:border-zinc-700">
                    <SelectItem value="remote">Remote only</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="onsite">On-site</SelectItem>
                    <SelectItem value="any">Any workplace type</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full linkedin-button dark:bg-blue-600 dark:hover:bg-blue-700">
                Apply Filters
              </Button>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Main content - Job listings and applications */}
      <div className="lg:col-span-2">
        <Card className="linkedin-card mb-4 dark:bg-zinc-900 dark:border-zinc-800">
          <Tabs defaultValue="listings">
            <div className="border-b dark:border-zinc-700">
              <TabsList className="px-4 pt-2">
                <TabsTrigger value="listings" className="flex items-center gap-1 dark:data-[state=active]:text-white">
                  <Briefcase className="h-4 w-4" />
                  <span>Job Listings</span>
                </TabsTrigger>
                <TabsTrigger value="applications" className="flex items-center gap-1 dark:data-[state=active]:text-white">
                  <ListTodo className="h-4 w-4" />
                  <span>My Applications</span>
                </TabsTrigger>
                <TabsTrigger value="saved" className="flex items-center gap-1 dark:data-[state=active]:text-white">
                  <Save className="h-4 w-4" />
                  <span>Saved</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="listings">
              <div className="p-4 border-b dark:border-zinc-700">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold dark:text-white">Recommended for you</h2>
                  <Select defaultValue={activeFilter}>
                    <SelectTrigger className="w-[180px] dark:bg-zinc-800 dark:border-zinc-700">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-zinc-900 dark:border-zinc-700">
                      <SelectItem value="relevant">Most Relevant</SelectItem>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="salary-high">Salary (High to Low)</SelectItem>
                      <SelectItem value="salary-low">Salary (Low to High)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="divide-y dark:divide-zinc-700">
                {jobListings.map(job => (
                  <div key={job.id} className="p-4 hover:bg-gray-50 dark:hover:bg-zinc-800">
                    <div className="flex">
                      <div className="w-14 h-14 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={job.logo} 
                          alt={job.company} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-grow">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-linkedin-blue dark:text-blue-400 hover:underline cursor-pointer">
                            {job.title}
                          </h3>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className={job.saved ? "text-linkedin-blue dark:text-blue-400" : "text-gray-500 dark:text-gray-400"}
                          >
                            <Save className="h-5 w-5" />
                          </Button>
                        </div>
                        <p className="text-sm font-medium dark:text-gray-300">{job.company}</p>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-zinc-700 px-2 py-1 rounded">
                            <Briefcase className="h-3 w-3 mr-1" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-zinc-700 px-2 py-1 rounded">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{job.posted}</span>
                          </div>
                          {job.salary && (
                            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-zinc-700 px-2 py-1 rounded">
                              {job.salary}
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                          {job.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {job.requirements.map((req, idx) => (
                            <span 
                              key={idx} 
                              className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full"
                            >
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="p-4 text-center">
                  <Button variant="outline" className="dark:border-zinc-700 dark:text-gray-300">
                    Load More Jobs
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="applications">
              {applications.length > 0 ? (
                <div className="divide-y dark:divide-zinc-700">
                  {applications.map(application => (
                    <div key={application.id} className="p-4">
                      <div className="flex">
                        <div className="w-14 h-14 rounded overflow-hidden flex-shrink-0">
                          <img 
                            src={application.logo} 
                            alt={application.company} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-grow">
                          <h3 className="font-semibold dark:text-white">{application.title}</h3>
                          <p className="text-sm dark:text-gray-300">{application.company}</p>
                          
                          <div className="mt-2 flex items-center">
                            <div className={`px-2 py-1 rounded text-xs font-medium ${
                              application.status === 'Applied' 
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
                                : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                            }`}>
                              {application.status}
                            </div>
                          </div>
                          
                          <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{application.date}</span>
                            </div>
                            <div className="flex items-center mt-1">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              <span>{application.nextStep}</span>
                            </div>
                          </div>
                          
                          <div className="mt-3">
                            <Button size="sm" className="linkedin-button dark:bg-blue-600 dark:hover:bg-blue-700 mr-2">
                              Track Application
                            </Button>
                            <Button size="sm" variant="outline" className="dark:border-zinc-700 dark:text-gray-300">
                              View Job
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">You haven't applied to any jobs yet</p>
                  <Button className="linkedin-button dark:bg-blue-600 dark:hover:bg-blue-700">
                    Browse Jobs
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="saved">
              {savedJobs.length > 0 ? (
                <div className="divide-y dark:divide-zinc-700">
                  {savedJobs.map(job => (
                    <div key={job.id} className="p-4 hover:bg-gray-50 dark:hover:bg-zinc-800">
                      <div className="flex">
                        <div className="w-14 h-14 rounded overflow-hidden flex-shrink-0">
                          <img 
                            src={job.logo} 
                            alt={job.company} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-grow">
                          <div className="flex justify-between">
                            <h3 className="font-semibold text-linkedin-blue dark:text-blue-400 hover:underline cursor-pointer">
                              {job.title}
                            </h3>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="text-linkedin-blue dark:text-blue-400"
                            >
                              <Save className="h-5 w-5" />
                            </Button>
                          </div>
                          <p className="text-sm font-medium dark:text-gray-300">{job.company}</p>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{job.location}</span>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-zinc-700 px-2 py-1 rounded">
                              <Briefcase className="h-3 w-3 mr-1" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-zinc-700 px-2 py-1 rounded">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{job.posted}</span>
                            </div>
                            {job.salary && (
                              <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-zinc-700 px-2 py-1 rounded">
                                {job.salary}
                              </div>
                            )}
                          </div>
                          <div className="mt-4 flex space-x-2">
                            <Button className="linkedin-button dark:bg-blue-600 dark:hover:bg-blue-700">Apply</Button>
                            <Button variant="outline" className="dark:border-zinc-700 dark:text-gray-300">View Details</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">No saved jobs yet</p>
                  <Button className="linkedin-button dark:bg-blue-600 dark:hover:bg-blue-700">
                    Browse Jobs
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

const Salaries = () => {
  const [searchRole, setSearchRole] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  
  // Sample salary data for visualization
  const salaryData = [
    { level: 'Junior', salary: 70000 },
    { level: 'Mid-level', salary: 95000 },
    { level: 'Senior', salary: 130000 },
    { level: 'Lead', salary: 155000 },
    { level: 'Principal', salary: 180000 },
  ];
  
  // Sample distribution data
  const distributionData = [
    { range: '$50k-70k', count: 15 },
    { range: '$70k-90k', count: 25 },
    { range: '$90k-110k', count: 35 },
    { range: '$110k-130k', count: 20 },
    { range: '$130k-150k', count: 12 },
    { range: '$150k+', count: 8 },
  ];
  
  // Sample trending roles data
  const trendingRoles = [
    { role: 'Machine Learning Engineer', growth: '+24%', salary: '$135,000' },
    { role: 'Data Scientist', growth: '+18%', salary: '$125,000' },
    { role: 'Cloud Architect', growth: '+15%', salary: '$145,000' },
    { role: 'DevOps Engineer', growth: '+12%', salary: '$115,000' },
    { role: 'Full Stack Developer', growth: '+10%', salary: '$105,000' },
  ];
  
  // Sample location comparison data
  const locationData = [
    { city: 'San Francisco', salary: 155000 },
    { city: 'New York', salary: 140000 },
    { city: 'Seattle', salary: 135000 },
    { city: 'Austin', salary: 115000 },
    { city: 'Chicago', salary: 105000 },
  ];
  
  return (
    <div>
      <Card className="linkedin-card p-6 mb-6 dark:bg-zinc-900 dark:border-zinc-800">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Search Salary Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input 
              placeholder="Job title or role" 
              className="pl-9 dark:bg-zinc-800 dark:border-zinc-700" 
              value={searchRole}
              onChange={(e) => setSearchRole(e.target.value)}
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input 
              placeholder="Location" 
              className="pl-9 dark:bg-zinc-800 dark:border-zinc-700" 
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
          </div>
        </div>
        
        <Button className="linkedin-button dark:bg-blue-600 dark:hover:bg-blue-700">Search Salaries</Button>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="linkedin-card mb-6 dark:bg-zinc-900 dark:border-zinc-800">
            <div className="p-4 border-b dark:border-zinc-700">
              <h3 className="font-semibold dark:text-white">Software Engineer Salary by Experience</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Average base salary in United States</p>
            </div>
            
            <div className="p-4">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={salaryData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                    className="dark:text-gray-300"
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="level" stroke="#9CA3AF" />
                    <YAxis 
                      tickFormatter={(value) => `$${value/1000}k`}
                      domain={[0, 200000]}
                      stroke="#9CA3AF"
                    />
                    <Tooltip 
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Salary']}
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none', color: '#E5E7EB' }}
                    />
                    <Legend />
                    <Bar dataKey="salary" name="Annual Salary" fill="#0077B5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>
          
          <Card className="linkedin-card mb-6 dark:bg-zinc-900 dark:border-zinc-800">
            <div className="p-4 border-b dark:border-zinc-700">
              <h3 className="font-semibold dark:text-white">Salary Distribution</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer salary range distribution</p>
            </div>
            
            <div className="p-4">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={distributionData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                    className="dark:text-gray-300"
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="range" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none', color: '#E5E7EB' }}
                    />
                    <Legend />
                    <Bar dataKey="count" name="Number of Positions" fill="#0A66C2" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>
          
          <Card className="linkedin-card dark:bg-zinc-900 dark:border-zinc-800">
            <div className="p-4 border-b dark:border-zinc-700">
              <h3 className="font-semibold dark:text-white">Top Paying Companies</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">For Software Engineers</p>
            </div>
            
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border dark:border-zinc-700 rounded-lg p-4 dark:bg-zinc-800">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                      <Building className="h-6 w-6 text-linkedin-blue dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium dark:text-white">TechGiant Inc.</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tech Industry</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between py-1">
                      <span className="dark:text-gray-300">Average Salary:</span>
                      <span className="font-semibold dark:text-white">$165,000</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="dark:text-gray-300">Salary Range:</span>
                      <span className="dark:text-gray-300">$130k - $200k</span>
                    </div>
                  </div>
                </div>
                
                <div className="border dark:border-zinc-700 rounded-lg p-4 dark:bg-zinc-800">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                      <Building className="h-6 w-6 text-linkedin-blue dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium dark:text-white">InnovateX</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tech Industry</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between py-1">
                      <span className="dark:text-gray-300">Average Salary:</span>
                      <span className="font-semibold dark:text-white">$158,000</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="dark:text-gray-300">Salary Range:</span>
                      <span className="dark:text-gray-300">$125k - $190k</span>
                    </div>
                  </div>
                </div>
                
                <div className="border dark:border-zinc-700 rounded-lg p-4 dark:bg-zinc-800">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                      <Building className="h-6 w-6 text-linkedin-blue dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium dark:text-white">FutureSoft</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tech Industry</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between py-1">
                      <span className="dark:text-gray-300">Average Salary:</span>
                      <span className="font-semibold dark:text-white">$152,000</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="dark:text-gray-300">Salary Range:</span>
                      <span className="dark:text-gray-300">$120k - $185k</span>
                    </div>
                  </div>
                </div>
                
                <div className="border dark:border-zinc-700 rounded-lg p-4 dark:bg-zinc-800">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                      <Building className="h-6 w-6 text-linkedin-blue dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium dark:text-white">DataFlow Inc.</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tech Industry</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between py-1">
                      <span className="dark:text-gray-300">Average Salary:</span>
                      <span className="font-semibold dark:text-white">$148,000</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="dark:text-gray-300">Salary Range:</span>
                      <span className="dark:text-gray-300">$118k - $178k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="linkedin-card dark:bg-zinc-900 dark:border-zinc-800">
            <div className="p-4 border-b dark:border-zinc-700">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-linkedin-blue dark:text-blue-400 mr-2" />
                <h3 className="font-semibold dark:text-white">Fastest Growing Roles</h3>
              </div>
            </div>
            
            <div className="p-4">
              <ul className="divide-y dark:divide-zinc-700">
                {trendingRoles.map((role, index) => (
                  <li key={index} className="py-3">
                    <div className="flex justify-between">
                      <p className="font-medium dark:text-white">{role.role}</p>
                      <span className="text-green-600 dark:text-green-400 font-medium">{role.growth}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Avg salary: {role.salary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
          
          <Card className="linkedin-card dark:bg-zinc-900 dark:border-zinc-800">
            <div className="p-4 border-b dark:border-zinc-700">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-linkedin-blue dark:text-blue-400 mr-2" />
                <h3 className="font-semibold dark:text-white">Salary by Location</h3>
              </div>
            </div>
            
            <div className="p-4">
              <div className="h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={locationData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                    className="dark:text-gray-300"
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      type="number" 
                      tickFormatter={(value) => `$${value/1000}k`}
                      domain={[0, 200000]}
                      stroke="#9CA3AF"
                    />
                    <YAxis type="category" dataKey="city" stroke="#9CA3AF" />
                    <Tooltip 
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Average Salary']}
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none', color: '#E5E7EB' }}
                    />
                    <Legend />
                    <Bar dataKey="salary" name="Avg Salary" fill="#004471" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>
          
          <Card className="linkedin-card dark:bg-zinc-900 dark:border-zinc-800">
            <div className="p-4">
              <h3 className="font-semibold mb-4 dark:text-white">Benefits Analysis</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm dark:text-gray-300">Health Insurance</span>
                    <span className="text-sm font-medium dark:text-white">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
                    <div className="bg-linkedin-blue dark:bg-blue-500 rounded-full h-2" style={{ width: "92%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm dark:text-gray-300">401(k) Matching</span>
                    <span className="text-sm font-medium dark:text-white">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
                    <div className="bg-linkedin-blue dark:bg-blue-500 rounded-full h-2" style={{ width: "78%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm dark:text-gray-300">Remote Work Options</span>
                    <span className="text-sm font-medium dark:text-white">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
                    <div className="bg-linkedin-blue dark:bg-blue-500 rounded-full h-2" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm dark:text-gray-300">Unlimited PTO</span>
                    <span className="text-sm font-medium dark:text-white">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
                    <div className="bg-linkedin-blue dark:bg-blue-500 rounded-full h-2" style={{ width: "45%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const Ratings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const companies = [
    {
      id: 1,
      name: 'TechInnovate Inc.',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&auto=format&fit=crop',
      rating: 4.6,
      reviews: 1243,
      industry: 'Technology',
      size: '5,000-10,000',
      headquarters: 'San Francisco, CA',
      ceoApproval: 94,
      featured: true,
      description: 'A leading technology company focused on software development and cloud solutions.'
    },
    {
      id: 2,
      name: 'Global Finance Corp',
      logo: 'https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?w=100&h=100&auto=format&fit=crop',
      rating: 3.8,
      reviews: 2156,
      industry: 'Finance',
      size: '10,000+',
      headquarters: 'New York, NY',
      ceoApproval: 78,
      featured: false,
      description: 'One of the world\'s largest financial institutions providing banking and investment services.'
    },
    {
      id: 3,
      name: 'CreativeWorks Design',
      logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=100&auto=format&fit=crop',
      rating: 4.3,
      reviews: 487,
      industry: 'Design',
      size: '1,000-5,000',
      headquarters: 'Austin, TX',
      ceoApproval: 89,
      featured: false,
      description: 'A creative agency specializing in UX/UI design and brand identity.'
    },
    {
      id: 4,
      name: 'HealthPlus Systems',
      logo: 'https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=100&h=100&auto=format&fit=crop',
      rating: 4.1,
      reviews: 923,
      industry: 'Healthcare',
      size: '5,000-10,000',
      headquarters: 'Boston, MA',
      ceoApproval: 86,
      featured: false,
      description: 'Revolutionary healthcare technology provider focused on improving patient outcomes.'
    },
    {
      id: 5,
      name: 'EduTech Solutions',
      logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&auto=format&fit=crop',
      rating: 4.7,
      reviews: 542,
      industry: 'Education Technology',
      size: '1,000-5,000',
      headquarters: 'Chicago, IL',
      ceoApproval: 95,
      featured: true,
      description: 'Transforming education through innovative learning platforms and digital solutions.'
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-gray-300 dark:text-gray-600" />);
      }
    }
    return stars;
  };
  
  return (
    <div>
      <Card className="linkedin-card p-6 mb-6 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <Input 
              placeholder="Search for a company" 
              className="pl-10 h-12 dark:bg-zinc-800 dark:border-zinc-700" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button className="linkedin-button h-12 px-8 dark:bg-blue-600 dark:hover:bg-blue-700">Search</Button>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <Card className="linkedin-card p-4 dark:bg-zinc-900 dark:border-zinc-800">
            <h3 className="font-semibold mb-4 dark:text-white">Filters</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-gray-300">Industry</label>
                <Select>
                  <SelectTrigger className="dark:bg-zinc-800 dark:border-zinc-700">
                    <SelectValue placeholder="All Industries" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-zinc-900 dark:border-zinc-700">
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-gray-300">Company Size</label>
                <Select>
                  <SelectTrigger className="dark:bg-zinc-800 dark:border-zinc-700">
                    <SelectValue placeholder="Any Size" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-zinc-900 dark:border-zinc-700">
                    <SelectItem value="small">1-50 employees</SelectItem>
                    <SelectItem value="medium">51-500 employees</SelectItem>
                    <SelectItem value="large">501-1,000 employees</SelectItem>
                    <SelectItem value="xlarge">1,001-5,000 employees</SelectItem>
                    <SelectItem value="xxlarge">5,000+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-gray-300">Rating</label>
                <Select>
                  <SelectTrigger className="dark:bg-zinc-800 dark:border-zinc-700">
                    <SelectValue placeholder="Any Rating" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-zinc-900 dark:border-zinc-700">
                    <SelectItem value="4plus">4+ stars</SelectItem>
                    <SelectItem value="3plus">3+ stars</SelectItem>
                    <SelectItem value="2plus">2+ stars</SelectItem>
                    <SelectItem value="1plus">1+ stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-gray-300">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Any Location" 
                    className="pl-9 dark:bg-zinc-800 dark:border-zinc-700" 
                  />
                </div>
              </div>
              
              <Button className="w-full linkedin-button dark:bg-blue-600 dark:hover:bg-blue-700">Apply Filters</Button>
            </div>
          </Card>
          
          <Card className="linkedin-card p-4 dark:bg-zinc-900 dark:border-zinc-800">
            <h3 className="font-semibold mb-3 dark:text-white">Popular Companies</h3>
            
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center hover:text-linkedin-blue dark:text-gray-300 dark:hover:text-blue-400">
                  <div className="w-8 h-8 rounded overflow-hidden mr-2">
                    <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&auto=format&fit=crop" alt="Company" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm">TechCorp Inc.</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-linkedin-blue dark:text-gray-300 dark:hover:text-blue-400">
                  <div className="w-8 h-8 rounded overflow-hidden mr-2">
                    <img src="https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?w=100&h=100&auto=format&fit=crop" alt="Company" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm">Global Finance</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-linkedin-blue dark:text-gray-300 dark:hover:text-blue-400">
                  <div className="w-8 h-8 rounded overflow-hidden mr-2">
                    <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=100&auto=format&fit=crop" alt="Company" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm">Innovate Digital</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-linkedin-blue dark:text-gray-300 dark:hover:text-blue-400">
                  <div className="w-8 h-8 rounded overflow-hidden mr-2">
                    <img src="https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=100&h=100&auto=format&fit=crop" alt="Company" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm">HealthCare Plus</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-linkedin-blue dark:text-gray-300 dark:hover:text-blue-400">
                  <div className="w-8 h-8 rounded overflow-hidden mr-2">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&auto=format&fit=crop" alt="Company" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm">Retail Brands Inc.</span>
                </a>
              </li>
            </ul>
          </Card>
        </div>
        
        <div className="lg:col-span-3">
          <div className="mb-4">
            <h2 className="text-xl font-semibold dark:text-white">Top Rated Companies</h2>
            <p className="text-gray-600 dark:text-gray-400">Based on employee reviews</p>
          </div>
          
          <div className="space-y-4">
            {companies.map(company => (
              <Card key={company.id} className={`linkedin-card p-0 overflow-hidden dark:bg-zinc-900 dark:border-zinc-800 ${company.featured ? 'border-2 border-linkedin-blue dark:border-blue-600' : ''}`}>
                {company.featured && (
                  <div className="bg-linkedin-blue dark:bg-blue-700 text-white py-1 px-3 text-xs font-medium">
                    Featured Company
                  </div>
                )}
                
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={company.logo} 
                        alt={company.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="ml-4 flex-grow">
                      <div className="flex flex-wrap justify-between">
                        <h3 className="font-semibold text-lg dark:text-white">{company.name}</h3>
                        <div className="flex items-center">
                          <div className="flex mr-1">
                            {renderStars(company.rating)}
                          </div>
                          <span className="font-medium dark:text-white">{company.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400">{company.description}</p>
                      
                      <div className="mt-3 flex flex-wrap gap-y-2">
                        <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mr-4">
                          <Building className="h-3 w-3 mr-1" />
                          <span>{company.industry}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mr-4">
                          <Users className="h-3 w-3 mr-1" />
                          <span>{company.size} employees</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mr-4">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{company.headquarters}</span>
                        </div>
                        <div className="flex items-center text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded-full">
                          <span>{company.ceoApproval}% CEO Approval</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t dark:border-zinc-700 p-3">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-2">
                      <TabsTrigger value="overview" className="dark:data-[state=active]:text-white">Overview</TabsTrigger>
                      <TabsTrigger value="reviews" className="dark:data-[state=active]:text-white">Reviews</TabsTrigger>
                      <TabsTrigger value="salaries" className="dark:data-[state=active]:text-white">Salaries</TabsTrigger>
                      <TabsTrigger value="interviews" className="dark:data-[state=active]:text-white">Interviews</TabsTrigger>
                      <TabsTrigger value="benefits" className="dark:data-[state=active]:text-white">Benefits</TabsTrigger>
                      <TabsTrigger value="photos" className="dark:data-[state=active]:text-white">Photos</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="pt-2">
                      <div className="flex flex-wrap gap-4">
                        <div className="bg-gray-50 dark:bg-zinc-800 p-3 rounded flex-grow">
                          <h4 className="text-sm font-medium mb-1 dark:text-gray-300">Work-Life Balance</h4>
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-1.5 mr-2">
                              <div className="bg-linkedin-blue dark:bg-blue-500 rounded-full h-1.5" style={{ width: `${company.rating/5*100}%` }}></div>
                            </div>
                            <span className="text-sm dark:text-gray-300">{company.rating}</span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-zinc-800 p-3 rounded flex-grow">
                          <h4 className="text-sm font-medium mb-1 dark:text-gray-300">Career Growth</h4>
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-1.5 mr-2">
                              <div className="bg-linkedin-blue dark:bg-blue-500 rounded-full h-1.5" style={{ width: `${(company.rating-0.3)/5*100}%` }}></div>
                            </div>
                            <span className="text-sm dark:text-gray-300">{(company.rating-0.3).toFixed(1)}</span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-zinc-800 p-3 rounded flex-grow">
                          <h4 className="text-sm font-medium mb-1 dark:text-gray-300">Compensation</h4>
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-1.5 mr-2">
                              <div className="bg-linkedin-blue dark:bg-blue-500 rounded-full h-1.5" style={{ width: `${(company.rating-0.2)/5*100}%` }}></div>
                            </div>
                            <span className="text-sm dark:text-gray-300">{(company.rating-0.2).toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="mt-4 linkedin-button dark:bg-blue-600 dark:hover:bg-blue-700">View Full Profile</Button>
                    </TabsContent>
                    
                    <TabsContent value="reviews">
                      <div className="p-4">
                        <p className="text-gray-600 dark:text-gray-400">Read {company.reviews} reviews from verified employees</p>
                        <Button className="mt-3 linkedin-button dark:bg-blue-600 dark:hover:bg-blue-700">Read Reviews</Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="salaries">
                      <div className="p-4">
                        <div className="mb-3">
                          <h4 className="font-medium dark:text-white">Average Salaries</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Based on verified employee reports</p>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-sm dark:text-gray-300">Software Engineer</span>
                            <span className="text-sm font-medium dark:text-white">$125,000</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-sm dark:text-gray-300">Product Manager</span>
                            <span className="text-sm font-medium dark:text-white">$145,000</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-sm dark:text-gray-300">Data Scientist</span>
                            <span className="text-sm font-medium dark:text-white">$135,000</span>
                          </li>
                        </ul>
                        <Button className="mt-3 linkedin-button dark:bg-blue-600 dark:hover:bg-blue-700">View All Salaries</Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </Card>
            ))}
            
            <div className="text-center py-4">
              <Button variant="outline" className="dark:border-zinc-700 dark:text-gray-300">Load More Companies</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Jobs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('jobs');
  
  // Handle tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(`/jobs/${tab}`);
  };

  return (
    <div className="min-h-screen bg-linkedin-gray dark:bg-zinc-950">
      <CustomNavbar />
      
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        
        
        <Tabs 
          defaultValue={location.pathname.includes('salaries') ? 'salaries' : location.pathname.includes('ratings') ? 'ratings' : 'jobs'} 
          onValueChange={handleTabChange}
        >
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm mb-6 p-2">
            <TabsList className="grid w-full grid-cols-3 h-11">
              <TabsTrigger value="jobs" className="text-sm dark:data-[state=active]:text-white">Job Listings</TabsTrigger>
              <TabsTrigger value="salaries" className="text-sm dark:data-[state=active]:text-white">Salary Insights</TabsTrigger>
              <TabsTrigger value="ratings" className="text-sm dark:data-[state=active]:text-white">Company Ratings</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="jobs">
            <JobListings />
          </TabsContent>
          
          <TabsContent value="salaries">
            <Salaries />
          </TabsContent>
          
          <TabsContent value="ratings">
            <Ratings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Jobs;
