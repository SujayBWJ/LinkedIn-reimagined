
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Briefcase, BookOpen, ChevronRight, FileText, Pen, Users, GraduationCap, Lightbulb, Award, BarChart, Wrench } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const YourSpace = () => {
  const [userType, setUserType] = useState("student");
  const [activeTab, setActiveTab] = useState("resources");
  
  // User type options and their resources
  const userTypes = {
    student: {
      title: "Student Resources",
      description: "Everything you need to succeed in your academic journey and prepare for your career.",
      resources: [
        { 
          icon: <Briefcase className="h-6 w-6 text-linkedin-blue" />, 
          title: "Find Internships", 
          description: "Discover internship opportunities aligned with your field of study.",
          link: "/internships",
          tags: ["Popular", "Career"],
          stats: "2,450 new opportunities this week"
        },
        { 
          icon: <FileText className="h-6 w-6 text-linkedin-blue" />, 
          title: "Build Resume with LinkedIn", 
          description: "Create a standout resume using LinkedIn's tools and your profile data.",
          link: "/resume-builder",
          tags: ["Essential"],
          stats: "Used by 85% of successful applicants"
        },
        { 
          icon: <BookOpen className="h-6 w-6 text-linkedin-blue" />, 
          title: "Learn In-Demand Skills", 
          description: "Access LinkedIn Learning courses to develop marketable skills.",
          link: "/learning",
          tags: ["Growth", "Popular"],
          stats: "Over 16,000 courses available"
        },
        { 
          icon: <Users className="h-6 w-6 text-linkedin-blue" />, 
          title: "Connect with Alumni", 
          description: "Network with graduates from your institution who are working in your field of interest.",
          link: "/alumni-finder",
          tags: ["Network"],
          stats: "Connect with 50,000+ alumni"
        },
        { 
          icon: <Pen className="h-6 w-6 text-linkedin-blue" />, 
          title: "Career Explorer", 
          description: "Discover potential career paths based on your skills and interests.",
          link: "/career-explorer",
          tags: ["Planning"],
          stats: "Explore 300+ career paths"
        },
        { 
          icon: <GraduationCap className="h-6 w-6 text-linkedin-blue" />, 
          title: "Scholarship Finder", 
          description: "Discover scholarships and grants that match your academic profile and interests.",
          link: "/scholarships",
          tags: ["Financial", "New"],
          stats: "$50M+ in scholarships available"
        }
      ],
      recommendedConnections: [
        {
          name: "Dr. Emma Peterson",
          avatar: "EP",
          role: "Professor of Computer Science at MIT",
          mutualConnections: 3,
          isInfluencer: true
        },
        {
          name: "James Morrison",
          avatar: "JM",
          role: "Student Ambassador at Google",
          mutualConnections: 5
        },
        {
          name: "Sophia Chen",
          avatar: "SC",
          role: "Research Assistant at Stanford University",
          mutualConnections: 2
        }
      ],
      events: [
        {
          title: "Tech Career Fair 2025",
          date: "May 15, 2025",
          attendees: 1240,
          isVirtual: true
        },
        {
          title: "Resume Workshop for STEM Students",
          date: "May 10, 2025",
          attendees: 85,
          isVirtual: false
        }
      ]
    },
    jobSeeker: {
      title: "Job Seeker Resources",
      description: "Tools and resources to help you find your next role and stand out to recruiters.",
      resources: [
        { 
          icon: <FileText className="h-6 w-6 text-linkedin-blue" />, 
          title: "Resume Optimization Tool", 
          description: "Get personalized suggestions to improve your resume and stand out.",
          link: "/resume-optimizer",
          tags: ["Essential", "Popular"],
          stats: "Boost your profile visibility by 40%"
        },
        { 
          icon: <Users className="h-6 w-6 text-linkedin-blue" />, 
          title: "Interview Prep", 
          description: "Practice common interview questions and get feedback on your responses.",
          link: "/interview-prep",
          tags: ["Essential"],
          stats: "1,000+ practice questions"
        },
        { 
          icon: <BarChart className="h-6 w-6 text-linkedin-blue" />, 
          title: "Company Insights", 
          description: "Research company culture, growth, and employee satisfaction.",
          link: "/company-insights",
          tags: ["Research"],
          stats: "Data on 2M+ companies"
        },
        { 
          icon: <Pen className="h-6 w-6 text-linkedin-blue" />, 
          title: "Follow Industry Trends", 
          description: "Stay updated on the latest developments in your field.",
          link: "/industry-trends",
          tags: ["Knowledge"],
          stats: "Daily updates from top sources"
        },
        { 
          icon: <Briefcase className="h-6 w-6 text-linkedin-blue" />, 
          title: "Salary Insights", 
          description: "Compare compensation packages across roles, companies, and locations.",
          link: "/salary-insights",
          tags: ["Research", "New"],
          stats: "Salary data from 15M+ professionals"
        },
        { 
          icon: <Award className="h-6 w-6 text-linkedin-blue" />, 
          title: "Skill Assessments", 
          description: "Verify your skills with LinkedIn's assessment tools and showcase your expertise.",
          link: "/skill-assessments",
          tags: ["Verification"],
          stats: "Over 90 skill tests available"
        }
      ],
      recommendedConnections: [
        {
          name: "Jessica Miller",
          avatar: "JM",
          role: "Recruiter at Tech Innovations Inc.",
          mutualConnections: 7,
          isRecruiter: true
        },
        {
          name: "David Wang",
          avatar: "DW",
          role: "Hiring Manager at Enterprise Solutions",
          mutualConnections: 3,
          isRecruiter: true
        },
        {
          name: "Rachel Green",
          avatar: "RG",
          role: "Career Coach",
          mutualConnections: 4,
          isPremium: true
        }
      ],
      events: [
        {
          title: "Networking Event for Tech Professionals",
          date: "May 20, 2025",
          attendees: 350,
          isVirtual: false
        },
        {
          title: "How to Stand Out in a Competitive Job Market",
          date: "May 12, 2025",
          attendees: 1200,
          isVirtual: true
        }
      ]
    },
    entrepreneur: {
      title: "Entrepreneur Resources",
      description: "Resources to help grow your business and connect with talent.",
      resources: [
        { 
          icon: <Users className="h-6 w-6 text-linkedin-blue" />, 
          title: "Post a Job", 
          description: "Create job listings to attract qualified candidates to your company.",
          link: "/post-job",
          tags: ["Hiring", "Premium"],
          stats: "Reach 810M+ professionals"
        },
        { 
          icon: <Briefcase className="h-6 w-6 text-linkedin-blue" />, 
          title: "Find Qualified Talent", 
          description: "Search for professionals with the skills your business needs.",
          link: "/talent-search",
          tags: ["Hiring", "Premium"],
          stats: "40M+ job seekers each month"
        },
        { 
          icon: <BarChart className="h-6 w-6 text-linkedin-blue" />, 
          title: "Advertise on LinkedIn", 
          description: "Promote your business to LinkedIn's professional audience.",
          link: "/advertising",
          tags: ["Marketing"],
          stats: "2x higher conversion rates"
        },
        { 
          icon: <Lightbulb className="h-6 w-6 text-linkedin-blue" />, 
          title: "Talent Insights", 
          description: "Get data-driven insights about the talent pool and hiring landscape.",
          link: "/talent-insights",
          tags: ["Analytics", "Premium"],
          stats: "Real-time workforce data"
        },
        { 
          icon: <Wrench className="h-6 w-6 text-linkedin-blue" />, 
          title: "Manage Billing / Admin Center", 
          description: "Handle your LinkedIn business accounts and subscriptions.",
          link: "/admin-center",
          tags: ["Admin"],
          stats: "Centralized management tools"
        },
        { 
          icon: <Users className="h-6 w-6 text-linkedin-blue" />, 
          title: "Entrepreneur Network", 
          description: "Connect with other business owners and startup founders.",
          link: "/entrepreneur-network",
          tags: ["Network", "New"],
          stats: "Join 15M+ entrepreneurs"
        }
      ],
      recommendedConnections: [
        {
          name: "Alex Johnson",
          avatar: "AJ",
          role: "Angel Investor & Startup Mentor",
          mutualConnections: 12,
          isInfluencer: true
        },
        {
          name: "Sarah Chang",
          avatar: "SC",
          role: "Founder & CEO at TechStart",
          mutualConnections: 8,
          isPremium: true
        },
        {
          name: "Michael Roberts",
          avatar: "MR",
          role: "Business Development at Venture Capital Firm",
          mutualConnections: 5
        }
      ],
      events: [
        {
          title: "Startup Funding Masterclass",
          date: "May 18, 2025",
          attendees: 450,
          isVirtual: true
        },
        {
          title: "Small Business Networking Breakfast",
          date: "May 22, 2025",
          attendees: 120,
          isVirtual: false
        }
      ]
    },
    freelancer: {
      title: "Freelancer & Creator Resources",
      description: "Tools to showcase your work, find clients, and grow your personal brand.",
      resources: [
        { 
          icon: <Briefcase className="h-6 w-6 text-linkedin-blue" />, 
          title: "Create a Services Page", 
          description: "Showcase the services you offer directly on your LinkedIn profile.",
          link: "/services-page",
          tags: ["Essential"],
          stats: "Reach 810M+ potential clients"
        },
        { 
          icon: <FileText className="h-6 w-6 text-linkedin-blue" />, 
          title: "Showcase Your Work", 
          description: "Build a portfolio to highlight your projects and accomplishments.",
          link: "/portfolio",
          tags: ["Essential"],
          stats: "Visually showcase your expertise"
        },
        { 
          icon: <Pen className="h-6 w-6 text-linkedin-blue" />, 
          title: "LinkedIn Articles / Creator Mode", 
          description: "Share your expertise and build an audience with LinkedIn's publishing platform.",
          link: "/creator-tools",
          tags: ["Growth"],
          stats: "Increase visibility by up to 150%"
        },
        { 
          icon: <Award className="h-6 w-6 text-linkedin-blue" />, 
          title: "Promote Your Skills", 
          description: "Get endorsements and certifications to validate your expertise.",
          link: "/skills-promotion",
          tags: ["Credibility"],
          stats: "Build trust with new clients"
        },
        { 
          icon: <BarChart className="h-6 w-6 text-linkedin-blue" />, 
          title: "Client Finder", 
          description: "Find potential clients based on your skills and service offerings.",
          link: "/client-finder",
          tags: ["Business", "New"],
          stats: "Smart matching with potential clients"
        },
        { 
          icon: <Lightbulb className="h-6 w-6 text-linkedin-blue" />, 
          title: "Content Strategy Planner", 
          description: "Plan and optimize your content to maximize engagement and reach.",
          link: "/content-strategy",
          tags: ["Growth", "New"],
          stats: "Engagement analytics and tips"
        }
      ],
      recommendedConnections: [
        {
          name: "Emily Rodriguez",
          avatar: "ER",
          role: "Independent Marketing Consultant",
          mutualConnections: 6,
          isPremium: true
        },
        {
          name: "Jason Kim",
          avatar: "JK",
          role: "Creative Director & Freelance Designer",
          mutualConnections: 4,
          isInfluencer: true
        },
        {
          name: "Olivia Smith",
          avatar: "OS",
          role: "Content Creator & Social Media Strategist",
          mutualConnections: 9
        }
      ],
      events: [
        {
          title: "Freelancer Tax Workshop",
          date: "May 14, 2025",
          attendees: 245,
          isVirtual: true
        },
        {
          title: "Portfolio Review & Networking",
          date: "May 25, 2025",
          attendees: 80,
          isVirtual: false
        }
      ]
    }
  };

  // Get current user type data
  const currentUserType = userTypes[userType as keyof typeof userTypes];

  // Progress data for the learning path
  const progressData = {
    student: {
      progress: 35,
      totalSteps: 12,
      completedSteps: 4,
      nextStep: "Complete your LinkedIn profile"
    },
    jobSeeker: {
      progress: 65,
      totalSteps: 10,
      completedSteps: 6,
      nextStep: "Set job preferences"
    },
    entrepreneur: {
      progress: 40,
      totalSteps: 15,
      completedSteps: 6,
      nextStep: "Complete your company page"
    },
    freelancer: {
      progress: 50,
      totalSteps: 10,
      completedSteps: 5,
      nextStep: "Add featured projects to your profile"
    }
  };

  const currentProgress = progressData[userType as keyof typeof progressData];
  
  return (
    <div className="min-h-screen bg-linkedin-lightGrey dark:bg-linkedin-darkGrey">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">Your Space</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Personalized resources based on your goals and interests.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Select value={userType} onValueChange={setUserType}>
              <SelectTrigger className="w-full md:w-[300px] bg-white dark:bg-linkedin-darkGrey shadow-sm">
                <SelectValue placeholder="Select your profile type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Profile Types</SelectLabel>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="jobSeeker">Job Seeker</SelectItem>
                  <SelectItem value="entrepreneur">Entrepreneur / Business Owner</SelectItem>
                  <SelectItem value="freelancer">Freelancer / Creator</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Learning path progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-linkedin-blue" />
              Your Learning Path
            </CardTitle>
            <CardDescription>
              Track your progress and see what's next on your professional journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{currentProgress.completedSteps}/{currentProgress.totalSteps} steps completed</span>
                <span className="text-linkedin-blue font-medium">{currentProgress.progress}% complete</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-linkedin-blue h-2.5 rounded-full" 
                  style={{ width: `${currentProgress.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Next step: </span> 
                  {currentProgress.nextStep}
                </div>
                <Button size="sm" className="bg-linkedin-blue hover:bg-linkedin-darkBlue">
                  Continue
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {currentUserType && (
          <>
            <h2 className="text-xl font-semibold mb-4">{currentUserType.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{currentUserType.description}</p>
            
            <Tabs defaultValue="resources" value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="bg-white dark:bg-linkedin-darkGrey mb-4 shadow">
                <TabsTrigger value="resources" className="data-[state=active]:bg-linkedin-blue data-[state=active]:text-white">Resources</TabsTrigger>
                <TabsTrigger value="connections" className="data-[state=active]:bg-linkedin-blue data-[state=active]:text-white">Recommended Connections</TabsTrigger>
                <TabsTrigger value="events" className="data-[state=active]:bg-linkedin-blue data-[state=active]:text-white">Events</TabsTrigger>
              </TabsList>
              
              {/* Resources Tab */}
              <TabsContent value="resources" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentUserType.resources.map((resource, index) => (
                    <Card key={index} className="linkedin-card h-full transition-all duration-200 hover:shadow-md hover:border-linkedin-blue dark:hover:border-linkedin-lightBlue">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20">
                            {resource.icon}
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </div>
                        <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="py-2">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {resource.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {resource.tags.map((tag, i) => (
                            <Badge key={i} variant={tag === "Premium" ? "default" : "outline"} className={tag === "New" ? "bg-green-600" : ""}>
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <p className="text-xs text-gray-500 dark:text-gray-400">{resource.stats}</p>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Connections Tab */}
              <TabsContent value="connections" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>People You Should Connect With</CardTitle>
                    <CardDescription>Based on your profile and career interests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {currentUserType.recommendedConnections.map((connection, index) => (
                        <div key={index} className={`flex items-center justify-between ${index > 0 ? 'pt-4 border-t border-gray-200 dark:border-gray-700' : ''}`}>
                          <div className="flex items-center">
                            <Avatar className="h-12 w-12 mr-4">
                              <AvatarFallback>{connection.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center">
                                <h4 className="font-medium">{connection.name}</h4>
                                {connection.isInfluencer && (
                                  <Badge variant="secondary" className="ml-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
                                    Influencer
                                  </Badge>
                                )}
                                {connection.isRecruiter && (
                                  <Badge variant="secondary" className="ml-2 bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100">
                                    Recruiter
                                  </Badge>
                                )}
                                {connection.isPremium && (
                                  <Badge variant="secondary" className="ml-2 bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-100">
                                    Premium
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{connection.role}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {connection.mutualConnections} mutual connections
                              </p>
                            </div>
                          </div>
                          <Button size="sm">Connect</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline">View More Suggestions</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Events Tab */}
              <TabsContent value="events" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Events tailored to your interests and career goals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {currentUserType.events.map((event, index) => (
                        <div key={index} className={`${index > 0 ? 'pt-6 border-t border-gray-200 dark:border-gray-700' : ''}`}>
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{event.title}</h4>
                              <div className="flex items-center mt-1">
                                <span className="text-sm text-gray-600 dark:text-gray-400">{event.date}</span>
                                <span className="mx-2 text-gray-400">•</span>
                                <span className="text-sm text-gray-600 dark:text-gray-400">{event.attendees} attendees</span>
                                {event.isVirtual && (
                                  <>
                                    <span className="mx-2 text-gray-400">•</span>
                                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                                      Virtual
                                    </Badge>
                                  </>
                                )}
                              </div>
                            </div>
                            <Button size="sm">Attend</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Explore More Events</Button>
                    <Button variant="outline">Create Event</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        )}

        {/* Premium Banner */}
        <Card className="mb-8 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/10 border-amber-200 dark:border-amber-700">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-400 flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Unlock Premium Features
                </h3>
                <p className="text-amber-700 dark:text-amber-300 mt-1">
                  Get access to exclusive tools, insights, and premium features to accelerate your career growth.
                </p>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Try Premium Free
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recently Viewed */}
        <h3 className="text-lg font-semibold mb-4">Recently Viewed in Your Space</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="linkedin-card h-full">
            <CardContent className="p-4">
              <h4 className="font-medium mb-1">Resume Optimization Tips</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Viewed 2 days ago
              </p>
            </CardContent>
          </Card>
          <Card className="linkedin-card h-full">
            <CardContent className="p-4">
              <h4 className="font-medium mb-1">LinkedIn Learning: Python Basics</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Viewed 3 days ago
              </p>
            </CardContent>
          </Card>
          <Card className="linkedin-card h-full">
            <CardContent className="p-4">
              <h4 className="font-medium mb-1">Networking Event Calendar</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Viewed 4 days ago
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <Card className="linkedin-card">
          <CardHeader>
            <CardTitle className="text-lg">Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <Link to="/help/career-advice" className="text-linkedin-blue dark:text-linkedin-lightBlue hover:underline flex items-center">
                <Lightbulb className="h-4 w-4 mr-2" />
                Get personalized career advice
              </Link>
              <Link to="/help/resume-review" className="text-linkedin-blue dark:text-linkedin-lightBlue hover:underline flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Request a resume review
              </Link>
              <Link to="/help/support" className="text-linkedin-blue dark:text-linkedin-lightBlue hover:underline flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Contact support
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default YourSpace;
