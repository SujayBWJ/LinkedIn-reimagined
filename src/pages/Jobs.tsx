
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bookmark, ChevronDown, Filter, MapPin, Search, Star, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Jobs = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [selectedJob, setSelectedJob] = useState<number | null>(1);
  
  // Mock job listings data
  const jobListings = [
    { 
      id: 1, 
      title: 'Senior Frontend Developer', 
      company: 'Tech Solutions Inc', 
      location: 'San Francisco, CA (Remote)', 
      posted: '2 days ago',
      applicants: 32,
      salary: '$120,000 - $150,000',
      description: 'We are looking for an experienced Frontend Developer to join our team. You will be responsible for building user-facing features, optimizing applications for maximum speed, and implementing responsive design.',
      requirements: [
        'At least 4 years experience with JavaScript frameworks (React preferred)',
        'Strong knowledge of HTML5, CSS3, and modern web standards',
        'Experience with responsive design and cross-browser compatibility',
        'Familiarity with RESTful APIs and GraphQL',
        'Bachelor\'s degree in Computer Science or related field'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Comprehensive health, dental, and vision insurance',
        'Unlimited PTO policy',
        'Remote-first culture with quarterly team retreats',
        '401(k) matching'
      ]
    },
    { 
      id: 2, 
      title: 'Product Manager', 
      company: 'Innovative Apps', 
      location: 'New York, NY (Hybrid)', 
      posted: '1 week ago',
      applicants: 78,
      salary: '$130,000 - $160,000',
      description: 'We\'re seeking a Product Manager to lead our product development process from conception to launch. You\'ll work with cross-functional teams to define product strategy and roadmap.',
      requirements: [
        '3+ years experience as a Product Manager',
        'Strong analytical and problem-solving skills',
        'Experience with agile methodologies',
        'Excellent communication and stakeholder management skills',
        'Bachelor\'s degree in Business, Engineering, or related field'
      ],
      benefits: [
        'Competitive compensation package',
        'Full benefits coverage',
        'Flexible work arrangements',
        'Professional development budget',
        'Generous parental leave policy'
      ]
    },
    { 
      id: 3, 
      title: 'UI/UX Designer', 
      company: 'Creative Design Studio', 
      location: 'Austin, TX (On-site)', 
      posted: '3 days ago',
      applicants: 45,
      salary: '$90,000 - $120,000',
      description: 'Join our creative team to design beautiful, intuitive interfaces for web and mobile applications. You\'ll collaborate with developers and stakeholders to create exceptional user experiences.',
      requirements: [
        'Portfolio demonstrating UI/UX projects',
        'Proficiency with design tools (Figma, Sketch, Adobe XD)',
        'Understanding of user-centered design principles',
        'Experience conducting user research and usability testing',
        'Strong visual design skills'
      ],
      benefits: [
        'Competitive salary',
        'Health, dental, and vision insurance',
        'Creative workspace with latest equipment',
        'Continuing education stipend',
        'Regular team building events'
      ]
    },
    { 
      id: 4, 
      title: 'Data Scientist', 
      company: 'Analytics Insights Group', 
      location: 'Remote (US-based)', 
      posted: '1 day ago',
      applicants: 19,
      salary: '$115,000 - $145,000',
      description: 'We are looking for a Data Scientist to analyze complex data sets and build predictive models. You will help extract valuable insights from data to inform business decisions.',
      requirements: [
        'MS or PhD in Statistics, Mathematics, Computer Science, or related field',
        'Experience with Python, R, or similar data analysis tools',
        'Strong background in machine learning techniques',
        'Experience with SQL and database management',
        'Excellent problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary based on experience',
        'Comprehensive benefits package',
        'Flexible remote work policy',
        'Professional development opportunities',
        'Company-wide wellness program'
      ]
    }
  ];
  
  // Mock application tracker data
  const applications = [
    { 
      id: 1, 
      title: 'Full Stack Developer', 
      company: 'Tech Innovations Inc', 
      status: 'Applied', 
      date: 'May 5, 2025' 
    },
    { 
      id: 2, 
      title: 'Senior Product Designer', 
      company: 'Design Solutions', 
      status: 'Interview', 
      date: 'May 2, 2025' 
    },
    { 
      id: 3, 
      title: 'Marketing Manager', 
      company: 'Brand Builders', 
      status: 'Saved', 
      date: 'May 1, 2025' 
    }
  ];
  
  // Get currently selected job
  const currentJob = jobListings.find(job => job.id === selectedJob);
  
  return (
    <div className="min-h-screen bg-linkedin-lightGrey dark:bg-linkedin-darkGrey">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Jobs</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Find the right job or internship for you
          </p>
        </div>
        
        <Tabs defaultValue="discover" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full bg-white dark:bg-linkedin-darkGrey border border-gray-200 dark:border-gray-800 mb-6">
            <TabsTrigger value="discover" className="flex-1">Discover</TabsTrigger>
            <TabsTrigger value="applications" className="flex-1">Applications</TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1">Company Reviews</TabsTrigger>
            <TabsTrigger value="salaries" className="flex-1">Salaries</TabsTrigger>
          </TabsList>
          
          <TabsContent value="discover" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Job Search Filters */}
              <div className="col-span-1">
                <Card className="linkedin-card sticky top-20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span>Search Filters</span>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <X className="h-4 w-4" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Role</label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Any role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="engineering">Engineering</SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="product">Product Management</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="sales">Sales</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Company Location</label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Anywhere" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="remote">Remote Only</SelectItem>
                            <SelectItem value="europe">Europe</SelectItem>
                            <SelectItem value="asia">Asia</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Salary Range</label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Any salary" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="0-50k">$0 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                            <SelectItem value="150k+">$150,000+</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Industry</label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="All industries" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="tech">Technology</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Experience Level</label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Any experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="internship">Internship</SelectItem>
                            <SelectItem value="entry">Entry Level</SelectItem>
                            <SelectItem value="associate">Associate</SelectItem>
                            <SelectItem value="mid-senior">Mid-Senior Level</SelectItem>
                            <SelectItem value="director">Director</SelectItem>
                            <SelectItem value="executive">Executive</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Job Type</label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="All job types" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="full-time">Full-time</SelectItem>
                            <SelectItem value="part-time">Part-time</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                            <SelectItem value="temporary">Temporary</SelectItem>
                            <SelectItem value="internship">Internship</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="pt-2">
                      <Button className="w-full bg-linkedin-blue hover:bg-linkedin-darkBlue">
                        Apply Filters
                      </Button>
                      <Button variant="link" className="w-full mt-2 text-linkedin-blue dark:text-linkedin-lightBlue">
                        Reset All
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Job Listings */}
              <div className="col-span-1">
                <Card className="linkedin-card">
                  <CardHeader className="pb-2">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search job titles or keywords"
                        className="pl-10 pr-3 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-linkedin-blue focus:border-transparent"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-1">
                      {jobListings.map((job) => (
                        <button
                          key={job.id}
                          onClick={() => setSelectedJob(job.id)}
                          className={`w-full text-left p-4 hover:bg-gray-100 dark:hover:bg-gray-800/70 border-l-4 ${selectedJob === job.id ? 'border-linkedin-blue bg-blue-50 dark:bg-blue-900/20' : 'border-transparent'}`}
                        >
                          <h3 className="font-medium text-lg">{job.title}</h3>
                          <p className="text-gray-700 dark:text-gray-300">{job.company}</p>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex justify-between items-center mt-2 text-sm">
                            <span className="text-gray-500 dark:text-gray-400">{job.posted}</span>
                            <span className="text-gray-500 dark:text-gray-400">{job.applicants} applicants</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Job Details */}
              <div className="col-span-1">
                {currentJob && (
                  <Card className="linkedin-card sticky top-20">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl font-bold">{currentJob.title}</h2>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Bookmark className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                          <Button size="sm" className="bg-linkedin-blue hover:bg-linkedin-darkBlue">
                            Apply
                          </Button>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="font-medium">{currentJob.company}</h3>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{currentJob.location}</span>
                        </div>
                        <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          Posted {currentJob.posted} • {currentJob.applicants} applicants
                        </div>
                      </div>
                      
                      <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-md border border-green-100 dark:border-green-800">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Salary Range</div>
                        <div className="text-lg font-semibold text-green-700 dark:text-green-500">{currentJob.salary}</div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="mb-4">
                        <h3 className="font-semibold mb-2">Job Description</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{currentJob.description}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="font-semibold mb-2">Requirements</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {currentJob.requirements.map((req, index) => (
                            <li key={index} className="text-sm text-gray-700 dark:text-gray-300">{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="font-semibold mb-2">Benefits</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {currentJob.benefits.map((benefit, index) => (
                            <li key={index} className="text-sm text-gray-700 dark:text-gray-300">{benefit}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-6 flex flex-col sm:flex-row sm:justify-between space-y-3 sm:space-y-0 sm:space-x-3">
                        <Button className="bg-linkedin-blue hover:bg-linkedin-darkBlue">
                          Apply Now
                        </Button>
                        <Button variant="outline">
                          <Star className="h-4 w-4 mr-2" />
                          Follow Company
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="applications" className="mt-0">
            <Card className="linkedin-card">
              <CardHeader>
                <CardTitle>Application Tracker</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="saved">Saved</TabsTrigger>
                    <TabsTrigger value="applied">Applied</TabsTrigger>
                    <TabsTrigger value="interviewing">Interviewing</TabsTrigger>
                  </TabsList>
                  
                  <div className="mt-6 space-y-4">
                    {applications.map(app => (
                      <div key={app.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                        <div>
                          <h3 className="font-medium">{app.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{app.company}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Applied on {app.date}</p>
                        </div>
                        <div className="mt-3 sm:mt-0">
                          <Badge className={`
                            ${app.status === 'Applied' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' : ''}
                            ${app.status === 'Interview' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' : ''}
                            ${app.status === 'Saved' ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300' : ''}
                          `}>
                            {app.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-0">
            <Card className="linkedin-card">
              <CardHeader>
                <CardTitle>Company Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center py-10 text-gray-500 dark:text-gray-400">
                  Company reviews section will be implemented here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="salaries" className="mt-0">
            <Card className="linkedin-card">
              <CardHeader>
                <CardTitle>Salary Explorer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center py-10 text-gray-500 dark:text-gray-400">
                  Salary comparison and analytics section will be implemented here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Jobs;
