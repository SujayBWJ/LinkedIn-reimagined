import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bookmark, ChevronDown, Filter, MapPin, Search, Star, X, Building, ThumbsUp, ThumbsDown, Heart, MessageSquare } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

const Jobs = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [selectedJob, setSelectedJob] = useState<number | null>(1);
  const [selectedCompany, setSelectedCompany] = useState<number | null>(1);
  
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
  
  // Mock company reviews data
  const companyReviews = [
    {
      id: 1,
      name: "Tech Solutions Inc",
      logo: "TS",
      rating: 4.7,
      reviews: 1284,
      industry: "Information Technology",
      size: "1,001-5,000 employees",
      type: "Public Company",
      founded: 2005,
      headquarters: "San Francisco, CA",
      website: "techsolutions.com",
      overview: "Tech Solutions Inc is a leading technology company specializing in AI and machine learning solutions for enterprise customers.",
      specialties: ["Artificial Intelligence", "Machine Learning", "Cloud Computing", "Enterprise Software"],
      featuredReviews: [
        {
          id: 101,
          title: "Great work environment and challenging projects",
          rating: 5,
          position: "Senior Software Engineer",
          employment: "Current Employee - 2 years",
          location: "San Francisco, CA",
          date: "April 12, 2025",
          pros: "Excellent work-life balance, competitive compensation, latest technologies, strong engineering culture, and great opportunities for growth.",
          cons: "Some teams face tight deadlines that can create pressure, and the pace of work can be demanding for new employees.",
          helpfulCount: 87
        },
        {
          id: 102,
          title: "Good benefits but difficult management",
          rating: 3,
          position: "Product Manager",
          employment: "Former Employee - 3 years",
          location: "San Francisco, CA",
          date: "March 5, 2025",
          pros: "Great benefits and compensation package. Some really talented engineers and designers to work with.",
          cons: "Middle management is disorganized and there's often conflicting priorities between departments.",
          helpfulCount: 53
        }
      ],
      ratings: {
        overall: 4.7,
        workLifeBalance: 4.5,
        compensation: 4.8,
        jobSecurity: 4.6,
        management: 4.2,
        culture: 4.9
      }
    },
    {
      id: 2,
      name: "Global Financial Group",
      logo: "GF",
      rating: 3.9,
      reviews: 3562,
      industry: "Financial Services",
      size: "10,000+ employees",
      type: "Public Company",
      founded: 1985,
      headquarters: "New York, NY",
      website: "globalfinancial.com",
      overview: "Global Financial Group is one of the world's leading financial services corporations, providing banking, insurance, investments, and retirement services.",
      specialties: ["Banking", "Asset Management", "Wealth Management", "Insurance"],
      featuredReviews: [
        {
          id: 201,
          title: "Stable career but traditional culture",
          rating: 4,
          position: "Financial Analyst",
          employment: "Current Employee - 4 years",
          location: "New York, NY",
          date: "March 28, 2025",
          pros: "Stable work environment, good benefits, opportunities for internal movement, and respected name in the industry.",
          cons: "Traditional corporate culture that can be slow to adopt change. Work can be repetitive in some departments.",
          helpfulCount: 124
        },
        {
          id: 202,
          title: "High pressure but high rewards",
          rating: 3,
          position: "Investment Banking Associate",
          employment: "Former Employee - 1 year",
          location: "London, UK",
          date: "February 15, 2025",
          pros: "Excellent compensation and bonus structure. Great learning opportunities and exposure to major deals.",
          cons: "Extremely long hours and high pressure environment. Work-life balance is practically non-existent in some divisions.",
          helpfulCount: 98
        }
      ],
      ratings: {
        overall: 3.9,
        workLifeBalance: 3.2,
        compensation: 4.5,
        jobSecurity: 4.3,
        management: 3.7,
        culture: 3.8
      }
    },
    {
      id: 3,
      name: "Creative Design Studio",
      logo: "CD",
      rating: 4.5,
      reviews: 872,
      industry: "Design",
      size: "501-1,000 employees",
      type: "Private Company",
      founded: 2010,
      headquarters: "Austin, TX",
      website: "creativedesign.com",
      overview: "Creative Design Studio is an award-winning design firm that specializes in UI/UX design, branding, and digital experiences.",
      specialties: ["UI/UX Design", "Brand Identity", "Digital Marketing", "Web Development"],
      featuredReviews: [
        {
          id: 301,
          title: "Creative freedom and supportive team",
          rating: 5,
          position: "Senior UI Designer",
          employment: "Current Employee - 3 years",
          location: "Austin, TX",
          date: "May 1, 2025",
          pros: "Creative freedom, collaborative environment, cutting-edge projects, and supportive management that values design.",
          cons: "Client deadlines can sometimes create crunch periods. Some processes could be more streamlined.",
          helpfulCount: 67
        },
        {
          id: 302,
          title: "Great for junior designers, limited growth",
          rating: 4,
          position: "Junior Designer",
          employment: "Current Employee - 1 year",
          location: "Remote",
          date: "April 19, 2025",
          pros: "Excellent mentorship program, diverse projects, flexible remote work policy, and good starting salary.",
          cons: "Limited clear path for advancement beyond senior designer roles. Company is growing fast which creates some growing pains.",
          helpfulCount: 42
        }
      ],
      ratings: {
        overall: 4.5,
        workLifeBalance: 4.3,
        compensation: 4.0,
        jobSecurity: 4.2,
        management: 4.6,
        culture: 4.8
      }
    },
    {
      id: 4,
      name: "Analytics Insights Group",
      logo: "AI",
      rating: 4.2,
      reviews: 643,
      industry: "Data & Analytics",
      size: "201-500 employees",
      type: "Private Company",
      founded: 2012,
      headquarters: "Boston, MA",
      website: "analyticsinsights.com",
      overview: "Analytics Insights Group helps organizations transform their data into actionable business intelligence through advanced analytics and AI solutions.",
      specialties: ["Data Science", "Business Intelligence", "Machine Learning", "Statistical Analysis"],
      featuredReviews: [
        {
          id: 401,
          title: "Exciting work with cutting-edge tech",
          rating: 4,
          position: "Data Scientist",
          employment: "Current Employee - 2 years",
          location: "Boston, MA",
          date: "March 3, 2025",
          pros: "Working with cutting-edge technologies and methodologies. Challenging problems to solve and good technical leadership.",
          cons: "Communication between technical and business teams could be improved. Sometimes project requirements change frequently.",
          helpfulCount: 59
        },
        {
          id: 402,
          title: "Great learning experience but demanding",
          rating: 4,
          position: "BI Analyst",
          employment: "Former Employee - 2 years",
          location: "Chicago, IL",
          date: "February 25, 2025",
          pros: "Excellent training opportunities and exposure to diverse industries. Strong technical team with lots to learn from.",
          cons: "Client-facing roles can be demanding with tough deadlines and high expectations. Some teams are understaffed.",
          helpfulCount: 38
        }
      ],
      ratings: {
        overall: 4.2,
        workLifeBalance: 3.8,
        compensation: 4.3,
        jobSecurity: 4.0,
        management: 4.2,
        culture: 4.4
      }
    }
  ];

  // Salary data
  const industryData = [
    { name: 'Technology', salary: 120000 },
    { name: 'Healthcare', salary: 95000 },
    { name: 'Finance', salary: 110000 },
    { name: 'Education', salary: 65000 },
    { name: 'Retail', salary: 58000 },
    { name: 'Manufacturing', salary: 72000 },
    { name: 'Consulting', salary: 98000 },
    { name: 'Media', salary: 85000 },
  ];

  const roleData = [
    { name: 'Software Engineer', salary: 125000 },
    { name: 'Product Manager', salary: 135000 },
    { name: 'Data Scientist', salary: 130000 },
    { name: 'UX Designer', salary: 110000 },
    { name: 'Marketing Manager', salary: 95000 },
    { name: 'Sales Director', salary: 145000 },
    { name: 'HR Specialist', salary: 82000 },
    { name: 'Financial Analyst', salary: 105000 },
  ];

  const experienceData = [
    { name: 'Entry Level (0-2 yrs)', salary: 70000 },
    { name: 'Mid Level (3-5 yrs)', salary: 95000 },
    { name: 'Senior (6-10 yrs)', salary: 130000 },
    { name: 'Manager (7+ yrs)', salary: 150000 },
    { name: 'Director (10+ yrs)', salary: 190000 },
    { name: 'Executive (15+ yrs)', salary: 250000 },
  ];

  const locationData = [
    { name: 'San Francisco', salary: 142000 },
    { name: 'New York', salary: 135000 },
    { name: 'Seattle', salary: 128000 },
    { name: 'Boston', salary: 125000 },
    { name: 'Austin', salary: 115000 },
    { name: 'Chicago', salary: 110000 },
    { name: 'Denver', salary: 105000 },
    { name: 'Atlanta', salary: 95000 },
  ];

  const salaryRangeData = [
    { range: '$0-50K', count: 12 },
    { range: '$50K-75K', count: 25 },
    { range: '$75K-100K', count: 38 },
    { range: '$100K-125K', count: 42 },
    { range: '$125K-150K', count: 35 },
    { range: '$150K-200K', count: 24 },
    { range: '$200K+', count: 15 },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  // Get currently selected job
  const currentJob = jobListings.find(job => job.id === selectedJob);
  const currentCompany = companyReviews.find(company => company.id === selectedCompany);
  
  return (
    <div className="min-h-screen bg-linkedin-lightGrey dark:bg-linkedin-darkGrey">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">        
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
                        <div className="mt-1 text-sm text-gray-500 dark:text-gray-500">
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Companies List */}
              <div className="col-span-1">
                <Card className="linkedin-card">
                  <CardHeader className="pb-2">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search companies"
                        className="pl-10 pr-3 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-linkedin-blue focus:border-transparent"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-1">
                      {companyReviews.map((company) => (
                        <button
                          key={company.id}
                          onClick={() => setSelectedCompany(company.id)}
                          className={`w-full text-left p-4 hover:bg-gray-100 dark:hover:bg-gray-800/70 border-l-4 ${selectedCompany === company.id ? 'border-linkedin-blue bg-blue-50 dark:bg-blue-900/20' : 'border-transparent'}`}
                        >
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3 bg-linkedin-blue text-white">
                              <AvatarFallback>{company.logo}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{company.name}</h3>
                              <div className="flex items-center text-sm">
                                <div className="flex items-center text-yellow-500 mr-1">
                                  <Star className="h-4 w-4 fill-current" />
                                </div>
                                <span className="font-medium mr-1">{company.rating}</span>
                                <span className="text-gray-500 dark:text-gray-400">({company.reviews} reviews)</span>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Company Details */}
              {currentCompany && (
                <div className="col-span-2">
                  <Card className="linkedin-card mb-4">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Avatar className="h-16 w-16 mr-4 bg-linkedin-blue text-white">
                            <AvatarFallback>{currentCompany.logo}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle>{currentCompany.name}</CardTitle>
                            <div className="flex items-center mt-1">
                              <div className="flex items-center text-yellow-500 mr-1">
                                <Star className="h-4 w-4 fill-current" />
                              </div>
                              <span className="font-medium mr-1">{currentCompany.rating}</span>
                              <span className="text-gray-500 dark:text-gray-400">({currentCompany.reviews} reviews)</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Star className="h-4 w-4 mr-2" />
                            Follow
                          </Button>
                          <Button size="sm" className="bg-linkedin-blue hover:bg-linkedin-darkBlue">
                            See Jobs
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h3 className="font-medium mb-2">Company Details</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex">
                              <span className="text-gray-500 dark:text-gray-400 w-28">Industry:</span>
                              <span>{currentCompany.industry}</span>
                            </div>
                            <div className="flex">
                              <span className="text-gray-500 dark:text-gray-400 w-28">Size:</span>
                              <span>{currentCompany.size}</span>
                            </div>
                            <div className="flex">
                              <span className="text-gray-500 dark:text-gray-400 w-28">Type:</span>
                              <span>{currentCompany.type}</span>
                            </div>
                            <div className="flex">
                              <span className="text-gray-500 dark:text-gray-400 w-28">Founded:</span>
                              <span>{currentCompany.founded}</span>
                            </div>
                            <div className="flex">
                              <span className="text-gray-500 dark:text-gray-400 w-28">Headquarters:</span>
                              <span>{currentCompany.headquarters}</span>
                            </div>
                            <div className="flex">
                              <span className="text-gray-500 dark:text-gray-400 w-28">Website:</span>
                              <a href={`https://${currentCompany.website}`} target="_blank" rel="noopener noreferrer" className="text-linkedin-blue dark:text-linkedin-lightBlue hover:underline">{currentCompany.website}</a>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Rating Breakdown</h3>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <span className="text-sm text-gray-600 dark:text-gray-400 w-40">Overall</span>
                              <div className="flex items-center flex-1">
                                <Progress value={currentCompany.ratings.overall * 20} className="h-2 flex-1 mr-2" />
                                <span className="text-sm font-medium">{currentCompany.ratings.overall}</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm text-gray-600 dark:text-gray-400 w-40">Work/Life Balance</span>
                              <div className="flex items-center flex-1">
                                <Progress value={currentCompany.ratings.workLifeBalance * 20} className="h-2 flex-1 mr-2" />
                                <span className="text-sm font-medium">{currentCompany.ratings.workLifeBalance}</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm text-gray-600 dark:text-gray-400 w-40">Compensation</span>
                              <div className="flex items-center flex-1">
                                <Progress value={currentCompany.ratings.compensation * 20} className="h-2 flex-1 mr-2" />
                                <span className="text-sm font-medium">{currentCompany.ratings.compensation}</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm text-gray-600 dark:text-gray-400 w-40">Job Security</span>
                              <div className="flex items-center flex-1">
                                <Progress value={currentCompany.ratings.jobSecurity * 20} className="h-2 flex-1 mr-2" />
                                <span className="text-sm font-medium">{currentCompany.ratings.jobSecurity}</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm text-gray-600 dark:text-gray-400 w-40">Management</span>
                              <div className="flex items-center flex-1">
                                <Progress value={currentCompany.ratings.management * 20} className="h-2 flex-1 mr-2" />
                                <span className="text-sm font-medium">{currentCompany.ratings.management}</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm text-gray-600 dark:text-gray-400 w-40">Culture</span>
                              <div className="flex items-center flex-1">
                                <Progress value={currentCompany.ratings.culture * 20} className="h-2 flex-1 mr-2" />
                                <span className="text-sm font-medium">{currentCompany.ratings.culture}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="mb-4">
                        <h3 className="font-medium mb-2">About</h3>
                        <p className="text-gray-700 dark:text-gray-300">{currentCompany.overview}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="font-medium mb-2">Specialties</h3>
                        <div className="flex flex-wrap gap-2">
                          {currentCompany.specialties.map((specialty, index) => (
                            <Badge key={index} variant="outline" className="bg-gray-50 dark:bg-gray-800">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div>
                        <h3 className="font-medium mb-4">Featured Reviews</h3>
                        <div className="space-y-6">
                          {currentCompany.featuredReviews.map((review) => (
                            <div key={review.id} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="font-medium">{review.title}</h4>
                                <div className="flex items-center text-yellow-500">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'text-gray-300 dark:text-gray-600'}`} 
                                    />
                                  ))}
                                </div>
                              </div>
                              <div className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                                <div>{review.position} | {review.employment}</div>
                                <div>{review.location} | {review.date}</div>
                              </div>
                              
                              <div className="mb-3">
                                <div className="text-sm font-medium mb-1 text-green-600 dark:text-green-400">Pros</div>
                                <p className="text-sm text-gray-700 dark:text-gray-300">{review.pros}</p>
                              </div>
                              
                              <div className="mb-3">
                                <div className="text-sm font-medium mb-1 text-red-600 dark:text-red-400">Cons</div>
                                <p className="text-sm text-gray-700 dark:text-gray-300">{review.cons}</p>
                              </div>
                              
                              <div className="flex items-center justify-between mt-4 text-sm">
                                <div className="text-gray-500 dark:text-gray-400">
                                  {review.helpfulCount} people found this helpful
                                </div>
                                <div className="flex gap-2">
                                  <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600 dark:text-gray-300">
                                    <ThumbsUp className="h-4 w-4 mr-1" />
                                    Helpful
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600 dark:text-gray-300">
                                    <ThumbsDown className="h-4 w-4 mr-1" />
                                    Not Helpful
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <Button>See All Reviews</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="salaries" className="mt-0">
            <div className="grid grid-cols-1 gap-6">
              <Card className="linkedin-card mb-4">
                <CardHeader>
                  <CardTitle className="text-xl">Salary Explorer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-medium mb-3">Salaries by Industry</h3>
                      <div className="h-80">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg h-full">
                          <div className="h-full">
                            {industryData.map((item, index) => (
                              <div key={index} className="flex items-center justify-between mb-3">
                                <span className="text-sm">{item.name}</span>
                                <span className="font-medium">{formatCurrency(item.salary)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3">Salaries by Role</h3>
                      <div className="h-80">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg h-full">
                          <div className="h-full">
                            {roleData.map((item, index) => (
                              <div key={index} className="flex items-center justify-between mb-3">
                                <span className="text-sm">{item.name}</span>
                                <span className="font-medium">{formatCurrency(item.salary)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-medium mb-3">Salaries by Experience Level</h3>
                      <div className="h-80">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg h-full">
                          <div className="h-full">
                            {experienceData.map((item, index) => (
                              <div key={index} className="flex items-center justify-between mb-3">
                                <span className="text-sm">{item.name}</span>
                                <span className="font-medium">{formatCurrency(item.salary)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3">Salaries by Location</h3>
                      <div className="h-80">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg h-full">
                          <div className="h-full">
                            {locationData.map((item, index) => (
                              <div key={index} className="flex items-center justify-between mb-3">
                                <span className="text-sm">{item.name}</span>
                                <span className="font-medium">{formatCurrency(item.salary)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="mb-6">
                    <h3 className="font-medium mb-6 text-lg">Salary Distribution</h3>
                    <div className="h-80">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg h-full">
                        <div className="h-full">
                          {salaryRangeData.map((item, index) => (
                            <div key={index} className="mb-3">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm">{item.range}</span>
                                <span className="text-sm text-gray-500">{item.count}%</span>
                              </div>
                              <Progress value={item.count} className="h-2" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4 text-lg">Salary Negotiation Tips</h3>
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 mb-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-800 rounded-full p-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300">Research thoroughly</h4>
                          <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">
                            Use this salary data to understand the market rate for your role, experience level, and location.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                      <li>Know your market value based on experience, skills, and location</li>
                      <li>Practice your negotiation talking points ahead of time</li>
                      <li>Consider the entire compensation package, not just the base salary</li>
                      <li>Be ready to highlight your accomplishments and the value you bring</li>
                      <li>Don't be afraid to counter-offer if the initial offer is below expectations</li>
                    </ul>
                    
                    <div className="mt-6 flex justify-center">
                      <Button className="bg-linkedin-blue hover:bg-linkedin-darkBlue">
                        Get Personalized Salary Insights
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Jobs;
