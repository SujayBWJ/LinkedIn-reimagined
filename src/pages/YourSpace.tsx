
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, BookOpen, ChevronDown, ChevronRight, FileText, Pen, Users, GraduationCap, Briefcase as BriefcaseIcon, Lightbulb, Award, BarChart, Wrench } from 'lucide-react';
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

const YourSpace = () => {
  const [userType, setUserType] = useState("student");
  
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
          link: "/internships"
        },
        { 
          icon: <FileText className="h-6 w-6 text-linkedin-blue" />, 
          title: "Build Resume with LinkedIn", 
          description: "Create a standout resume using LinkedIn's tools and your profile data.",
          link: "/resume-builder"
        },
        { 
          icon: <BookOpen className="h-6 w-6 text-linkedin-blue" />, 
          title: "Learn In-Demand Skills", 
          description: "Access LinkedIn Learning courses to develop marketable skills.",
          link: "/learning"
        },
        { 
          icon: <Users className="h-6 w-6 text-linkedin-blue" />, 
          title: "Connect with Alumni", 
          description: "Network with graduates from your institution who are working in your field of interest.",
          link: "/alumni-finder"
        },
        { 
          icon: <Pen className="h-6 w-6 text-linkedin-blue" />, 
          title: "Career Explorer", 
          description: "Discover potential career paths based on your skills and interests.",
          link: "/career-explorer"
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
          link: "/resume-optimizer"
        },
        { 
          icon: <Users className="h-6 w-6 text-linkedin-blue" />, 
          title: "Interview Prep", 
          description: "Practice common interview questions and get feedback on your responses.",
          link: "/interview-prep"
        },
        { 
          icon: <BarChart className="h-6 w-6 text-linkedin-blue" />, 
          title: "Company Insights", 
          description: "Research company culture, growth, and employee satisfaction.",
          link: "/company-insights"
        },
        { 
          icon: <Pen className="h-6 w-6 text-linkedin-blue" />, 
          title: "Follow Industry Trends", 
          description: "Stay updated on the latest developments in your field.",
          link: "/industry-trends"
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
          link: "/post-job"
        },
        { 
          icon: <Briefcase className="h-6 w-6 text-linkedin-blue" />, 
          title: "Find Qualified Talent", 
          description: "Search for professionals with the skills your business needs.",
          link: "/talent-search"
        },
        { 
          icon: <BarChart className="h-6 w-6 text-linkedin-blue" />, 
          title: "Advertise on LinkedIn", 
          description: "Promote your business to LinkedIn's professional audience.",
          link: "/advertising"
        },
        { 
          icon: <Lightbulb className="h-6 w-6 text-linkedin-blue" />, 
          title: "Talent Insights", 
          description: "Get data-driven insights about the talent pool and hiring landscape.",
          link: "/talent-insights"
        },
        { 
          icon: <Wrench className="h-6 w-6 text-linkedin-blue" />, 
          title: "Manage Billing / Admin Center", 
          description: "Handle your LinkedIn business accounts and subscriptions.",
          link: "/admin-center"
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
          link: "/services-page"
        },
        { 
          icon: <FileText className="h-6 w-6 text-linkedin-blue" />, 
          title: "Showcase Your Work", 
          description: "Build a portfolio to highlight your projects and accomplishments.",
          link: "/portfolio"
        },
        { 
          icon: <Pen className="h-6 w-6 text-linkedin-blue" />, 
          title: "LinkedIn Articles / Creator Mode", 
          description: "Share your expertise and build an audience with LinkedIn's publishing platform.",
          link: "/creator-tools"
        },
        { 
          icon: <Award className="h-6 w-6 text-linkedin-blue" />, 
          title: "Promote Your Skills", 
          description: "Get endorsements and certifications to validate your expertise.",
          link: "/skills-promotion"
        }
      ]
    }
  };

  // Get current user type data
  const currentUserType = userTypes[userType as keyof typeof userTypes];
  
  return (
    <div className="min-h-screen bg-linkedin-lightGrey dark:bg-linkedin-darkGrey">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Your Space</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Personalized resources based on your goals and interests.
          </p>
        </div>
        
        <div className="mb-8">
          <Card className="bg-white dark:bg-linkedin-darkGrey border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Select Your Profile Type</CardTitle>
              <CardDescription>Customize your experience based on your current goals</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={userType} onValueChange={setUserType}>
                <SelectTrigger className="w-full md:w-[300px]">
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
            </CardContent>
          </Card>
        </div>
        
        {currentUserType && (
          <div>
            <h2 className="text-xl font-semibold mb-4">{currentUserType.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{currentUserType.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentUserType.resources.map((resource, index) => (
                <Link to={resource.link} key={index} className="block">
                  <Card className="linkedin-card h-full transition-all duration-200 hover:shadow-md hover:border-linkedin-blue dark:hover:border-linkedin-lightBlue cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20">
                          {resource.icon}
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                      <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {resource.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YourSpace;
