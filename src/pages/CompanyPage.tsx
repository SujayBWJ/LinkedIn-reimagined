
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MapPin, Users, DollarSign, Camera, ThumbsUp, ThumbsDown } from 'lucide-react';

const CompanyPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock company data
  const company = {
    id,
    name: 'Tech Innovations Inc.',
    logo: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    industry: 'Information Technology',
    size: '1,000-5,000 employees',
    founded: 2005,
    hq: 'San Francisco, CA',
    website: 'https://techinnovations.example.com',
    about: "Tech Innovations Inc. is a leading technology company specializing in AI-powered solutions for businesses. Founded in 2005, we've grown to over 2,000 employees worldwide with offices in San Francisco, New York, London, and Singapore.",
    rating: 4.3,
    reviewCount: 856,
    ceoApproval: 92,
    ceo: {
      name: 'Sarah Johnson',
      title: 'CEO',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
    },
    culture: [
      { value: 'Innovation', score: 92 },
      { value: 'Work-Life Balance', score: 85 },
      { value: 'Diversity', score: 89 },
      { value: 'Career Growth', score: 83 }
    ],
    reviews: [
      {
        id: 1,
        title: 'Great culture and work-life balance',
        rating: 5,
        pros: 'Excellent benefits, flexible work arrangements, supportive management',
        cons: 'Growth can be slow in some departments',
        position: 'Software Engineer',
        location: 'San Francisco, CA',
        date: 'April 15, 2025',
        helpful: 42
      },
      {
        id: 2,
        title: 'Innovative company with room for growth',
        rating: 4,
        pros: 'Cutting-edge projects, smart colleagues, good compensation',
        cons: 'Communication between teams could be improved',
        position: 'Product Manager',
        location: 'Remote',
        date: 'March 22, 2025',
        helpful: 28
      },
      {
        id: 3,
        title: 'Decent workplace but demanding hours',
        rating: 3,
        pros: 'Good learning opportunities, competitive pay, modern office',
        cons: 'Long hours, high pressure during release cycles',
        position: 'UX Designer',
        location: 'New York, NY',
        date: 'February 10, 2025',
        helpful: 15
      }
    ],
    salaries: [
      { title: 'Software Engineer', average: 120000, range: '95K-150K', count: 124 },
      { title: 'Product Manager', average: 135000, range: '110K-165K', count: 76 },
      { title: 'UX Designer', average: 110000, range: '90K-130K', count: 53 },
      { title: 'Data Scientist', average: 130000, range: '105K-160K', count: 42 },
      { title: 'Marketing Manager', average: 95000, range: '80K-120K', count: 38 }
    ],
    benefits: [
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Unlimited PTO',
      '401(k) matching',
      'Professional development budget',
      'Wellness programs',
      'Parental leave'
    ],
    photos: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    openPositions: [
      { id: 101, title: 'Senior Software Engineer', location: 'San Francisco, CA', remote: true, posted: '2d ago' },
      { id: 102, title: 'Product Manager', location: 'New York, NY', remote: false, posted: '1w ago' },
      { id: 103, title: 'UX/UI Designer', location: 'Remote', remote: true, posted: '3d ago' },
      { id: 104, title: 'Data Scientist', location: 'London, UK', remote: false, posted: '5d ago' }
    ]
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= Math.floor(rating);
      const halfFilled = !filled && i <= Math.ceil(rating) && rating % 1 !== 0;
      
      stars.push(
        <Star 
          key={i} 
          className={`h-4 w-4 ${filled ? 'fill-yellow-400 text-yellow-400' : halfFilled ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-linkedin-lightGrey dark:bg-linkedin-darkGrey">
      <NavBar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {/* Company Header */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <Avatar className="h-24 w-24 mr-6">
                <AvatarImage src={company.logo} alt={company.name} />
                <AvatarFallback className="text-2xl">{company.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <div className="mt-4 md:mt-0">
                <h1 className="text-2xl font-bold">{company.name}</h1>
                <div className="flex items-center mt-2">
                  <div className="flex mr-3">
                    {renderStars(company.rating)}
                  </div>
                  <span className="text-sm font-medium">{company.rating}</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{company.reviewCount} reviews</span>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{company.hq}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{company.size}</span>
                  </div>
                  <div>
                    Founded {company.founded}
                  </div>
                  <div>
                    <a href={company.website} target="_blank" rel="noreferrer" className="text-linkedin-blue dark:text-linkedin-lightBlue hover:underline">
                      Company Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Tabs Navigation */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <div className="bg-white dark:bg-linkedin-darkGrey rounded-lg shadow mb-6">
            <TabsList className="w-full justify-start border-b border-gray-200 dark:border-gray-700 p-0 h-auto overflow-x-auto">
              <TabsTrigger value="overview" className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none">Overview</TabsTrigger>
              <TabsTrigger value="reviews" className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none">Reviews</TabsTrigger>
              <TabsTrigger value="salaries" className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none">Salaries</TabsTrigger>
              <TabsTrigger value="jobs" className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none">Jobs</TabsTrigger>
              <TabsTrigger value="benefits" className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none">Benefits</TabsTrigger>
              <TabsTrigger value="photos" className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none">Photos</TabsTrigger>
            </TabsList>
          </div>
          
          {/* Overview Content */}
          <TabsContent value="overview" className="space-y-6 mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">About {company.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{company.about}</p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Avatar className="h-16 w-16 mr-4">
                      <AvatarImage src={company.ceo.avatar} alt={company.ceo.name} />
                      <AvatarFallback>{company.ceo.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-lg">{company.ceo.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{company.ceo.title}</p>
                      <div className="flex items-center mt-1">
                        <ThumbsUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-sm font-medium">{company.ceoApproval}% Approval</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Company Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {company.culture.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{item.value}</span>
                          <span className="text-sm font-medium">{item.score}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div 
                            className="bg-linkedin-blue dark:bg-linkedin-lightBlue h-2.5 rounded-full" 
                            style={{ width: `${item.score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Open Positions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {company.openPositions.map((job) => (
                    <li key={job.id} className="py-3 first:pt-0 last:pb-0">
                      <Link to={`/jobs/${job.id}`} className="block hover:bg-gray-50 dark:hover:bg-gray-800/50 -mx-4 px-4 py-2 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <h3 className="text-linkedin-blue dark:text-linkedin-lightBlue font-medium">{job.title}</h3>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{job.posted}</span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {job.location}
                          {job.remote && <span className="ml-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium px-2 py-0.5 rounded">Remote</span>}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-center">
                  <Link to="/jobs" className="text-linkedin-blue dark:text-linkedin-lightBlue font-medium hover:underline">
                    View all positions
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Reviews Content */}
          <TabsContent value="reviews" className="space-y-6 mt-0">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Company Reviews</CardTitle>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {renderStars(company.rating)}
                  </div>
                  <span className="font-medium">{company.rating} out of 5</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {company.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-lg">{review.title}</h3>
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {review.position} | {review.location} | {review.date}
                      </div>
                      
                      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">Pros</h4>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">{review.pros}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-red-600 dark:text-red-400 mb-2">Cons</h4>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">{review.cons}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400 mr-3">
                          {review.helpful} people found this helpful
                        </span>
                        <div className="flex space-x-2">
                          <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue text-sm">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Helpful
                          </button>
                          <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue text-sm">
                            <ThumbsDown className="h-4 w-4 mr-1" />
                            Not Helpful
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Salaries Content */}
          <TabsContent value="salaries" className="space-y-6 mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Salary Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {company.salaries.map((salary, index) => (
                    <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{salary.title}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{salary.count} salaries</span>
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center">
                          <DollarSign className="h-5 w-5 text-green-500 mr-1" />
                          <span className="text-xl font-bold">${(salary.average/1000).toFixed(0)}K</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">per year</span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Range: ${salary.range}
                        </div>
                      </div>
                      
                      <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                        <div className="bg-green-500 h-2 rounded-full" style={{ 
                          width: '70%',
                          marginLeft: '15%'
                        }}></div>
                      </div>
                      <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                        <span>Min</span>
                        <span>Avg</span>
                        <span>Max</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Jobs Content */}
          <TabsContent value="jobs" className="space-y-6 mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Current Openings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {company.openPositions.map((job) => (
                    <Link
                      key={job.id}
                      to={`/jobs/${job.id}`}
                      className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition"
                    >
                      <h3 className="font-medium text-linkedin-blue dark:text-linkedin-lightBlue">{job.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
                        <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {job.location}
                          {job.remote && <span className="ml-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium px-2 py-0.5 rounded">Remote</span>}
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">Posted {job.posted}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link to="/jobs" className="text-linkedin-blue dark:text-linkedin-lightBlue font-medium hover:underline">
                    See all jobs at {company.name}
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Benefits Content */}
          <TabsContent value="benefits" className="space-y-6 mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Employee Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {company.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 h-5 w-5 text-green-500 flex-shrink-0">✓</div>
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Photos Content */}
          <TabsContent value="photos" className="space-y-6 mt-0">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Office Photos</CardTitle>
                <div className="flex items-center">
                  <Camera className="h-4 w-4 mr-1" />
                  <span className="text-sm">{company.photos.length} Photos</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {company.photos.map((photo, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden">
                      <img 
                        src={photo} 
                        alt={`${company.name} office`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyPage;
