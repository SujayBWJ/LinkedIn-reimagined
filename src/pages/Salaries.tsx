
import React, { useState } from 'react';
import Navbar from '@/components/NavBar';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, DollarSign, TrendingUp, MapPin, Building } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
    <div className="min-h-screen bg-linkedin-gray">
      <Navbar />
      
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Salary Insights</h1>
          <p className="text-gray-600">Explore salary trends and compare compensation packages</p>
        </div>
        
        <Card className="linkedin-card p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Search Salary Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Job title or role" 
                className="pl-9" 
                value={searchRole}
                onChange={(e) => setSearchRole(e.target.value)}
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Location" 
                className="pl-9" 
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
          </div>
          
          <Button className="linkedin-button">Search Salaries</Button>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="linkedin-card mb-6">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Software Engineer Salary by Experience</h3>
                <p className="text-sm text-gray-600">Average base salary in United States</p>
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
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="level" />
                      <YAxis 
                        tickFormatter={(value) => `$${value/1000}k`}
                        domain={[0, 200000]}
                      />
                      <Tooltip 
                        formatter={(value) => [`$${value.toLocaleString()}`, 'Salary']}
                      />
                      <Legend />
                      <Bar dataKey="salary" name="Annual Salary" fill="#0077B5" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
            
            <Card className="linkedin-card mb-6">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Salary Distribution</h3>
                <p className="text-sm text-gray-600">Software Engineer salary range distribution</p>
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
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="range" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" name="Number of Positions" fill="#0A66C2" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
            
            <Card className="linkedin-card">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Top Paying Companies</h3>
                <p className="text-sm text-gray-600">For Software Engineers</p>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center mr-3">
                        <Building className="h-6 w-6 text-linkedin-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium">TechGiant Inc.</h4>
                        <p className="text-sm text-gray-600">Tech Industry</p>
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="flex justify-between py-1">
                        <span>Average Salary:</span>
                        <span className="font-semibold">$165,000</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Salary Range:</span>
                        <span>$130k - $200k</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center mr-3">
                        <Building className="h-6 w-6 text-linkedin-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium">InnovateX</h4>
                        <p className="text-sm text-gray-600">Tech Industry</p>
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="flex justify-between py-1">
                        <span>Average Salary:</span>
                        <span className="font-semibold">$158,000</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Salary Range:</span>
                        <span>$125k - $190k</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center mr-3">
                        <Building className="h-6 w-6 text-linkedin-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium">FutureSoft</h4>
                        <p className="text-sm text-gray-600">Tech Industry</p>
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="flex justify-between py-1">
                        <span>Average Salary:</span>
                        <span className="font-semibold">$152,000</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Salary Range:</span>
                        <span>$120k - $185k</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center mr-3">
                        <Building className="h-6 w-6 text-linkedin-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium">DataFlow Inc.</h4>
                        <p className="text-sm text-gray-600">Tech Industry</p>
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="flex justify-between py-1">
                        <span>Average Salary:</span>
                        <span className="font-semibold">$148,000</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Salary Range:</span>
                        <span>$118k - $178k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="linkedin-card">
              <div className="p-4 border-b">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-linkedin-blue mr-2" />
                  <h3 className="font-semibold">Fastest Growing Roles</h3>
                </div>
              </div>
              
              <div className="p-4">
                <ul className="divide-y">
                  {trendingRoles.map((role, index) => (
                    <li key={index} className="py-3">
                      <div className="flex justify-between">
                        <p className="font-medium">{role.role}</p>
                        <span className="text-green-600 font-medium">{role.growth}</span>
                      </div>
                      <p className="text-sm text-gray-600">Avg salary: {role.salary}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
            
            <Card className="linkedin-card">
              <div className="p-4 border-b">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-linkedin-blue mr-2" />
                  <h3 className="font-semibold">Salary by Location</h3>
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
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        type="number" 
                        tickFormatter={(value) => `$${value/1000}k`}
                        domain={[0, 200000]}
                      />
                      <YAxis type="category" dataKey="city" />
                      <Tooltip 
                        formatter={(value) => [`$${value.toLocaleString()}`, 'Average Salary']}
                      />
                      <Legend />
                      <Bar dataKey="salary" name="Avg Salary" fill="#004471" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
            
            <Card className="linkedin-card">
              <div className="p-4">
                <h3 className="font-semibold mb-4">Benefits Analysis</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Health Insurance</span>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-linkedin-blue rounded-full h-2" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">401(k) Matching</span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-linkedin-blue rounded-full h-2" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Remote Work Options</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-linkedin-blue rounded-full h-2" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Unlimited PTO</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-linkedin-blue rounded-full h-2" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SalariesPage() {
  return <Salaries />;
}