
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Edit,
  Plus,
  Search,
  Mail,
  UserPlus,
  Download,
  Eye,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Profile = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock profile data
  const profile = {
    name: 'John Doe',
    headline: 'Senior Software Engineer at Tech Company | Full Stack Developer | JavaScript | React | Node.js',
    location: 'San Francisco Bay Area',
    connections: 753,
    about: 'Passionate software engineer with 7+ years of experience developing web applications with modern JavaScript frameworks. Focused on creating efficient, scalable, and maintainable code. Strong background in full stack development with particular expertise in React, Node.js, and cloud infrastructure.',
    experience: [
      {
        title: 'Senior Software Engineer',
        company: 'Tech Company',
        duration: 'Jan 2022 - Present',
        location: 'San Francisco, CA',
        description: 'Leading frontend development for the company\'s flagship product. Architecting scalable React components and implementing state management solutions. Mentoring junior developers and conducting code reviews.'
      },
      {
        title: 'Software Engineer',
        company: 'Digital Solutions Inc',
        duration: 'Mar 2019 - Dec 2021',
        location: 'San Francisco, CA',
        description: 'Developed responsive web applications using React, Redux, and Node.js. Collaborated with design and product teams to implement new features and improve user experience.'
      },
      {
        title: 'Junior Developer',
        company: 'Web Innovators',
        duration: 'Jun 2017 - Feb 2019',
        location: 'Portland, OR',
        description: 'Built and maintained client websites using JavaScript, HTML, and CSS. Assisted senior developers with debugging and feature implementation.'
      }
    ],
    education: [
      {
        school: 'University of California, Berkeley',
        degree: 'Bachelor of Science in Computer Science',
        duration: '2013 - 2017',
        activities: 'Computer Science Club, Hackathon Participant'
      }
    ],
    skills: [
      { name: 'JavaScript', endorsements: 87 },
      { name: 'React.js', endorsements: 76 },
      { name: 'Node.js', endorsements: 62 },
      { name: 'TypeScript', endorsements: 55 },
      { name: 'GraphQL', endorsements: 43 },
      { name: 'AWS', endorsements: 38 },
      { name: 'Docker', endorsements: 31 },
      { name: 'MongoDB', endorsements: 29 }
    ],
    recommendations: 12,
    accomplishments: [
      { type: 'certification', name: 'AWS Certified Developer - Associate', issuer: 'Amazon Web Services', date: 'Issued Jan 2023' },
      { type: 'project', name: 'Open Source Contributor', description: 'Active contributor to React ecosystem libraries' },
      { type: 'language', name: 'English (Native)', proficiency: 'Native or bilingual' },
      { type: 'language', name: 'Spanish', proficiency: 'Professional working proficiency' }
    ]
  };
  
  return (
    <div className="min-h-screen bg-linkedin-lightGrey dark:bg-linkedin-darkGrey">
      <NavBar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        {/* Profile Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search within profile"
              className="pl-10 pr-3 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-linkedin-blue focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Profile Header */}
        <Card className="linkedin-card mb-6 overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-linkedin-blue to-blue-400"></div>
          <CardContent className="p-6 relative">
            <div className="absolute -top-12 left-6">
              <div className="h-24 w-24 rounded-full bg-white p-1 border-4 border-white dark:border-linkedin-darkGrey">
                <div className="h-full w-full rounded-full bg-linkedin-blue text-white flex items-center justify-center">
                  <span className="text-2xl font-bold">JD</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold">{profile.name}</h1>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">{profile.headline}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{profile.location}</span>
                    <span className="mx-1">•</span>
                    <a href="#" className="text-linkedin-blue dark:text-linkedin-lightBlue hover:underline">
                      {profile.connections} connections
                    </a>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button>
                          <UserPlus className="h-4 w-4 mr-2" />
                          Connect
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Send connection request</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-4">
                <Card className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-3">
                    <p className="text-sm font-medium">Tech Company</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Current workplace</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-3">
                    <p className="text-sm font-medium">University of California, Berkeley</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Education</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Tabs Navigation for Profile Sections */}
        <Tabs defaultValue="about" className="mb-6">
          <TabsList className="w-full bg-white dark:bg-linkedin-darkGrey border border-gray-200 dark:border-gray-800 rounded-lg">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="accomplishments">Accomplishments</TabsTrigger>
          </TabsList>
        </Tabs>
        
        {/* About Section */}
        <Card className="linkedin-card mb-6" id="about">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl">About</CardTitle>
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">{profile.about}</p>
          </CardContent>
        </Card>
        
        {/* Experience Section */}
        <Card className="linkedin-card mb-6" id="experience">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl">Experience</CardTitle>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {profile.experience.map((exp, index) => (
              <div key={index} className={index > 0 ? 'pt-6 border-t border-gray-200 dark:border-gray-700' : ''}>
                <div className="flex">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                      <Briefcase className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">{exp.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration} • {exp.location}</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        {/* Education Section */}
        <Card className="linkedin-card mb-6" id="education">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl">Education</CardTitle>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {profile.education.map((edu, index) => (
              <div key={index} className={index > 0 ? 'pt-6 border-t border-gray-200 dark:border-gray-700' : ''}>
                <div className="flex">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">{edu.school}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{edu.degree}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</p>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Activities: {edu.activities}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        {/* Skills Section */}
        <Card className="linkedin-card mb-6" id="skills">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl">Skills</CardTitle>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.skills.map((skill, index) => (
                <div key={index} className="flex justify-between items-center p-3 border border-gray-200 dark:border-gray-700 rounded-md">
                  <div>
                    <h3 className="font-medium">{skill.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{skill.endorsements} endorsements</p>
                  </div>
                  <Button variant="outline" size="sm">Endorse</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Recommendations Section */}
        <Card className="linkedin-card mb-6" id="recommendations">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl">Recommendations</CardTitle>
            <Button variant="ghost">
              <Plus className="h-4 w-4 mr-2" />
              Request a recommendation
            </Button>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {profile.recommendations} colleagues have recommended {profile.name}
              </p>
              <Button variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                View recommendations
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Accomplishments Section */}
        <Card className="linkedin-card mb-6" id="accomplishments">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl">Accomplishments</CardTitle>
            <Button variant="ghost" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Certifications */}
              <div>
                <h3 className="font-medium mb-3">Certifications</h3>
                {profile.accomplishments.filter(a => a.type === 'certification').map((cert, index) => (
                  <div key={index} className="flex items-start mb-3">
                    <div className="h-10 w-10 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 mr-3">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="7" />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">{cert.name}</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{cert.issuer}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Projects */}
              <Separator className="my-4" />
              <div>
                <h3 className="font-medium mb-3">Projects</h3>
                {profile.accomplishments.filter(a => a.type === 'project').map((project, index) => (
                  <div key={index} className="flex items-start mb-3">
                    <div className="h-10 w-10 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 mr-3">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">{project.name}</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Languages */}
              <Separator className="my-4" />
              <div>
                <h3 className="font-medium mb-3">Languages</h3>
                {profile.accomplishments.filter(a => a.type === 'language').map((language, index) => (
                  <div key={index} className="mb-3">
                    <h4 className="font-medium">{language.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{language.proficiency}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Profile Summary/Actions */}
        <Card className="linkedin-card">
          <CardContent className="p-4">
            <div className="flex justify-center space-x-4">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Save as PDF
              </Button>
              <Button>
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
