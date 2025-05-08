
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pencil, MapPin, Briefcase, Building, Link2, Calendar, Book, Award, Search } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock user data
  const user = {
    name: 'John Doe',
    title: 'Software Engineer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    connections: 586,
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    about: 'Passionate software engineer with 5+ years of experience in full-stack development. Currently working on AI-powered solutions at Tech Innovations Inc. Previously at Global Tech and StartupX. Graduate of Computer Science from Stanford University.',
    experience: [
      {
        id: 1,
        title: 'Senior Software Engineer',
        company: 'Tech Innovations Inc.',
        location: 'San Francisco, CA',
        startDate: 'January 2023',
        endDate: 'Present',
        description: 'Leading the development of AI-powered solutions for enterprise customers. Managing a team of 5 engineers and collaborating with product and design teams to deliver high-quality software products.'
      },
      {
        id: 2,
        title: 'Software Engineer',
        company: 'Global Tech',
        location: 'San Francisco, CA',
        startDate: 'March 2020',
        endDate: 'December 2022',
        description: 'Developed and maintained web applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and improved performance by 40%.'
      },
      {
        id: 3,
        title: 'Junior Developer',
        company: 'StartupX',
        location: 'Palo Alto, CA',
        startDate: 'June 2018',
        endDate: 'February 2020',
        description: 'Worked on front-end development using React and Angular. Collaborated with UX designers to implement responsive designs.'
      }
    ],
    education: [
      {
        id: 1,
        school: 'Stanford University',
        degree: 'Master of Science in Computer Science',
        field: 'Artificial Intelligence',
        startDate: '2016',
        endDate: '2018',
        activities: 'AI Research Group, Hackathon Club'
      },
      {
        id: 2,
        school: 'University of California, Berkeley',
        degree: 'Bachelor of Science in Computer Science',
        field: 'Software Engineering',
        startDate: '2012',
        endDate: '2016',
        activities: 'Coding Club President, Hackathon Winner 2015'
      }
    ],
    skills: [
      { name: 'JavaScript', endorsements: 78 },
      { name: 'React.js', endorsements: 65 },
      { name: 'Node.js', endorsements: 59 },
      { name: 'Python', endorsements: 47 },
      { name: 'Machine Learning', endorsements: 42 },
      { name: 'AWS', endorsements: 38 },
      { name: 'TypeScript', endorsements: 35 },
      { name: 'MongoDB', endorsements: 29 },
      { name: 'SQL', endorsements: 27 },
      { name: 'Docker', endorsements: 24 }
    ],
    certifications: [
      {
        id: 1,
        name: 'AWS Certified Solutions Architect',
        organization: 'Amazon Web Services',
        issued: 'December 2022',
        expires: 'December 2025',
        credentialId: 'AWS-SA-123456'
      },
      {
        id: 2,
        name: 'Google Professional Cloud Developer',
        organization: 'Google Cloud',
        issued: 'March 2022',
        expires: 'March 2024',
        credentialId: 'GCP-DEV-789012'
      },
      {
        id: 3,
        name: 'MongoDB Certified Developer',
        organization: 'MongoDB Inc.',
        issued: 'July 2021',
        expires: 'July 2024',
        credentialId: 'MDB-DEV-345678'
      }
    ],
    projects: [
      {
        id: 1,
        name: 'AI Content Generator',
        description: 'Developed an AI-powered content generation tool using GPT-3 for marketing teams.',
        startDate: 'January 2023',
        endDate: 'June 2023',
        url: 'https://github.com/johndoe/ai-content-gen'
      },
      {
        id: 2,
        name: 'E-commerce Platform',
        description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB.',
        startDate: 'April 2022',
        endDate: 'December 2022',
        url: 'https://github.com/johndoe/ecommerce-platform'
      },
      {
        id: 3,
        name: 'Task Management App',
        description: 'Created a task management application with real-time collaboration features.',
        startDate: 'September 2021',
        endDate: 'March 2022',
        url: 'https://github.com/johndoe/task-manager'
      }
    ],
    recommendations: [
      {
        id: 1,
        from: {
          name: 'Sarah Johnson',
          title: 'Product Manager at Tech Innovations Inc.',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
        },
        text: 'John is an exceptional engineer who consistently delivers high-quality code. His problem-solving skills and ability to collaborate cross-functionally make him a valuable asset to any team. I had the pleasure of working with him on several key projects, and his technical expertise was instrumental in their success.',
        date: 'January 2024'
      },
      {
        id: 2,
        from: {
          name: 'Michael Lee',
          title: 'CTO at Global Tech',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
        },
        text: 'Having managed John for over two years, I can confidently say he is one of the most dedicated and skilled developers I\'ve worked with. He not only excels in technical implementation but also mentors junior developers effectively. His contributions significantly improved our product quality and team productivity.',
        date: 'November 2022'
      }
    ]
  };

  // Filter content based on search term
  const filterContent = (content, term) => {
    if (!term) return content;
    
    const lowercaseTerm = term.toLowerCase();
    
    // Filter based on section
    switch (activeTab) {
      case 'about':
        return content.toLowerCase().includes(lowercaseTerm) ? content : null;
      
      case 'experience':
        return user.experience.filter(exp => 
          exp.title.toLowerCase().includes(lowercaseTerm) ||
          exp.company.toLowerCase().includes(lowercaseTerm) ||
          exp.description.toLowerCase().includes(lowercaseTerm)
        );
      
      case 'education':
        return user.education.filter(edu => 
          edu.school.toLowerCase().includes(lowercaseTerm) ||
          edu.degree.toLowerCase().includes(lowercaseTerm) ||
          edu.field.toLowerCase().includes(lowercaseTerm)
        );
      
      case 'skills':
        return user.skills.filter(skill => 
          skill.name.toLowerCase().includes(lowercaseTerm)
        );
      
      case 'certifications':
        return user.certifications.filter(cert => 
          cert.name.toLowerCase().includes(lowercaseTerm) ||
          cert.organization.toLowerCase().includes(lowercaseTerm)
        );
      
      case 'projects':
        return user.projects.filter(project => 
          project.name.toLowerCase().includes(lowercaseTerm) ||
          project.description.toLowerCase().includes(lowercaseTerm)
        );
      
      case 'recommendations':
        return user.recommendations.filter(rec => 
          rec.from.name.toLowerCase().includes(lowercaseTerm) ||
          rec.text.toLowerCase().includes(lowercaseTerm)
        );
      
      default:
        return content;
    }
  };

  // Get filtered content based on active tab and search term
  const getFilteredContent = () => {
    switch (activeTab) {
      case 'about':
        return filterContent(user.about, searchTerm);
      case 'experience':
        return filterContent(user.experience, searchTerm);
      case 'education':
        return filterContent(user.education, searchTerm);
      case 'skills':
        return filterContent(user.skills, searchTerm);
      case 'certifications':
        return filterContent(user.certifications, searchTerm);
      case 'projects':
        return filterContent(user.projects, searchTerm);
      case 'recommendations':
        return filterContent(user.recommendations, searchTerm);
      default:
        return null;
    }
  };

  const filteredContent = getFilteredContent();
  // Make sure filteredContent is always treated correctly based on the expected type
  const isEmptyContent = 
    filteredContent === null || 
    filteredContent === undefined || 
    (Array.isArray(filteredContent) && filteredContent.length === 0);

  return (
    <div className="min-h-screen bg-linkedin-lightGrey dark:bg-linkedin-darkGrey">
      <NavBar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="space-y-6">
          {/* Profile Header */}
          <Card>
            <div className="h-32 bg-gradient-to-r from-linkedin-blue to-blue-400 relative">
              <Button variant="outline" size="sm" className="absolute top-4 right-4 bg-white hover:bg-gray-100">
                <Pencil className="h-4 w-4 mr-1" /> Edit Cover
              </Button>
            </div>
            <CardContent className="pt-0">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="-mt-12 md:-mt-16 relative">
                    <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white dark:border-gray-900">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="text-2xl">{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm" className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:ml-4">
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <p className="text-gray-600 dark:text-gray-400">{user.title}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        <span>{user.company}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{user.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Link2 className="h-4 w-4 mr-1" />
                        <a href="#" className="text-linkedin-blue dark:text-linkedin-lightBlue hover:underline">
                          linkedin.com/in/johndoe
                        </a>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <span className="text-sm font-medium">{user.connections} connections</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex space-x-3">
                  <Button className="bg-linkedin-blue hover:bg-linkedin-darkBlue text-white">Message</Button>
                  <Button variant="outline">More</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Search Box */}
          <div className="bg-white dark:bg-linkedin-darkGrey rounded-lg p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search within profile" 
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Profile Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-3">
              <Tabs 
                value={activeTab} 
                onValueChange={setActiveTab} 
                className="bg-white dark:bg-linkedin-darkGrey rounded-lg shadow overflow-hidden"
              >
                <div className="px-4 sm:px-6">
                  <TabsList className="justify-start border-b border-gray-200 dark:border-gray-700 p-0 h-auto overflow-x-auto">
                    <TabsTrigger 
                      value="about" 
                      className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none"
                    >
                      About
                    </TabsTrigger>
                    <TabsTrigger 
                      value="experience" 
                      className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none"
                    >
                      Experience
                    </TabsTrigger>
                    <TabsTrigger 
                      value="education" 
                      className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none"
                    >
                      Education
                    </TabsTrigger>
                    <TabsTrigger 
                      value="skills" 
                      className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none"
                    >
                      Skills
                    </TabsTrigger>
                    <TabsTrigger 
                      value="certifications" 
                      className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none"
                    >
                      Certifications
                    </TabsTrigger>
                    <TabsTrigger 
                      value="projects" 
                      className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none"
                    >
                      Projects
                    </TabsTrigger>
                    <TabsTrigger 
                      value="recommendations" 
                      className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none"
                    >
                      Recommendations
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                {/* About Section */}
                <TabsContent value="about" className="p-6">
                  {!isEmptyContent && activeTab === 'about' ? (
                    <>
                      <h2 className="text-xl font-semibold mb-4">About</h2>
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{filteredContent}</p>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 dark:text-gray-400">No matching content found.</p>
                    </div>
                  )}
                </TabsContent>
                
                {/* Experience Section */}
                <TabsContent value="experience" className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Experience</h2>
                    <Button variant="outline" size="sm">
                      <Pencil className="h-4 w-4 mr-1" /> Add
                    </Button>
                  </div>
                  
                  {!isEmptyContent && activeTab === 'experience' && Array.isArray(filteredContent) ? (
                    <div className="space-y-6">
                      {filteredContent.map((exp) => (
                        <div key={exp.id} className="flex">
                          <div className="mr-4">
                            <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                              <Briefcase className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-medium text-lg">{exp.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {exp.startDate} - {exp.endDate}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 dark:text-gray-400">No matching experience found.</p>
                    </div>
                  )}
                </TabsContent>
                
                {/* Education Section */}
                <TabsContent value="education" className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Education</h2>
                    <Button variant="outline" size="sm">
                      <Pencil className="h-4 w-4 mr-1" /> Add
                    </Button>
                  </div>
                  
                  {!isEmptyContent && activeTab === 'education' && Array.isArray(filteredContent) ? (
                    <div className="space-y-6">
                      {filteredContent.map((edu) => (
                        <div key={edu.id} className="flex">
                          <div className="mr-4">
                            <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                              <Book className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-medium text-lg">{edu.school}</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              {edu.degree}, {edu.field}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {edu.startDate} - {edu.endDate}
                            </p>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.activities}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 dark:text-gray-400">No matching education found.</p>
                    </div>
                  )}
                </TabsContent>
                
                {/* Skills Section */}
                <TabsContent value="skills" className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Skills</h2>
                    <Button variant="outline" size="sm">
                      <Pencil className="h-4 w-4 mr-1" /> Add
                    </Button>
                  </div>
                  
                  {!isEmptyContent && activeTab === 'skills' && Array.isArray(filteredContent) ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredContent.map((skill, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <h3 className="font-medium">{skill.name}</h3>
                          <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                            <span>{skill.endorsements} endorsements</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 dark:text-gray-400">No matching skills found.</p>
                    </div>
                  )}
                </TabsContent>
                
                {/* Certifications Section */}
                <TabsContent value="certifications" className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Certifications</h2>
                    <Button variant="outline" size="sm">
                      <Pencil className="h-4 w-4 mr-1" /> Add
                    </Button>
                  </div>
                  
                  {!isEmptyContent && activeTab === 'certifications' && Array.isArray(filteredContent) ? (
                    <div className="space-y-6">
                      {filteredContent.map((cert) => (
                        <div key={cert.id} className="flex">
                          <div className="mr-4">
                            <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                              <Award className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-medium text-lg">{cert.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{cert.organization}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Issued {cert.issued} - Expires {cert.expires}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Credential ID: {cert.credentialId}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 dark:text-gray-400">No matching certifications found.</p>
                    </div>
                  )}
                </TabsContent>
                
                {/* Projects Section */}
                <TabsContent value="projects" className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Projects</h2>
                    <Button variant="outline" size="sm">
                      <Pencil className="h-4 w-4 mr-1" /> Add
                    </Button>
                  </div>
                  
                  {!isEmptyContent && activeTab === 'projects' && Array.isArray(filteredContent) ? (
                    <div className="space-y-6">
                      {filteredContent.map((project) => (
                        <div key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <h3 className="font-medium text-lg">{project.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {project.startDate} - {project.endDate}
                          </p>
                          <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
                          <div className="mt-3">
                            <a 
                              href={project.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm text-linkedin-blue dark:text-linkedin-lightBlue hover:underline"
                            >
                              View project
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 dark:text-gray-400">No matching projects found.</p>
                    </div>
                  )}
                </TabsContent>
                
                {/* Recommendations Section */}
                <TabsContent value="recommendations" className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Recommendations</h2>
                    <Button variant="outline" size="sm">
                      Request
                    </Button>
                  </div>
                  
                  {!isEmptyContent && activeTab === 'recommendations' && Array.isArray(filteredContent) ? (
                    <div className="space-y-6">
                      {filteredContent.map((rec) => (
                        <div key={rec.id} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                          <div className="flex items-center mb-4">
                            <Avatar className="h-12 w-12 mr-3">
                              <AvatarImage src={rec.from.avatar} alt={rec.from.name} />
                              <AvatarFallback>{rec.from.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{rec.from.name}</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{rec.from.title}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{rec.date}</p>
                            </div>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 italic">"{rec.text}"</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 dark:text-gray-400">No matching recommendations found.</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
