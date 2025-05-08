import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Bookmark, 
  ChevronDown, 
  Filter, 
  MapPin, 
  Search, 
  Star, 
  X, 
  Building, 
  ThumbsUp, 
  ThumbsDown, 
  Heart, 
  MessageSquare,
  LightbulbIcon
} from 'lucide-react';
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
  
  // Mock company reviews data - EXPANDED
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
      overview: "Tech Solutions Inc is a leading technology company specializing in AI and machine learning solutions for enterprise customers. They have been at the forefront of digital transformation, helping businesses leverage advanced technologies to drive innovation and operational excellence.",
      mission: "To transform the way businesses operate through cutting-edge AI technology and exceptional service.",
      specialties: ["Artificial Intelligence", "Machine Learning", "Cloud Computing", "Enterprise Software", "Data Analytics", "DevOps", "Digital Transformation", "SaaS Solutions"],
      featuredReviews: [
        {
          id: 101,
          title: "Great work environment and challenging projects",
          rating: 5,
          position: "Senior Software Engineer",
          employment: "Current Employee - 2 years",
          location: "San Francisco, CA",
          date: "April 12, 2025",
          pros: "Excellent work-life balance, competitive compensation, latest technologies, strong engineering culture, and great opportunities for growth. The company truly invests in professional development and provides resources for learning new skills. Leadership is transparent about company direction and challenges.",
          cons: "Some teams face tight deadlines that can create pressure, and the pace of work can be demanding for new employees. The rapid growth means processes are sometimes still being figured out. Occasional communication gaps between departments.",
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
          pros: "Great benefits and compensation package. Some really talented engineers and designers to work with. The company offers excellent learning opportunities and has strong technical expertise. The office environment is comfortable and well-equipped.",
          cons: "Middle management is disorganized and there's often conflicting priorities between departments. Decision-making can be slow due to excessive bureaucracy. Some managers lack people skills and focus too much on metrics rather than team well-being.",
          helpfulCount: 53
        },
        {
          id: 103,
          title: "Innovative company with great potential",
          rating: 4,
          position: "AI Research Scientist",
          employment: "Current Employee - 1 year",
          location: "Boston, MA",
          date: "February 18, 2025",
          pros: "Working on cutting-edge AI technology that has real-world impact. Strong research team with industry leaders. Good collaboration between research and engineering teams. Flexible work arrangements and competitive compensation package.",
          cons: "Sometimes research priorities change too quickly based on market demands. Could improve communication between leadership and individual contributors about strategic changes. Some projects get abandoned without clear explanations.",
          helpfulCount: 42
        },
        {
          id: 104,
          title: "Excellent for career growth but demanding",
          rating: 4,
          position: "Technical Project Manager",
          employment: "Current Employee - 3 years",
          location: "Remote",
          date: "January 5, 2025",
          pros: "Fantastic opportunities for career advancement. Working with latest technologies and methodologies. Strong emphasis on professional development with generous learning budget. Great remote work policy with proper tools and support.",
          cons: "Work-life balance can be challenging during critical project phases. High expectations can lead to stress if you don't manage boundaries well. Some teams are understaffed which leads to occasional overwork.",
          helpfulCount: 38
        }
      ],
      ratings: {
        overall: 4.7,
        workLifeBalance: 4.5,
        compensation: 4.8,
        jobSecurity: 4.6,
        management: 4.2,
        culture: 4.9
      },
      benefits: [
        { name: "Health Insurance", rating: 4.8 },
        { name: "Vacation & Time Off", rating: 4.7 },
        { name: "Retirement Benefits", rating: 4.5 },
        { name: "Parental Leave", rating: 4.9 },
        { name: "Learning & Development", rating: 4.6 }
      ],
      interviews: [
        {
          position: "Software Engineer",
          experience: "Positive",
          difficulty: "Average",
          offers: "Yes",
          process: "Applied online, had an initial screening call with HR, followed by a technical assessment. Then two rounds of technical interviews with team members and a final interview with the engineering manager.",
          questions: [
            "Describe a challenging project you worked on and how you approached it.",
            "How would you design a distributed system for high availability?",
            "Coding exercise involving algorithm optimization."
          ]
        },
        {
          position: "Product Manager",
          experience: "Neutral",
          difficulty: "Difficult",
          offers: "No",
          process: "Employee referral, followed by screening call, case study presentation, and panel interviews with cross-functional team members.",
          questions: [
            "How would you prioritize features for our main product?",
            "Describe how you would validate a new product idea.",
            "Tell us about a time you had to make a difficult product decision."
          ]
        }
      ]
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
      overview: "Global Financial Group is one of the world's leading financial services corporations, providing banking, insurance, investments, and retirement services. With a presence in over 30 countries, they serve millions of customers worldwide through innovative financial solutions and trusted advice.",
      mission: "To empower our customers' financial well-being through trusted advice and innovative solutions.",
      specialties: ["Banking", "Asset Management", "Wealth Management", "Insurance", "Investment Banking", "Financial Planning", "Retirement Services", "Mortgage Lending"],
      featuredReviews: [
        {
          id: 201,
          title: "Stable career but traditional culture",
          rating: 4,
          position: "Financial Analyst",
          employment: "Current Employee - 4 years",
          location: "New York, NY",
          date: "March 28, 2025",
          pros: "Stable work environment, good benefits, opportunities for internal movement, and respected name in the industry. The training programs are comprehensive and there's a clear career path if you want to advance. Good mentorship opportunities from experienced professionals.",
          cons: "Traditional corporate culture that can be slow to adopt change. Work can be repetitive in some departments. The bureaucracy can be frustrating when trying to implement new ideas or processes. Technology stack is sometimes outdated compared to fintech companies.",
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
          pros: "Excellent compensation and bonus structure. Great learning opportunities and exposure to major deals. Working with top-tier clients and on significant transactions provides valuable experience. The prestige of the firm opens doors for future career opportunities.",
          cons: "Extremely long hours and high pressure environment. Work-life balance is practically non-existent in some divisions. Highly competitive culture that can sometimes feel cutthroat. Management can be impersonal and focused solely on results without regard to employee wellbeing.",
          helpfulCount: 98
        },
        {
          id: 203,
          title: "Good for learning fundamentals",
          rating: 4,
          position: "Risk Management Analyst",
          employment: "Former Employee - 2 years",
          location: "Chicago, IL",
          date: "January 10, 2025",
          pros: "Strong training program that builds fundamental financial knowledge. Exposure to various financial products and markets. Good networking opportunities within the industry. Compensation is competitive with good bonuses in profitable years.",
          cons: "Conservative approach to innovation can be frustrating. Some departments are siloed with little cross-functional collaboration. Career advancement can be slow unless you're in a high-visibility role or have a strong sponsor.",
          helpfulCount: 65
        },
        {
          id: 204,
          title: "Improving work-life balance",
          rating: 4,
          position: "Senior Relationship Manager",
          employment: "Current Employee - 5 years",
          location: "Singapore",
          date: "April 2, 2025",
          pros: "The company has made significant improvements in work-life balance policies in recent years. Good client exposure and relationship building opportunities. Excellent international career opportunities with potential for relocation or travel.",
          cons: "Still lags behind tech companies in terms of flexible work arrangements. Legacy systems can make some processes unnecessarily complex. Regulatory requirements create additional administrative burden that can be tedious.",
          helpfulCount: 82
        }
      ],
      ratings: {
        overall: 3.9,
        workLifeBalance: 3.2,
        compensation: 4.5,
        jobSecurity: 4.3,
        management: 3.7,
        culture: 3.8
      },
      benefits: [
        { name: "Health Insurance", rating: 4.5 },
        { name: "Vacation & Time Off", rating: 3.2 },
        { name: "Retirement Benefits", rating: 4.8 },
        { name: "Parental Leave", rating: 3.5 },
        { name: "Learning & Development", rating: 4.2 }
      ],
      interviews: [
        {
          position: "Financial Analyst",
          experience: "Positive",
          difficulty: "Difficult",
          offers: "Yes",
          process: "Three rounds of interviews: HR screening, technical interview with team lead, final panel interview with senior management.",
          questions: [
            "Describe how you would value a company that's considering an IPO.",
            "How would you analyze the risk of a potential investment?",
            "Technical questions about financial modeling and Excel proficiency."
          ]
        },
        {
          position: "Wealth Management Advisor",
          experience: "Positive",
          difficulty: "Average",
          offers: "Yes",
          process: "Initial phone screening, personality assessment, in-person interview with regional manager, and final interview with team.",
          questions: [
            "How would you approach building a client portfolio?",
            "Describe your experience with high-net-worth clients.",
            "Role-playing exercise handling difficult client scenarios."
          ]
        }
      ]
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
      overview: "Creative Design Studio is an award-winning design firm that specializes in UI/UX design, branding, and digital experiences. The studio has worked with Fortune 500 companies as well as innovative startups to create compelling visual identities and user experiences that drive business results.",
      mission: "To transform brands through innovative design that connects emotionally with audiences and drives meaningful engagement.",
      specialties: ["UI/UX Design", "Brand Identity", "Digital Marketing", "Web Development", "Mobile App Design", "Motion Graphics", "Interactive Experiences", "Packaging Design"],
      featuredReviews: [
        {
          id: 301,
          title: "Creative freedom and supportive team",
          rating: 5,
          position: "Senior UI Designer",
          employment: "Current Employee - 3 years",
          location: "Austin, TX",
          date: "May 1, 2025",
          pros: "Creative freedom, collaborative environment, cutting-edge projects, and supportive management that values design. The studio encourages experimentation and innovation, with time dedicated to creative exploration. Regular design workshops and knowledge sharing sessions keep skills sharp. Leadership recognizes and rewards good work consistently.",
          cons: "Client deadlines can sometimes create crunch periods. Some processes could be more streamlined. Project management tools change frequently as the company tries to optimize workflows, which can create temporary confusion. Sometimes communication between departments could be improved.",
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
          pros: "Excellent mentorship program, diverse projects, flexible remote work policy, and good starting salary. The onboarding process is thorough and supportive. Regular feedback helps improve skills quickly. Access to latest design tools and resources. Fun team culture with virtual social events.",
          cons: "Limited clear path for advancement beyond senior designer roles. Company is growing fast which creates some growing pains. Sometimes workload distribution isn't even across the team. Decision making can be slow on larger projects with multiple stakeholders.",
          helpfulCount: 42
        },
        {
          id: 303,
          title: "Inspiring work culture but demanding pace",
          rating: 4,
          position: "UX Researcher",
          employment: "Current Employee - 2 years",
          location: "Austin, TX",
          date: "March 15, 2025",
          pros: "Working with innovative clients on meaningful projects. Research is highly valued and integrated into the design process. Competitive compensation and good benefits. The team is diverse and brings different perspectives to projects. Leadership is accessible and open to feedback.",
          cons: "Fast-paced environment can sometimes prioritize speed over depth of research. Client expectations can be challenging to manage. Some projects have tight budgets that limit research scope. Work can spill into evenings during busy periods.",
          helpfulCount: 53
        },
        {
          id: 304,
          title: "Amazing portfolio builder",
          rating: 5,
          position: "Graphic Designer",
          employment: "Former Employee - 2 years",
          location: "New York, NY",
          date: "February 8, 2025",
          pros: "Opportunity to work on high-profile brands and campaigns that look impressive in your portfolio. Strong creative direction that pushes your skills to new levels. Collaborative team environment where ideas are welcomed from everyone regardless of seniority. Regular creative reviews provide valuable feedback.",
          cons: "Workload can be intense during peak periods. Some clients have very tight turnaround times. The emphasis on visual excellence means multiple revisions are common, which can be exhausting. Benefits package could be more competitive for the industry.",
          helpfulCount: 38
        }
      ],
      ratings: {
        overall: 4.5,
        workLifeBalance: 4.3,
        compensation: 4.0,
        jobSecurity: 4.2,
        management: 4.6,
        culture: 4.8
      },
      benefits: [
        { name: "Health Insurance", rating: 4.2 },
        { name: "Vacation & Time Off", rating: 4.5 },
        { name: "Retirement Benefits", rating: 3.8 },
        { name: "Parental Leave", rating: 4.4 },
        { name: "Learning & Development", rating: 4.9 }
      ],
      interviews: [
        {
          position: "UI/UX Designer",
          experience: "Positive",
          difficulty: "Average",
          offers: "Yes",
          process: "Portfolio review, design challenge, two rounds of interviews with the design team and creative director.",
          questions: [
            "Walk us through your design process for a recent project.",
            "How do you incorporate user feedback into your designs?",
            "Design exercise: redesign a problematic user interface."
          ]
        },
        {
          position: "Art Director",
          experience: "Positive",
          difficulty: "Difficult",
          offers: "Yes",
          process: "Portfolio presentation, case study analysis, team interview, and final interview with creative leadership.",
          questions: [
            "How do you balance creative vision with client requirements?",
            "Describe how you would lead a team through a rebranding project.",
            "How do you stay current with design trends while maintaining a unique perspective?"
          ]
        }
      ]
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
      overview: "Analytics Insights Group helps organizations transform their data into actionable business intelligence through advanced analytics and AI solutions. The company specializes in data strategy, predictive analytics, and building custom data platforms that drive business growth and operational efficiency.",
      mission: "To empower organizations to make confident, data-driven decisions through accessible analytics and machine learning solutions.",
      specialties: ["Data Science", "Business Intelligence", "Machine Learning", "Statistical Analysis", "Predictive Modeling", "Data Engineering", "Visualization", "AI Strategy"],
      featuredReviews: [
        {
          id: 401,
          title: "Exciting work with cutting-edge tech",
          rating: 4,
          position: "Data Scientist",
          employment: "Current Employee - 2 years",
          location: "Boston, MA",
          date: "March 3, 2025",
          pros: "Working with cutting-edge technologies and methodologies. Challenging problems to solve and good technical leadership. The company invests in new tools and technologies, allowing teams to experiment with innovative approaches. Regular knowledge sharing sessions keep everyone updated on advances in the field. Collaborative environment with accessible leadership.",
          cons: "Communication between technical and business teams could be improved. Sometimes project requirements change frequently. Client expectations about AI capabilities can be unrealistic and difficult to manage. Some projects have aggressive timelines that can create pressure.",
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
          pros: "Excellent training opportunities and exposure to diverse industries. Strong technical team with lots to learn from. Projects are challenging and provide good career development. The company provides access to courses and certifications. Good compensation package with performance bonuses.",
          cons: "Client-facing roles can be demanding with tough deadlines and high expectations. Some teams are understaffed. Work-life balance can suffer during critical project phases. Internal processes could be more streamlined. Limited options for remote work compared to competitors.",
          helpfulCount: 38
        },
        {
          id: 403,
          title: "Innovative company that values expertise",
          rating: 5,
          position: "Machine Learning Engineer",
          employment: "Current Employee - 1 year",
          location: "Remote",
          date: "April 10, 2025",
          pros: "Truly values technical expertise and innovation. Remote-friendly culture with effective collaboration tools. Interesting problems to solve across multiple industries. Clear career progression paths for technical roles. Leadership communicates company direction and strategy effectively.",
          cons: "Project staffing can sometimes lead to overspecialization. Some legacy clients use outdated technology stacks that can be frustrating to work with. Benefits package could be more competitive. Company is growing quickly which creates occasional organizational challenges.",
          helpfulCount: 45
        },
        {
          id: 404,
          title: "Good stepping stone for career advancement",
          rating: 4,
          position: "Data Engineer",
          employment: "Former Employee - 3 years",
          location: "Boston, MA",
          date: "January 5, 2025",
          pros: "Exposure to various industries and data architectures. Strong emphasis on best practices and data quality. Good technical mentorship from senior team members. Projects provide valuable experience that translates well to career advancement. Company name is well-respected in the industry.",
          cons: "Project timelines can be aggressive, leading to occasional crunch periods. Compensation is good but not top-of-market. Some teams experience high turnover. Training for new technologies could be more structured and comprehensive. Internal tools sometimes lag behind industry standards.",
          helpfulCount: 32
        }
      ],
      ratings: {
        overall: 4.2,
        workLifeBalance: 3.8,
        compensation: 4.3,
        jobSecurity: 4.0,
        management: 4.2,
        culture: 4.4
      },
      benefits: [
        { name: "Health Insurance", rating: 4.5 },
        { name: "Vacation & Time Off", rating: 3.9 },
        { name: "Retirement Benefits", rating: 4.2 },
        { name: "Parental Leave", rating: 3.8 },
        { name: "Learning & Development", rating: 4.7 }
      ],
      interviews: [
        {
          position: "Data Scientist",
          experience: "Neutral",
          difficulty: "Difficult",
          offers: "Yes",
          process: "Technical assessment, coding challenge, two rounds of technical interviews, and final interview with leadership.",
          questions: [
            "How would you build a recommendation engine for an e-commerce website?",
            "Coding exercise involving data cleaning and machine learning implementation.",
            "Describe a challenging data analysis project you've worked on and how you solved it."
          ]
        },
        {
          position: "Analytics Consultant",
          experience: "Positive",
          difficulty: "Average",
          offers: "Yes",
          process: "Case study, presentation on past analytics work, panel interview with consulting team.",
          questions: [
            "How would you explain complex analytics concepts to non-technical stakeholders?",
            "Describe how you would approach a data strategy project for a client.",
            "How do you validate results and ensure data quality?"
          ]
        }
      ]
    },
    {
      id: 5,
      name: "GreenTech Innovations",
      logo: "GT",
      rating: 4.6,
      reviews: 526,
      industry: "Environmental Technology",
      size: "501-1,000 employees",
      type: "Private Company",
      founded: 2014,
      headquarters: "Portland, OR",
      website: "greentechinnovations.com",
      overview: "GreenTech Innovations develops sustainable technology solutions for businesses and consumers. Their products range from energy-efficient smart home systems to industrial-scale renewable energy solutions. The company is committed to environmental stewardship while delivering cutting-edge technology.",
      mission: "To accelerate the transition to sustainable living through innovative technology that reduces environmental impact.",
      specialties: ["Renewable Energy", "Smart Home Technology", "Energy Efficiency", "Environmental Monitoring", "Sustainable Design", "IoT Solutions", "Carbon Footprint Reduction"],
      featuredReviews: [
        {
          id: 501,
          title: "Mission-driven company with real impact",
          rating: 5,
          position: "Product Manager",
          employment: "Current Employee - 2 years",
          location: "Portland, OR",
          date: "April 25, 2025",
          pros: "Working on products that have a positive environmental impact. Strong company mission that aligns with personal values. Collaborative culture that encourages innovation. Good work-life balance with flexible schedules. Leadership is transparent about company direction and challenges.",
          cons: "Growth has led to some organizational challenges. Some projects face funding constraints due to venture capital expectations. Decision-making can sometimes be slow when multiple stakeholders are involved.",
          helpfulCount: 73
        },
        {
          id: 502,
          title: "Great culture but growing pains",
          rating: 4,
          position: "Software Engineer",
          employment: "Current Employee - 1 year",
          location: "Remote",
          date: "March 12, 2025",
          pros: "Meaningful work with environmental impact. Strong engineering practices and modern tech stack. Supportive team environment with good collaboration. Remote-friendly policies with effective tools for distributed work.",
          cons: "Rapid growth has created some process inefficiencies. Documentation sometimes lags behind development. Compensation is good but not competitive with pure tech companies. Some teams are understaffed which creates occasional workload challenges.",
          helpfulCount: 48
        }
      ],
      ratings: {
        overall: 4.6,
        workLifeBalance: 4.4,
        compensation: 4.2,
        jobSecurity: 4.3,
        management: 4.5,
        culture: 4.8
      },
      benefits: [
        { name: "Health Insurance", rating: 4.5 },
        { name: "Vacation & Time Off", rating: 4.7 },
        { name: "Retirement Benefits", rating: 4.0 },
        { name: "Parental Leave", rating: 4.6 },
        { name: "Learning & Development", rating: 4.3 }
      ],
      interviews: [
        {
          position: "Environmental Engineer",
          experience: "Positive",
          difficulty: "Average",
          offers: "Yes",
          process: "Technical assessment, two rounds of interviews with team and leadership.",
          questions: [
            "How would you approach optimizing energy efficiency in a commercial building?",
            "Describe a project where you implemented sustainable solutions.",
            "Technical questions about specific environmental regulations and standards."
          ]
        }
      ]
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
    { name: 'Environmental', salary: 88000 },
    { name: 'Telecommunications', salary: 97000 },
    { name: 'Pharmaceuticals', salary: 118000 },
    { name: 'Automotive', salary: 79000 },
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
    { name: 'DevOps Engineer', salary: 128000 },
    { name: 'Business Analyst', salary: 92000 },
    { name: 'Project Manager', salary: 115000 },
    { name: 'Systems Administrator', salary:
