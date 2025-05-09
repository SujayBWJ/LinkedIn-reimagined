
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Pencil, 
  MapPin, 
  Briefcase, 
  Building, 
  Link2, 
  Calendar, 
  Book, 
  Award, 
  Search,
  ThumbsUp,
  Heart,
  MessageSquare,
  Share,
  FileText,
  Globe
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Profile = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeReaction, setActiveReaction] = useState<string | null>(null);
  
  // Mock user data
  const user = {
    name: 'John Doe',
    title: 'Software Engineer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    connections: 586,
    avatar: 'https://avatars.githubusercontent.com/u/124599?v=4',
    about: 'Passionate software engineer with 5+ years of experience in full-stack development. Currently working on AI-powered solutions at Tech Innovations Inc. Previously at Global Tech and StartupX. Graduate of Computer Science from Stanford University.\n\nMy focus areas include distributed systems, cloud architecture, and machine learning applications. I believe in writing clean, maintainable code and continuously learning new technologies to stay at the cutting edge of software development.\n\nOutside of work, I contribute to open source projects and mentor junior developers. I\'m also an avid hiker and amateur photographer.',
    experience: [
      {
        id: 1,
        title: 'Senior Software Engineer',
        company: 'Tech Innovations Inc.',
        logo: 'TI',
        location: 'PESCE,Mandya, KA',
        startDate: 'January 2023',
        endDate: 'Present',
        description: 'Leading the development of AI-powered solutions for enterprise customers. Managing a team of 5 engineers and collaborating with product and design teams to deliver high-quality software products.',
        achievements: [
          'Led the architecture and implementation of a microservices platform that improved system scalability by 300%',
          'Reduced infrastructure costs by 40% through cloud optimization strategies',
          'Mentored 3 junior engineers who were all promoted within a year',
          'Established code review and testing processes that reduced production bugs by 60%'
        ],
        technologies: ['React', 'Node.js', 'AWS', 'Kubernetes', 'Python', 'TensorFlow']
      },
      {
        id: 2,
        title: 'Software Engineer',
        company: 'Global Tech',
        logo: 'GT',
        location: 'PESCE,Mandya, KA',
        startDate: 'March 2020',
        endDate: 'December 2022',
        description: 'Developed and maintained web applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and improved performance by 40%.',
        achievements: [
          'Redesigned the front-end architecture reducing page load times by 60%',
          'Implemented comprehensive test suite achieving 92% code coverage',
          'Integrated payment processing system handling over $2M in transactions monthly',
          'Collaborated with UX team to improve user flows increasing conversion by 25%'
        ],
        technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Docker', 'AWS']
      },
      {
        id: 3,
        title: 'Junior Developer',
        company: 'StartupX',
        logo: 'SX',
        location: 'Palo Alto, CA',
        startDate: 'June 2018',
        endDate: 'February 2020',
        description: 'Worked on front-end development using React and Angular. Collaborated with UX designers to implement responsive designs.',
        achievements: [
          'Built responsive UI components used across multiple products',
          'Created interactive data visualization dashboards for customer analytics',
          'Optimized application performance reducing load times by 35%',
          'Contributed to open source libraries maintained by the company'
        ],
        technologies: ['JavaScript', 'React', 'Angular', 'SCSS', 'D3.js', 'Git']
      }
    ],
    education: [
      {
        id: 1,
        school: 'Stanford University',
        logo: 'SU',
        degree: 'Master of Science in Computer Science',
        field: 'Artificial Intelligence',
        startDate: '2016',
        endDate: '2018',
        activities: 'AI Research Group, Hackathon Club',
        description: 'Specialized in machine learning and natural language processing. Conducted research on neural network optimizations for edge devices.',
        courses: [
          'Advanced Machine Learning',
          'Natural Language Processing',
          'Computer Vision',
          'Deep Learning',
          'Distributed Systems'
        ],
        achievements: [
          'Published research paper on efficient neural network architectures',
          'Teaching Assistant for Introduction to Machine Learning',
          'Winner of the Annual University Hackathon (2017)',
          'Member of the Honors Program'
        ]
      },
      {
        id: 2,
        school: 'University of California, Berkeley',
        logo: 'UCB',
        degree: 'Bachelor of Science in Computer Science',
        field: 'Software Engineering',
        startDate: '2012',
        endDate: '2016',
        activities: 'Coding Club President, Hackathon Winner 2015',
        description: 'Focused on software engineering principles and computer systems. Participated actively in programming competitions and open source projects.',
        courses: [
          'Data Structures and Algorithms',
          'Operating Systems',
          'Database Management Systems',
          'Computer Networks',
          'Software Engineering'
        ],
        achievements: [
          'Graduated with Honors (GPA: 3.92/4.0)',
          'President of the Computer Science Club',
          'Organized campus-wide coding competitions',
          'Developed a campus navigation app used by over 5,000 students'
        ]
      }
    ],
    skills: [
      { name: 'JavaScript', endorsements: 78, isTopSkill: true },
      { name: 'React.js', endorsements: 65, isTopSkill: true },
      { name: 'Node.js', endorsements: 59, isTopSkill: true },
      { name: 'Python', endorsements: 47, isTopSkill: true },
      { name: 'Machine Learning', endorsements: 42 },
      { name: 'AWS', endorsements: 38 },
      { name: 'TypeScript', endorsements: 35 },
      { name: 'MongoDB', endorsements: 29 },
      { name: 'SQL', endorsements: 27 },
      { name: 'Docker', endorsements: 24 },
      { name: 'Kubernetes', endorsements: 21 },
      { name: 'GraphQL', endorsements: 19 },
      { name: 'CI/CD', endorsements: 18 },
      { name: 'System Design', endorsements: 17 },
      { name: 'Microservices', endorsements: 16 }
    ],
    certifications: [
      {
        id: 1,
        name: 'AWS Certified Solutions Architect',
        organization: 'Amazon Web Services',
        logo: 'AWS',
        issued: 'December 2022',
        expires: 'December 2025',
        credentialId: 'AWS-SA-123456',
        description: 'Professional level certification validating expertise in designing distributed systems on AWS.',
        skills: ['Amazon EC2', 'Amazon S3', 'Amazon RDS', 'Amazon VPC', 'AWS IAM', 'AWS Lambda']
      },
      {
        id: 2,
        name: 'Google Professional Cloud Developer',
        organization: 'Google Cloud',
        logo: 'GCP',
        issued: 'March 2022',
        expires: 'March 2024',
        credentialId: 'GCP-DEV-789012',
        description: 'Demonstrates proficiency in building scalable applications using Google Cloud technologies.',
        skills: ['Google Compute Engine', 'Google Kubernetes Engine', 'Cloud Functions', 'BigQuery', 'Cloud Storage']
      },
      {
        id: 3,
        name: 'MongoDB Certified Developer',
        organization: 'MongoDB Inc.',
        logo: 'MDB',
        issued: 'July 2021',
        expires: 'July 2024',
        credentialId: 'MDB-DEV-345678',
        description: 'Validates expertise in developing applications using MongoDB database.',
        skills: ['MongoDB Aggregation', 'MongoDB Atlas', 'Data Modeling', 'Schema Design', 'MongoDB Performance']
      },
      {
        id: 4,
        name: 'Microsoft Certified: Azure Developer Associate',
        organization: 'Microsoft',
        logo: 'MS',
        issued: 'May 2021',
        expires: 'May 2023',
        credentialId: 'AZURE-DEV-901234',
        description: 'Certifies skills in developing solutions that use Azure services and technologies.',
        skills: ['Azure App Service', 'Azure Functions', 'Azure Storage', 'Azure Cosmos DB', 'Azure DevOps']
      },
      {
        id: 5,
        name: 'TensorFlow Developer Certificate',
        organization: 'Google',
        logo: 'TF',
        issued: 'August 2020',
        expires: 'No Expiration',
        credentialId: 'TF-DEV-567890',
        description: 'Demonstrates proficiency in using TensorFlow to develop machine learning models.',
        skills: ['Neural Networks', 'Computer Vision', 'Natural Language Processing', 'Time Series Forecasting']
      }
    ],
    projects: [
      {
        id: 1,
        name: 'AI Content Generator',
        description: 'Developed an AI-powered content generation tool using GPT-3 for marketing teams.',
        startDate: 'January 2023',
        endDate: 'June 2023',
        url: 'https://github.com/johndoe/ai-content-gen',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'OpenAI API'],
        highlights: [
          'Implemented custom fine-tuning of language models',
          'Built responsive UI with real-time previews',
          'Integrated with popular CMS platforms',
          'Added content quality scoring algorithm'
        ]
      },
      {
        id: 2,
        name: 'E-commerce Platform',
        description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB.',
        startDate: 'April 2022',
        endDate: 'December 2022',
        url: 'https://github.com/johndoe/ecommerce-platform',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
        highlights: [
          'Implemented secure payment processing',
          'Built product recommendation engine',
          'Created responsive mobile-first design',
          'Added order tracking and inventory management'
        ]
      },
      {
        id: 3,
        name: 'Task Management App',
        description: 'Created a task management application with real-time collaboration features.',
        startDate: 'September 2021',
        endDate: 'March 2022',
        url: 'https://github.com/johndoe/task-manager',
        image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
        technologies: ['React', 'Firebase', 'Material UI', 'TypeScript'],
        highlights: [
          'Implemented real-time updates with Firebase',
          'Added drag-and-drop interface for task organization',
          'Created shared workspace features',
          'Integrated with Google Calendar'
        ]
      },
      {
        id: 4,
        name: 'Personal Finance Tracker',
        description: 'Built a web application for tracking personal finances and budgeting.',
        startDate: 'March 2021',
        endDate: 'August 2021',
        url: 'https://github.com/johndoe/finance-tracker',
        image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6',
        technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js', 'Plaid API'],
        highlights: [
          'Implemented secure bank account connections',
          'Created customizable budget categories',
          'Built interactive charts for expense analysis',
          'Added automated spending alerts'
        ]
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
      },
      {
        id: 3,
        from: {
          name: 'Lisa Zhang',
          title: 'Lead Frontend Developer at StartupX',
          avatar: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
        },
        text: 'John is a rare talent who combines technical excellence with exceptional communication skills. During our time working together at StartupX, he consistently delivered complex features ahead of schedule and mentored junior team members. His code is clean, well-documented, and thoughtfully architected. Any team would be lucky to have him.',
        date: 'February 2020'
      },
      {
        id: 4,
        from: {
          name: 'David Chen',
          title: 'Engineering Manager at Tech Innovations Inc.',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
        },
        text: 'John has been an invaluable member of our engineering team. His deep technical knowledge and system design skills have been crucial in scaling our platform to handle millions of users. Beyond his technical contributions, John has shown great leadership in mentoring junior engineers and driving technical discussions. He consistently demonstrates ownership and takes initiative in addressing complex challenges.',
        date: 'March 2024'
      }
    ],
    publications: [
      {
        id: 1,
        title: 'Optimizing Neural Networks for Edge Devices',
        publisher: 'Journal of Machine Learning Research',
        date: 'June 2022',
        url: 'https://jmlr.org/papers/optimizing-neural-networks',
        description: 'Research on techniques to reduce the computational requirements of neural networks while maintaining accuracy, specifically targeting deployment on resource-constrained edge devices.'
      },
      {
        id: 2,
        title: 'Microservice Architecture Patterns for Scalable Applications',
        publisher: 'IEEE Software',
        date: 'November 2021',
        url: 'https://ieeexplore.ieee.org/microservice-architecture-patterns',
        description: 'Analysis of effective design patterns for building resilient and scalable microservice architectures, with case studies from high-traffic applications.'
      },
      {
        id: 3,
        title: 'Improving Code Review Processes in Software Development Teams',
        publisher: 'ACM Queue',
        date: 'March 2021',
        url: 'https://queue.acm.org/improving-code-review',
        description: 'Best practices and methodologies for implementing effective code review processes that improve code quality while maintaining team velocity.'
      }
    ],
    languages: [
      { name: 'English', proficiency: 'Native' },
      { name: 'Spanish', proficiency: 'Professional working proficiency' },
      { name: 'Mandarin Chinese', proficiency: 'Elementary proficiency' }
    ],
    volunteering: [
      {
        organization: 'Code for America',
        role: 'Volunteer Developer',
        cause: 'Civic Tech',
        startDate: 'January 2022',
        endDate: 'Present',
        description: 'Contribute to open-source projects aimed at improving government services and civic engagement.'
      },
      {
        organization: 'STEM Mentors',
        role: 'Technical Mentor',
        cause: 'Education',
        startDate: 'September 2020',
        endDate: 'Present',
        description: 'Mentor underrepresented high school students interested in pursuing careers in technology.'
      }
    ],
    courses: [
      {
        name: 'Advanced System Design',
        platform: 'Coursera',
        date: 'March 2023',
        credential: 'Verified Certificate'
      },
      {
        name: 'Machine Learning Engineering for Production',
        platform: 'deeplearning.ai',
        date: 'October 2022',
        credential: 'Professional Certificate'
      },
      {
        name: 'Kubernetes for Developers',
        platform: 'Linux Foundation',
        date: 'July 2022',
        credential: 'Certification'
      }
    ],
    posts: [
      {
        id: 1,
        title: 'The Future of Frontend Development',
        date: 'April 10, 2025',
        content: 'Exploring emerging trends and technologies shaping the future of frontend development, including WebAssembly, Edge Computing, and AI-assisted coding.',
        likes: 253,
        comments: 42
      },
      {
        id: 2,
        title: 'Building Scalable Microservices Architecture',
        date: 'March 22, 2025',
        content: 'Sharing lessons learned from scaling our microservices architecture to handle millions of requests per day while maintaining reliability and performance.',
        likes: 189,
        comments: 37
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
        return content && content.toLowerCase().includes(lowercaseTerm) ? content : null;
      
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

      case 'publications':
        return user.publications.filter(pub => 
          pub.title.toLowerCase().includes(lowercaseTerm) ||
          pub.publisher.toLowerCase().includes(lowercaseTerm) ||
          pub.description.toLowerCase().includes(lowercaseTerm)
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
      case 'publications':
        return filterContent(user.publications, searchTerm);
      default:
        return null;
    }
  };

  // Handle reactions
  const handleReactionClick = (reaction: string) => {
    setActiveReaction(reaction);
  };
  
  // Check for empty content
  const filteredContent = getFilteredContent();
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
                <Pencil  /> 
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
                          linkedin.com/in/Zero
                        </a>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <span className="text-sm font-medium">{user.connections} connections</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex space-x-3">
                  <Button className="bg-linkedin-blue hover:bg-linkedin-darkBlue text-white">More</Button>
                  
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Activity */}
          <Card className="bg-white dark:bg-linkedin-darkGrey">
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {user.posts.map(post => (
                <div key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-medium text-lg hover:text-linkedin-blue dark:hover:text-linkedin-lightBlue cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{post.content}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{post.likes} likes</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{post.comments} comments</span>
                    </div>
                    
                    <div className="flex">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className={`text-gray-500 hover:text-linkedin-blue dark:text-gray-400 dark:hover:text-linkedin-lightBlue ${activeReaction === 'like' ? 'text-linkedin-blue dark:text-linkedin-lightBlue' : ''}`}
                          >
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Like
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-1 w-auto">
                          <div className="flex gap-1">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="p-1 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                              onClick={() => handleReactionClick('like')}
                            >
                              <ThumbsUp className="h-5 w-5 text-linkedin-blue" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="p-1 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                              onClick={() => handleReactionClick('heart')}
                            >
                              <Heart className="h-5 w-5 text-red-500" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="p-1 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                              onClick={() => handleReactionClick('celebrate')}
                            >
                              <Award className="h-5 w-5 text-yellow-500" />
                            </Button>
                          </div>
                        </PopoverContent>
                      </Popover>
                      
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-linkedin-blue dark:text-gray-400 dark:hover:text-linkedin-lightBlue">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Comment
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-linkedin-blue dark:text-gray-400 dark:hover:text-linkedin-lightBlue">
                        <Share className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
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
          <div className="grid grid-cols-1 gap-6">
            <div>
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
                    <TabsTrigger 
                      value="publications" 
                      className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue rounded-none"
                    >
                      Publications
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                {/* About Section */}
                <TabsContent value="about" className="p-6">
                  {!isEmptyContent && activeTab === 'about' ? (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold mb-4">About</h2>
                        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{filteredContent}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Languages</h3>
                        <div className="space-y-3">
                          {user.languages.map((language, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="font-medium">{language.name}</span>
                              <span className="text-sm text-gray-500 dark:text-gray-400">{language.proficiency}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Volunteer Experience</h3>
                        <div className="space-y-4">
                          {user.volunteering.map((volunteer, index) => (
                            <div key={index}>
                              <h4 className="font-medium">{volunteer.role}</h4>
                              <p className="text-gray-600 dark:text-gray-400">{volunteer.organization}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {volunteer.startDate} - {volunteer.endDate} • {volunteer.cause}
                              </p>
                              <p className="mt-1 text-gray-700 dark:text-gray-300">{volunteer.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Courses</h3>
                        <div className="space-y-3">
                          {user.courses.map((course, index) => (
                            <div key={index}>
                              <h4 className="font-medium">{course.name}</h4>
                              <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                                <span>{course.platform}</span>
                                <span>•</span>
                                <span>{course.date}</span>
                                <span>•</span>
                                <span>{course.credential}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
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
                    <div className="space-y-8">
                      {filteredContent.map((exp) => (
                        <div key={exp.id} className="flex">
                          <div className="mr-4">
                            <Avatar className="h-12 w-12 bg-linkedin-blue text-white">
                              <AvatarFallback>{exp.logo}</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-lg">{exp.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {exp.startDate} - {exp.endDate}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.location}</p>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">{exp.description}</p>
                            
                            {exp.achievements && exp.achievements.length > 0 && (
                              <div className="mb-3">
                                <h4 className="font-medium text-sm mb-2">Key Achievements</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                  {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300">{achievement}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {exp.technologies && exp.technologies.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-3">
                                {exp.technologies.map((tech, i) => (
                                  <Badge key={i} variant="outline" className="bg-blue-50 dark:bg-blue-900/20">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            )}
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
                    <div className="space-y-8">
                      {filteredContent.map((edu) => (
                        <div key={edu.id} className="flex">
                          <div className="mr-4">
                            <Avatar className="h-12 w-12 bg-linkedin-blue text-white">
                              <AvatarFallback>{edu.logo}</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-lg">{edu.school}</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              {edu.degree}, {edu.field}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                              {edu.startDate} - {edu.endDate}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">{edu.description}</p>
                            
                            {edu.courses && edu.courses.length > 0 && (
                              <div className="mb-3">
                                <h4 className="font-medium text-sm mb-2">Relevant Coursework</h4>
                                <div className="flex flex-wrap gap-2">
                                  {edu.courses.map((course, i) => (
                                    <Badge key={i} variant="outline" className="bg-blue-50 dark:bg-blue-900/20">
                                      {course}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {edu.achievements && edu.achievements.length > 0 && (
                              <div>
                                <h4 className="font-medium text-sm mb-2">Achievements</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                  {edu.achievements.map((achievement, i) => (
                                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300">{achievement}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
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
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-3 text-lg">Top Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {filteredContent.filter(skill => skill.isTopSkill).map((skill, index) => (
                            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-linkedin-blue dark:hover:border-linkedin-lightBlue transition-colors">
                              <h3 className="font-medium">{skill.name}</h3>
                              <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                                <span>{skill.endorsements} endorsements</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="font-medium mb-3 text-lg">Other Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {filteredContent.filter(skill => !skill.isTopSkill).map((skill, index) => (
                            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:border-linkedin-blue dark:hover:border-linkedin-lightBlue transition-colors">
                              <h3 className="font-medium">{skill.name}</h3>
                              <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                                <span>{skill.endorsements} endorsements</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 text-center">
                        <Button variant="outline">
                          Show all skills ({filteredContent.length})
                        </Button>
                      </div>
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
                            <Avatar className="h-12 w-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                              <AvatarFallback>{cert.logo}</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-lg">{cert.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{cert.organization}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Issued {cert.issued} - Expires {cert.expires}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                              Credential ID: {cert.credentialId}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">{cert.description}</p>
                            
                            {cert.skills && cert.skills.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {cert.skills.map((skill, i) => (
                                  <Badge key={i} variant="outline" className="bg-blue-50 dark:bg-blue-900/20">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            )}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredContent.map((project) => (
                        <div key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                          <div className="h-40 overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium text-lg">{project.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                              {project.startDate} - {project.endDate}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                            
                            {project.highlights && project.highlights.length > 0 && (
                              <div className="mb-4">
                                <h4 className="font-medium text-sm mb-2">Key Features</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                  {project.highlights.map((highlight, i) => (
                                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300">{highlight}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech, i) => (
                                <Badge key={i} variant="outline" className="bg-blue-50 dark:bg-blue-900/20">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="mt-2">
                              <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm flex items-center text-linkedin-blue dark:text-linkedin-lightBlue hover:underline"
                              >
                                <Globe className="h-4 w-4 mr-1" />
                                View project
                              </a>
                            </div>
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
                      <div>
                        <h3 className="font-medium mb-4">Received Recommendations</h3>
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
                              
                              <div className="mt-4 flex justify-end space-x-2">
                                <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-400">
                                  <ThumbsUp className="h-4 w-4 mr-1" />
                                  Thank
                                </Button>
                                <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-400">
                                  <MessageSquare className="h-4 w-4 mr-1" />
                                  Comment
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 dark:text-gray-400">No matching recommendations found.</p>
                    </div>
                  )}
                </TabsContent>
                
                {/* Publications Section */}
                <TabsContent value="publications" className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Publications</h2>
                    <Button variant="outline" size="sm">
                      <Pencil className="h-4 w-4 mr-1" /> Add
                    </Button>
                  </div>
                  
                  {!isEmptyContent && activeTab === 'publications' && Array.isArray(filteredContent) ? (
                    <div className="space-y-6">
                      {filteredContent.map((publication) => (
                        <div key={publication.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <h3 className="font-medium text-lg">{publication.title}</h3>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <FileText className="h-4 w-4 mr-1" />
                            <span>{publication.publisher} • {publication.date}</span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 mb-3">{publication.description}</p>
                          <a 
                            href={publication.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-linkedin-blue dark:text-linkedin-lightBlue hover:underline text-sm inline-flex items-center"
                          >
                            <Globe className="h-4 w-4 mr-1" />
                            Read publication
                          </a>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 dark:text-gray-400">No matching publications found.</p>
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
