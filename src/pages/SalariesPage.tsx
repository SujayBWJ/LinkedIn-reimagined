
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DollarSign, Search, MapPin, Building } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

const SalariesPage = () => {
  const [activeTab, setActiveTab] = useState('explore');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [selectedRole, setSelectedRole] = useState('software-engineer');
  
  // Mock data for salary information
  const salaryData = {
    'software-engineer': {
      title: 'Software Engineer',
      averageSalary: 120000,
      experienceLevels: [
        { name: 'Junior', salary: 90000 },
        { name: 'Mid-Level', salary: 125000 },
        { name: 'Senior', salary: 160000 },
        { name: 'Lead', salary: 180000 },
        { name: 'Principal', salary: 210000 }
      ],
      salaryDistribution: [
        { range: '70-80K', count: 5 },
        { range: '80-90K', count: 12 },
        { range: '90-100K', count: 18 },
        { range: '100-110K', count: 25 },
        { range: '110-120K', count: 35 },
        { range: '120-130K', count: 42 },
        { range: '130-140K', count: 38 },
        { range: '140-150K', count: 30 },
        { range: '150-160K', count: 22 },
        { range: '160-170K', count: 15 },
        { range: '170-180K', count: 10 },
        { range: '180-190K', count: 8 },
        { range: '190-200K', count: 5 },
        { range: '200K+', count: 7 }
      ],
      topCompanies: [
        { name: 'Tech Innovations Inc.', salary: 135000 },
        { name: 'Global Solutions', salary: 125000 },
        { name: 'NextGen Systems', salary: 142000 },
        { name: 'Innovative Tech', salary: 138000 },
        { name: 'Digital Dynamics', salary: 132000 }
      ],
      topCities: [
        { name: 'San Francisco, CA', salary: 145000 },
        { name: 'Seattle, WA', salary: 135000 },
        { name: 'New York, NY', salary: 140000 },
        { name: 'Austin, TX', salary: 125000 },
        { name: 'Boston, MA', salary: 130000 }
      ],
      growthTrend: [
        { year: 2020, salary: 105000 },
        { year: 2021, salary: 112000 },
        { year: 2022, salary: 118000 },
        { year: 2023, salary: 123000 },
        { year: 2024, salary: 130000 },
        { year: 2025, salary: 138000 }
      ]
    },
    'product-manager': {
      title: 'Product Manager',
      averageSalary: 135000,
      experienceLevels: [
        { name: 'Junior', salary: 95000 },
        { name: 'Mid-Level', salary: 135000 },
        { name: 'Senior', salary: 175000 },
        { name: 'Lead', salary: 195000 },
        { name: 'Director', salary: 230000 }
      ],
      salaryDistribution: [
        { range: '80-90K', count: 3 },
        { range: '90-100K', count: 8 },
        { range: '100-110K', count: 12 },
        { range: '110-120K', count: 18 },
        { range: '120-130K', count: 25 },
        { range: '130-140K', count: 38 },
        { range: '140-150K', count: 45 },
        { range: '150-160K', count: 40 },
        { range: '160-170K', count: 32 },
        { range: '170-180K', count: 25 },
        { range: '180-190K', count: 18 },
        { range: '190-200K', count: 12 },
        { range: '200-210K', count: 8 },
        { range: '210K+', count: 10 }
      ],
      topCompanies: [
        { name: 'Tech Innovations Inc.', salary: 145000 },
        { name: 'Global Solutions', salary: 140000 },
        { name: 'NextGen Systems', salary: 150000 },
        { name: 'Innovative Tech', salary: 148000 },
        { name: 'Digital Dynamics', salary: 142000 }
      ],
      topCities: [
        { name: 'San Francisco, CA', salary: 155000 },
        { name: 'Seattle, WA', salary: 145000 },
        { name: 'New York, NY', salary: 150000 },
        { name: 'Austin, TX', salary: 135000 },
        { name: 'Boston, MA', salary: 140000 }
      ],
      growthTrend: [
        { year: 2020, salary: 118000 },
        { year: 2021, salary: 124000 },
        { year: 2022, salary: 128000 },
        { year: 2023, salary: 132000 },
        { year: 2024, salary: 139000 },
        { year: 2025, salary: 148000 }
      ]
    },
    'data-scientist': {
      title: 'Data Scientist',
      averageSalary: 130000,
      experienceLevels: [
        { name: 'Junior', salary: 95000 },
        { name: 'Mid-Level', salary: 130000 },
        { name: 'Senior', salary: 170000 },
        { name: 'Lead', salary: 190000 },
        { name: 'Principal', salary: 215000 }
      ],
      salaryDistribution: [
        { range: '80-90K', count: 4 },
        { range: '90-100K', count: 10 },
        { range: '100-110K', count: 15 },
        { range: '110-120K', count: 22 },
        { range: '120-130K', count: 35 },
        { range: '130-140K', count: 40 },
        { range: '140-150K', count: 38 },
        { range: '150-160K', count: 30 },
        { range: '160-170K', count: 20 },
        { range: '170-180K', count: 15 },
        { range: '180-190K', count: 10 },
        { range: '190-200K', count: 7 },
        { range: '200K+', count: 9 }
      ],
      topCompanies: [
        { name: 'Tech Innovations Inc.', salary: 140000 },
        { name: 'Global Solutions', salary: 135000 },
        { name: 'NextGen Systems', salary: 148000 },
        { name: 'Innovative Tech', salary: 145000 },
        { name: 'Digital Dynamics', salary: 138000 }
      ],
      topCities: [
        { name: 'San Francisco, CA', salary: 150000 },
        { name: 'Seattle, WA', salary: 145000 },
        { name: 'New York, NY', salary: 148000 },
        { name: 'Austin, TX', salary: 135000 },
        { name: 'Boston, MA', salary: 140000 }
      ],
      growthTrend: [
        { year: 2020, salary: 115000 },
        { year: 2021, salary: 120000 },
        { year: 2022, salary: 125000 },
        { year: 2023, salary: 130000 },
        { year: 2024, salary: 138000 },
        { year: 2025, salary: 145000 }
      ]
    },
    'ux-designer': {
      title: 'UX Designer',
      averageSalary: 110000,
      experienceLevels: [
        { name: 'Junior', salary: 85000 },
        { name: 'Mid-Level', salary: 110000 },
        { name: 'Senior', salary: 145000 },
        { name: 'Lead', salary: 170000 },
        { name: 'Principal', salary: 195000 }
      ],
      salaryDistribution: [
        { range: '70-80K', count: 6 },
        { range: '80-90K', count: 15 },
        { range: '90-100K', count: 25 },
        { range: '100-110K', count: 35 },
        { range: '110-120K', count: 40 },
        { range: '120-130K', count: 32 },
        { range: '130-140K', count: 25 },
        { range: '140-150K', count: 18 },
        { range: '150-160K', count: 12 },
        { range: '160-170K', count: 8 },
        { range: '170-180K', count: 5 },
        { range: '180K+', count: 3 }
      ],
      topCompanies: [
        { name: 'Tech Innovations Inc.', salary: 120000 },
        { name: 'Global Solutions', salary: 115000 },
        { name: 'NextGen Systems', salary: 125000 },
        { name: 'Innovative Tech', salary: 122000 },
        { name: 'Digital Dynamics', salary: 118000 }
      ],
      topCities: [
        { name: 'San Francisco, CA', salary: 130000 },
        { name: 'Seattle, WA', salary: 125000 },
        { name: 'New York, NY', salary: 128000 },
        { name: 'Austin, TX', salary: 115000 },
        { name: 'Boston, MA', salary: 118000 }
      ],
      growthTrend: [
        { year: 2020, salary: 95000 },
        { year: 2021, salary: 100000 },
        { year: 2022, salary: 105000 },
        { year: 2023, salary: 112000 },
        { year: 2024, salary: 118000 },
        { year: 2025, salary: 125000 }
      ]
    }
  };
  
  const selectedSalaryData = salaryData[selectedRole] || salaryData['software-engineer'];
  
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  
  const formatTooltip = (value) => {
    return formatCurrency(value);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 shadow-lg rounded">
          <p className="font-medium">{label}</p>
          <p className="text-linkedin-blue dark:text-linkedin-lightBlue">{formatCurrency(payload[0].value)}</p>
        </div>
      );
    }
    return null;
  };
  
  // Popular job roles for search suggestions
  const popularRoles = [
    "Software Engineer",
    "Product Manager",
    "Data Scientist",
    "UX Designer",
    "Marketing Manager",
    "Financial Analyst",
    "Human Resources Manager"
  ];
  
  // Popular locations for search suggestions
  const popularLocations = [
    "San Francisco, CA",
    "New York, NY",
    "Seattle, WA",
    "Austin, TX",
    "Boston, MA",
    "Chicago, IL",
    "Los Angeles, CA"
  ];

  return (
    <div className="min-h-screen bg-linkedin-lightGrey dark:bg-linkedin-darkGrey">
      <NavBar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="space-y-6">
          {/* Salary Search */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h1 className="text-2xl font-bold mb-6">Salary Explorer</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium mb-1">Job Title</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="role"
                      placeholder="Job title, skills, or company"
                      className="pl-9"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </div>
                  {role && (
                    <div className="mt-1 p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10">
                      <ul>
                        {popularRoles
                          .filter(item => item.toLowerCase().includes(role.toLowerCase()))
                          .map((item, index) => (
                            <li 
                              key={index} 
                              className="px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                              onClick={() => setRole(item)}
                            >
                              {item}
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium mb-1">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="location"
                      placeholder="City, state, or remote"
                      className="pl-9"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  {location && (
                    <div className="mt-1 p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10">
                      <ul>
                        {popularLocations
                          .filter(item => item.toLowerCase().includes(location.toLowerCase()))
                          .map((item, index) => (
                            <li 
                              key={index} 
                              className="px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                              onClick={() => setLocation(item)}
                            >
                              {item}
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button className="bg-linkedin-blue hover:bg-linkedin-darkBlue text-white px-10">
                  Search Salaries
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Job Role Selector */}
          <div className="bg-white dark:bg-linkedin-darkGrey rounded-lg shadow p-4 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-medium mb-2 sm:mb-0">Explore salaries by job role:</h2>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="w-full sm:w-[250px]">
                  <SelectValue placeholder="Select a job role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="software-engineer">Software Engineer</SelectItem>
                  <SelectItem value="product-manager">Product Manager</SelectItem>
                  <SelectItem value="data-scientist">Data Scientist</SelectItem>
                  <SelectItem value="ux-designer">UX Designer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Salary Data Tabs */}
          <Tabs defaultValue="explore" value={activeTab} onValueChange={setActiveTab}>
            <div className="bg-white dark:bg-linkedin-darkGrey rounded-lg shadow mb-6">
              <TabsList className="w-full justify-start border-b border-gray-200 dark:border-gray-700 p-0 h-auto">
                <TabsTrigger value="explore" className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none">Overview</TabsTrigger>
                <TabsTrigger value="distribution" className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none">Salary Distribution</TabsTrigger>
                <TabsTrigger value="companies" className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none">By Company</TabsTrigger>
                <TabsTrigger value="locations" className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none">By Location</TabsTrigger>
                <TabsTrigger value="trends" className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none">Trends</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Overview Tab */}
            <TabsContent value="explore" className="space-y-6 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{selectedSalaryData.title} Salary Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-linkedin-blue dark:text-linkedin-lightBlue mb-2">
                      {formatCurrency(selectedSalaryData.averageSalary)}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Average base salary per year
                    </div>
                  </div>
                  
                  <h3 className="font-medium text-lg mb-3">Salary by Experience Level</h3>
                  
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={selectedSalaryData.experienceLevels}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis 
                        tickFormatter={(value) => `$${value/1000}K`} 
                        domain={[0, 'dataMax + 20000']}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="salary" fill="#0A66C2" />
                    </BarChart>
                  </ResponsiveContainer>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Entry Level</h4>
                      <div className="text-2xl font-bold text-linkedin-blue dark:text-linkedin-lightBlue">
                        {formatCurrency(selectedSalaryData.experienceLevels[0].salary)}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {selectedSalaryData.experienceLevels[0].name} {selectedSalaryData.title}
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Mid-Level</h4>
                      <div className="text-2xl font-bold text-linkedin-blue dark:text-linkedin-lightBlue">
                        {formatCurrency(selectedSalaryData.experienceLevels[1].salary)}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {selectedSalaryData.experienceLevels[1].name} {selectedSalaryData.title}
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Senior Level</h4>
                      <div className="text-2xl font-bold text-linkedin-blue dark:text-linkedin-lightBlue">
                        {formatCurrency(selectedSalaryData.experienceLevels[2].salary)}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {selectedSalaryData.experienceLevels[2].name} {selectedSalaryData.title}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Salary Distribution Tab */}
            <TabsContent value="distribution" className="space-y-6 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{selectedSalaryData.title} Salary Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    The distribution shows the number of reported salaries across different salary ranges for {selectedSalaryData.title} positions.
                  </p>
                  
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                      data={selectedSalaryData.salaryDistribution}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="range" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#0A66C2" />
                    </BarChart>
                  </ResponsiveContainer>
                  
                  <div className="mt-6 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Salary Range</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Most {selectedSalaryData.title} salaries fall between {selectedSalaryData.salaryDistribution[1].range} and {selectedSalaryData.salaryDistribution[selectedSalaryData.salaryDistribution.length - 2].range} per year, with the highest concentration in the {selectedSalaryData.salaryDistribution.reduce((prev, current) => (prev.count > current.count) ? prev : current).range} range.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Companies Tab */}
            <TabsContent value="companies" className="space-y-6 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Top Paying Companies for {selectedSalaryData.title}s</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Compare average salaries for {selectedSalaryData.title}s across top companies in the industry.
                  </p>
                  
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={selectedSalaryData.topCompanies}
                      layout="vertical"
                      margin={{
                        top: 20,
                        right: 30,
                        left: 100,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" tickFormatter={(value) => `$${value/1000}K`} />
                      <YAxis dataKey="name" type="category" width={80} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="salary" fill="#0A66C2" />
                    </BarChart>
                  </ResponsiveContainer>
                  
                  <div className="mt-6 space-y-4">
                    {selectedSalaryData.topCompanies.map((company, index) => (
                      <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 mr-3 flex items-center justify-center">
                              <Building className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            </div>
                            <div>
                              <div className="font-medium">{company.name}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">{selectedSalaryData.title}</div>
                            </div>
                          </div>
                          <div className="font-bold text-linkedin-blue dark:text-linkedin-lightBlue">
                            {formatCurrency(company.salary)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Locations Tab */}
            <TabsContent value="locations" className="space-y-6 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{selectedSalaryData.title} Salaries by Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Compare average salaries for {selectedSalaryData.title}s across different cities and regions.
                  </p>
                  
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={selectedSalaryData.topCities}
                      layout="vertical"
                      margin={{
                        top: 20,
                        right: 30,
                        left: 100,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" tickFormatter={(value) => `$${value/1000}K`} />
                      <YAxis dataKey="name" type="category" width={100} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="salary" fill="#0A66C2" />
                    </BarChart>
                  </ResponsiveContainer>
                  
                  <div className="mt-6 space-y-4">
                    {selectedSalaryData.topCities.map((city, index) => (
                      <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 mr-3 flex items-center justify-center">
                              <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            </div>
                            <div>
                              <div className="font-medium">{city.name}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">{selectedSalaryData.title}</div>
                            </div>
                          </div>
                          <div className="font-bold text-linkedin-blue dark:text-linkedin-lightBlue">
                            {formatCurrency(city.salary)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Cost of Living Impact</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Salaries for {selectedSalaryData.title}s are highest in tech hubs like San Francisco and New York, reflecting the higher cost of living in these areas. When adjusted for cost of living, cities like Austin and Seattle often offer better relative compensation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Trends Tab */}
            <TabsContent value="trends" className="space-y-6 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{selectedSalaryData.title} Salary Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Review how {selectedSalaryData.title} salaries have changed over time and projected future trends.
                  </p>
                  
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                      data={selectedSalaryData.growthTrend}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis tickFormatter={(value) => `$${value/1000}K`} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="salary" 
                        stroke="#0A66C2" 
                        strokeWidth={2} 
                        dot={{ stroke: '#0A66C2', strokeWidth: 2, fill: '#0A66C2' }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Growth Rate</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {selectedSalaryData.title} salaries have grown at an average rate of 5-7% annually over the past 5 years, outpacing the general inflation rate.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Future Outlook</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Based on current trends, {selectedSalaryData.title} salaries are projected to continue growing steadily over the next few years, especially for those with specialized skills in emerging technologies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Skills That Boost {selectedSalaryData.title} Salaries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { skill: "Machine Learning", boost: "+15%" },
                      { skill: "Cloud Architecture", boost: "+12%" },
                      { skill: "Data Analytics", boost: "+10%" },
                      { skill: "UI/UX Design", boost: "+8%" },
                      { skill: "Project Management", boost: "+7%" },
                      { skill: "Agile Methodologies", boost: "+5%" }
                    ].map((item, index) => (
                      <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h4 className="font-medium text-linkedin-blue dark:text-linkedin-lightBlue">{item.skill}</h4>
                        <div className="text-lg font-bold mt-2">{item.boost}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Salary premium</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SalariesPage;
