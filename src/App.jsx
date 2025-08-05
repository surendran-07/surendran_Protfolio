import React, { useEffect, useState } from "react";
import {
  Github,
  Mail,
  Instagram,
  Linkedin,
  Download,
  BookOpen,
  Award,
  Briefcase,
  Code,
  User,
  GraduationCap,
  Menu,
  X,
  Layout,
  Database,
  Terminal,
  Globe,
  Github as Git,
  Server,
  Cloud,
  Brain,
  Users,
  MessageSquare,
  Lightbulb,
  Target,
  Clock,
  BarChart,
  PieChart,
  LineChart,
  Table,
  Cpu,
  Network,
  Shield,
  Wrench,
  Workflow,
  Laptop,
  Blocks,
  Puzzle,
  Microscope,
  Gauge,
  HeartHandshake,
  Presentation,
  Megaphone,
  BookCheck,
  Glasses,
  Rocket,
} from "lucide-react";
import resumePdf from "./assets/resume/SURENDRAN_resume.pdf";
import profileImage from "./assets/images/profile.jpg";
import Contact from "./Component/Contact";
function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllHonours, setShowAllHonours] = useState(false);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "#about", label: "About", icon: User },
    { href: "#education", label: "Education", icon: GraduationCap },
    { href: "#experience", label: "Experience", icon: Briefcase },
    { href: "#skills", label: "Skills", icon: Code },
    { href: "#projects", label: "Projects", icon: BookOpen },
    { href: "#certifications", label: "Certifications", icon: Award },
    { href: "#Honours", label: "Honours", icon: Award },
  ];

  const technicalSkills = [
    { name: "JavaScript", icon: Terminal },
    { name: "React", icon: Code },
    { name: "Tailwind CSS", icon: Code },
    { name: "Node.js", icon: Server },
    { name: "Python", icon: Terminal },
    { name: "HTML/CSS", icon: Layout },
    { name: "SQL", icon: Database },
    { name: "Git", icon: Git },
    { name: "AWS", icon: Cloud },
    { name: "MongoDB", icon: Database },
    { name: "Power BI", icon: PieChart },
    { name: "Tableau", icon: PieChart },
    { name: "Excel", icon: Table },
    { name: "DevOps", icon: Workflow },
    // { name: "System Design", icon: Network },
    // { name: "Data Engineering", icon: Database },
    { name: "Jenkins", icon: Wrench },
    { name: "Cloud Computing", icon: Cloud },
  ];

  const nonTechnicalSkills = [
    { name: "Problem Solving", icon: Brain },
    { name: "Team Leadership", icon: Users },
    { name: "Communication", icon: MessageSquare },
    { name: "Critical Thinking", icon: Lightbulb },
    { name: "Project Management", icon: Target },
    { name: "Time Management", icon: Clock },
    { name: "Data Analysis", icon: BarChart },
    { name: "Strategic Planning", icon: Target },
    { name: "Research", icon: Microscope },
    { name: "Performance Analysis", icon: Gauge },
    { name: "Collaboration", icon: HeartHandshake },
    { name: "Presentation Skills", icon: Presentation },
    { name: "Public Speaking", icon: Megaphone },
    { name: "Documentation", icon: BookCheck },
    { name: "Analytical Skills", icon: Glasses },
    { name: "Innovation", icon: Rocket },
  ];

  const expertiseAreas = [
    {
      title: "Web Development",
      icon: Globe,
      description:
        "Full-stack development with modern frameworks and responsive design principles",
    },
    {
      title: "UI/UX Design",
      icon: Layout,
      description:
        "Creating intuitive and user-friendly interfaces with modern design patterns",
    },
    {
      title: "Data Analytics",
      icon: BarChart,
      description:
        "Data analysis and visualization using modern tools and techniques",
    },
    {
  title: "Python Development",
  icon: Code, 
  description:
    "Writing clean and efficient Python code to develop applications, automate tasks, and perform data analysis using popular libraries.",
}

  ];

  const projects = [
    
    {
      title: "User Authentication",
      description:"user authentication system where only registered user can move to the next page with filling correct username and password",
      demo: "https://user-authentication-suren.rf.gd/?i=1",
      source: "https://github.com/surendran-07/PRODIGY_FS_01",
    },
    {
      title: "Employee Management System",
      description:
        "Employee Management system for admin to Performance CRUD operation and manage the username and password",
      demo: "https://employee-management-surendran.ct.ws/",
      source: "https://github.com/surendran-07/PRODIGY_FS_02",
    },
    {
      title: "Text-to-Speech multiple language convertor",
      description: "It Converts the text into speech.",
      demo: "https://text-to-multiple-language-speech-sure.netlify.app/",
      source: "https://github.com/surendran-07/wheather_web_app",
    },
    {
      title: "Word Counter",
      description:
        "It count the number of words that has been typed and will be displayed",
      demo: "https://wordcounter-suren.netlify.app/",
      source: "https://github.com/surendran-07/wheather_web_app",
    },
    {
      title: "Resume Builder",
      description:
        "Gets input from the user and display the resume with live preview which is downloadable",
      demo: "https://suren-resume-builder.netlify.app/",
      source: "https://github.com/surendran-07/Resume_builder",
    },
    {
      title: "Weather Dashboard",
      description:
        "Weather Dashboard which displays weather data of the required location.",
      demo: "https://suren-weather-app.netlify.app/",
      source: "https://github.com/surendran-07/wheather_web_app",
    },
    {
      title: "Simple TODO List",
      description: "A Simple todo list where task can be added and removed ",
      demo: "https://todolist-suren.netlify.app/",
      source: "https://github.com/surendran-07/todolist",
    },
    {
      title: "simpleCalculator",
      description: "Simple calculator using HTML,CSS,Javascript.",
      demo: "calculator-surendran.netlify.app",
      source: "https://github.com/surendran-07/Calculator",
    },
  ];

  const certifications = [
    
    
    {
      title: "IBM Full Stack Software Developer",
      issuer: "IBM",
      year: "2024",
      url: "https://coursera.org/share/9d607ae33df9718a2111111501c56030",
    },
    {
      title: "META Front End Developer",
      issuer: "META",
      year: "2024",
      url: "https://coursera.org/share/8b0924cb184bff666643b1041159ff17",
    },
    {
      title: "UX Design",
      issuer: "GOOGLE",
      year: "2024",
      url: "https://coursera.org/share/f976af5cad1441d636108273ec6b8044",
    },
    {
      title: "Database Engineering",
      issuer: "META",
      year: "2024",
      url: "https://coursera.org/share/38864aef900d6c8518adfec606c670c5",
    },
    {
      title: "Advanced Data Analytics",
      issuer: "GOOGLE",
      year: "2024",
      url: "https://coursera.org/share/7b894f272d77a51b4f3525b8dd6b5598",
    },
    {
      title: "Microsoft 365 Power and Power Platform",
      issuer: "Microsoft",
      year: "2024",
      url: "https://coursera.org/share/00836802d6090e45bfe2a917fdaacf21",
    },
    {
      title: "Project Management",
      issuer: "GOOGLE",
      year: "2024",
      url: "https://coursera.org/share/109f4ffee87d4775df999575c5cce9aa",
    },
    {
      title: "Career Edge-Young Professional",
      issuer: "TCSion",
      year: "2025",
      url: "https://www.tcsion.com/certificate/123",
    },
    {
      title: "Data Visualization",
      issuer: "TATA",
      year: "2025",
      url: "https://www.tatadigital.com/certificate/456",
    },
    {
      title: "Data Science Professional",
      issuer: "IBM",
      year: "2024",
      url: "https://coursera.org/share/56ee745f254f1a696af1e7f2d96827d6",
    },
    {
      title: "Generative AI for Software Developers",
      issuer: "IBM",
      year: "2024",
      url: "https://coursera.org/share/365c57d9d6e7293e5434f201f42efa8e",
    },
    {
      title: "IT Automation",
      issuer: "Google",
      year: "2024",
      url: "https://coursera.org/share/61d4386e13c47c96ebb3f441097f76c3",
    },

    {
      title: "Microsoft Cloud Support Associate",
      issuer: "Microsoft",
      year: "2024",
      url: "https://coursera.org/share/ee21ccdaada838580b54e4fcb731ab5d",
    },
    {
      title: "AWS Cloud Solution Architect",
      issuer: "AWS",
      year: "2024",
      url: "https://coursera.org/share/c814393701f005fccc0fae375e0d8038",
    },
    {
      title: "IT Support",
      issuer: "GOOGLE",
      year: "2024",
      url: "https://coursera.org/share/3e11bcc9eab9d79ee000658f0dc2b87a",
    },
    {
      title: "Jenkins from Zero-Hero",
      issuer: "Lenskart",
      year: "2024",
      url: "https://coursera.org/share/527a025d8973e8cd3c53711c8a16d47c",
    },
    {
      title: "Introduction to Soft Skills",
      issuer: "TCSion",
      year: "2025",
      url: "https://www.tcsion.com/certificate/252",
    },
    {
      title: "Digital Marketing & E-Commerce",
      issuer: "GOOGLE",
      year: "2024",
      url: "https://coursera.org/share/7fe7faf8dc74c019440b47c922a97966",
    },
  ];

  const honours = [
    {
      title:
        "Honoured with Rank holder status in Higher Secondary School Education",
      institution: "Infant Jesus Matriculation Higher Secondary School",
      year: "2024",
    },
    {
      title: "Honours Diploma in Computer Application",
      institution: "Computer Software College",
      year: "2024",
    },
    {
      title: "Won 1st Price in Paper Presentation",
      institution: "SNS College of Technology",
      year: "2025",
    },
    {
      title: "Won 2nd Price in Paper Presentation",
      institution: "Sri Krishna Arts and Science College",
      year: "2025",
    },
    {
      title: "Finalist in UI/UX Designing Competition",
      institution: "KPR College of Arts Science and Research",
      year: "2024",
    },
    {
      title: "Finalist in Ideathon",
      institution: "Sri Krishna Arts and Science College",
      year: "2024",
    },
    {
      title:
        "Winner in National Level Karate Championship in under 18 category in Kata",
      institution: "Meibukon gujorio karate dojo",
      year: "2022",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
   
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-gray-800 shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            <h1 className="text-2xl font-bold">Surendran</h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-blue-400"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="https://github.com/surendran-07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 hover:text-blue-400 transition-colors" />
              </a>
              <a href="mailto:surendranv200507@gmail.com">
                <Mail className="w-6 h-6 hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/surendran-v-7a3b0a307/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 fade-in-section">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <div className="w-64 h-64 mx-auto rounded-full border-4 border-blue-600 shadow-xl overflow-hidden">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-5xl font-bold mb-6">Hi, I'm Surendran</h2>
              <p className="text-xl text-gray-400 mb-8">
                Full Stack Web-Developer & Data Analyst
              </p>
              <div className="flex space-x-4 justify-center">
                <a
                  href={resumePdf}
                  download
                  className="flex items-center px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800 fade-in-section" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center mb-12">
            <User className="w-8 h-8 mr-4 text-blue-400" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="mb-12 text-center">
            <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
              I'm a passionate software developer with a strong foundation in
              full-stack development, data analytics, and Python programming. I
              enjoy building scalable web applications and uncovering insights
              from data to solve real-world problems. With a focus on clean
              code, performance, and usability, I strive to deliver solutions
              that are both technically sound and user-friendly.
            </p>
          </div>

          {/* Expertise Areas */}
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
            {expertiseAreas.map((area) => (
              <div key={area.title} className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <area.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                </div>
                <p className="text-gray-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 fade-in-section" id="education">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <GraduationCap className="w-8 h-8 mr-4 text-blue-400" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="grid gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Bachelor of Science
              </h3>
              <p className="text-gray-400">
                Computer Science With Cognitive Systems
              </p>
              <p className="text-gray-400">
                Sri Krishna Arts and Science College
              </p>
              <p className="text-gray-400">CGPA - 8.5/10</p>
              <p className="text-gray-500">2023 - 2026</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Higher Secondary Education
              </h3>
              <p className="text-gray-400">Computer Applications</p>
              <p className="text-gray-400">
                Infant Jesus Matriculation Higher Secondary School
              </p>
              <p className="text-gray-500">
                Achieved Rank holder status in Higher Secondary School
                Education, demonstrating academic excellence and strong
                dedication to studies.
              </p>
              <p className="text-gray-500">2021 - 2023</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Senior Secondary Education
              </h3>
              <p className="text-gray-400">
                Infant Jesus Matriculation Higher Secondary School
              </p>
              <p className="text-gray-500">2019 - 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-800 fade-in-section" id="experience">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <Briefcase className="w-8 h-8 mr-4 text-blue-400" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="grid gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                MERN Stack Developer Intern
              </h3>
              <p className="text-gray-400">Cyfotok infosec</p>
              <p className="text-gray-500">MAY 2025</p>
              <ul className="list-disc list-inside text-gray-400 mt-4">
                <li>Developed and maintained website Using MERN</li>
                <li>Gained Strong Foundation about MERN stack</li>
                <li>leaned web hosting and deployment </li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Software Developer Intern
              </h3>
              <p className="text-gray-400">Codtech IT Solutions</p>
              <p className="text-gray-500">Dec 2024 - Jan 2025</p>
              <ul className="list-disc list-inside text-gray-400 mt-4">
                <li>Developed and maintained software using Python</li>
                <li>Collaborated with cross-functional teams</li>
                <li>Implemented new features and optimizations</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Full-stack Developer Intern
              </h3>
              <p className="text-gray-400">Prodigy Infotech</p>
              <p className="text-gray-500">Sep 2024</p>
              <ul className="list-disc list-inside text-gray-400 mt-4">
                <li>Developed and maintained web applications</li>
                <li>Hands-On Development of Full-Stack Solutions</li>
                <li>Comprehensive Testing and Debugging Expertise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 fade-in-section" id="skills">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center mb-12">
            <Code className="w-8 h-8 mr-4 text-blue-400" />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3 hover:bg-gray-700 transition-colors"
                >
                  <skill.icon className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Non-Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {nonTechnicalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3 hover:bg-gray-700 transition-colors"
                >
                  <skill.icon className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-800 fade-in-section" id="projects">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <BookOpen className="w-8 h-8 mr-4 text-blue-400" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects
              .slice(0, showAllProjects ? projects.length : 6)
              .map((project, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={project.demo}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      View Demo
                    </a>
                    <a
                      href={project.source}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              ))}
          </div>
          {projects.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {showAllProjects ? "Show Less" : "See All Projects"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 fade-in-section" id="certifications">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <Award className="w-8 h-8 mr-4 text-blue-400" />
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications
              .slice(0, showAllCertifications ? certifications.length : 6)
              .map((cert, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                  <p className="text-gray-500 mb-4">{cert.year}</p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    <Award className="w-4 h-4 mr-2" />
                    View Certificate
                  </a>
                </div>
              ))}
          </div>
          {certifications.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllCertifications(!showAllCertifications)}
                className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {showAllCertifications ? "Show Less" : "See All Certifications"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Honours Section */}
      <section className="py-20 fade-in-section" id="Honours">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <Award className="w-8 h-8 mr-4 text-blue-400" />
            <h2 className="text-3xl font-bold">Honours & Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {honours
              .slice(0, showAllHonours ? honours.length : 6)
              .map((honour, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{honour.title}</h3>
                  <p className="text-gray-400">{honour.institution}</p>
                  <p className="text-gray-500">{honour.year}</p>
                </div>
              ))}
          </div>
          {honours.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllHonours(!showAllHonours)}
                className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {showAllHonours ? "Show Less" : "See All Honours"}
              </button>
            </div>
          )}
        </div>
      </section>
      <Contact />
      {/* Contact Form Section */}
      {/* <section className="py-20 bg-gray-800 fade-in-section">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <Mail className="w-8 h-8 mr-4 text-blue-400" />
            <h2 className="text-3xl font-bold">Contact Me</h2>
          </div>
          <form 
            className="contact-form max-w-2xl mx-auto"
            action="https://formsubmit.co/surendranv200507@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                required 
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400">
              © 2025 surendran. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://github.com/surendran-07"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/surendran-v-7a3b0a307/"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:surendranv200507@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
