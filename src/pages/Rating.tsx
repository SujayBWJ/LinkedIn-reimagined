
import React, { useState } from 'react';
import Navbar from '@/components/NavBar';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Star, Building, Users, DollarSign, MapPin } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Ratings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const companies = [
    {
      id: 1,
      name: 'TechInnovate Inc.',
      logo: '/placeholder.svg',
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
      logo: '/placeholder.svg',
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
      logo: '/placeholder.svg',
      rating: 4.3,
      reviews: 487,
      industry: 'Design',
      size: '1,000-5,000',
      headquarters: 'Austin, TX',
      ceoApproval: 89,
      featured: false,
      description: 'A creative agency specializing in UX/UI design and brand identity.'
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
        stars.push(<Star key={i} className="h-4 w-4 text-gray-300" />);
      }
    }
    return stars;
  };
  
  return (
    <div className="min-h-screen bg-linkedin-gray">
      <Navbar />
      
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Company Ratings & Reviews</h1>
          <p className="text-gray-600">Research companies and read what employees say</p>
        </div>
        
        <Card className="linkedin-card p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <Input 
                placeholder="Search for a company" 
                className="pl-10 h-12" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button className="linkedin-button h-12 px-8">Search</Button>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <Card className="linkedin-card p-4">
              <h3 className="font-semibold mb-4">Filters</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Industry</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Industries" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Size</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">1-50 employees</SelectItem>
                      <SelectItem value="medium">51-500 employees</SelectItem>
                      <SelectItem value="large">501-1,000 employees</SelectItem>
                      <SelectItem value="xlarge">1,001-5,000 employees</SelectItem>
                      <SelectItem value="xxlarge">5,000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Rating</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4plus">4+ stars</SelectItem>
                      <SelectItem value="3plus">3+ stars</SelectItem>
                      <SelectItem value="2plus">2+ stars</SelectItem>
                      <SelectItem value="1plus">1+ stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input 
                      placeholder="Any Location" 
                      className="pl-9" 
                    />
                  </div>
                </div>
                
                <Button className="w-full">Apply Filters</Button>
              </div>
            </Card>
            
            <Card className="linkedin-card p-4">
              <h3 className="font-semibold mb-3">Popular Companies</h3>
              
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center hover:text-linkedin-blue">
                    <div className="w-8 h-8 rounded overflow-hidden mr-2">
                      <img src="/placeholder.svg" alt="Company" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm">TechCorp Inc.</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center hover:text-linkedin-blue">
                    <div className="w-8 h-8 rounded overflow-hidden mr-2">
                      <img src="/placeholder.svg" alt="Company" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm">Global Finance</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center hover:text-linkedin-blue">
                    <div className="w-8 h-8 rounded overflow-hidden mr-2">
                      <img src="/placeholder.svg" alt="Company" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm">Innovate Digital</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center hover:text-linkedin-blue">
                    <div className="w-8 h-8 rounded overflow-hidden mr-2">
                      <img src="/placeholder.svg" alt="Company" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm">HealthCare Plus</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center hover:text-linkedin-blue">
                    <div className="w-8 h-8 rounded overflow-hidden mr-2">
                      <img src="/placeholder.svg" alt="Company" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm">Retail Brands Inc.</span>
                  </a>
                </li>
              </ul>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Top Rated Companies</h2>
              <p className="text-gray-600">Based on employee reviews</p>
            </div>
            
            <div className="space-y-4">
              {companies.map(company => (
                <Card key={company.id} className={`linkedin-card p-0 overflow-hidden ${company.featured ? 'border-2 border-linkedin-blue' : ''}`}>
                  {company.featured && (
                    <div className="bg-linkedin-blue text-white py-1 px-3 text-xs font-medium">
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
                          <h3 className="font-semibold text-lg">{company.name}</h3>
                          <div className="flex items-center">
                            <div className="flex mr-1">
                              {renderStars(company.rating)}
                            </div>
                            <span className="font-medium">{company.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600">{company.description}</p>
                        
                        <div className="mt-3 flex flex-wrap gap-y-2">
                          <div className="flex items-center text-xs text-gray-600 mr-4">
                            <Building className="h-3 w-3 mr-1" />
                            <span>{company.industry}</span>
                          </div>
                          <div className="flex items-center text-xs text-gray-600 mr-4">
                            <Users className="h-3 w-3 mr-1" />
                            <span>{company.size} employees</span>
                          </div>
                          <div className="flex items-center text-xs text-gray-600 mr-4">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{company.headquarters}</span>
                          </div>
                          <div className="flex items-center text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                            <span>{company.ceoApproval}% CEO Approval</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t p-3">
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-2">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="reviews">Reviews</TabsTrigger>
                        <TabsTrigger value="salaries">Salaries</TabsTrigger>
                        <TabsTrigger value="interviews">Interviews</TabsTrigger>
                        <TabsTrigger value="benefits">Benefits</TabsTrigger>
                        <TabsTrigger value="photos">Photos</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="overview" className="pt-2">
                        <div className="flex flex-wrap gap-4">
                          <div className="bg-gray-50 p-3 rounded flex-grow">
                            <h4 className="text-sm font-medium mb-1">Work-Life Balance</h4>
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-1.5 mr-2">
                                <div className="bg-linkedin-blue rounded-full h-1.5" style={{ width: `${company.rating/5*100}%` }}></div>
                              </div>
                              <span className="text-sm">{company.rating}</span>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-3 rounded flex-grow">
                            <h4 className="text-sm font-medium mb-1">Career Growth</h4>
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-1.5 mr-2">
                                <div className="bg-linkedin-blue rounded-full h-1.5" style={{ width: `${(company.rating-0.3)/5*100}%` }}></div>
                              </div>
                              <span className="text-sm">{(company.rating-0.3).toFixed(1)}</span>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-3 rounded flex-grow">
                            <h4 className="text-sm font-medium mb-1">Compensation</h4>
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-1.5 mr-2">
                                <div className="bg-linkedin-blue rounded-full h-1.5" style={{ width: `${(company.rating-0.2)/5*100}%` }}></div>
                              </div>
                              <span className="text-sm">{(company.rating-0.2).toFixed(1)}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="mt-4 linkedin-button">View Full Profile</Button>
                      </TabsContent>
                      
                      <TabsContent value="reviews">
                        <div className="p-4">
                          <p className="text-gray-600">Read {company.reviews} reviews from verified employees</p>
                          <Button className="mt-3 linkedin-button">Read Reviews</Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </Card>
              ))}
              
              <div className="text-center py-4">
                <Button variant="outline">Load More Companies</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function Rating() {
  return <Rating />;
}