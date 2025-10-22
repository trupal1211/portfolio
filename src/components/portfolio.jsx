"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "./theme-provider"
import ProfilePic from "../images/profile.jpg"
import VmvLogo from "../images/vmv.jpg"

import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  ArrowUp,
  Mail,
  MapPin,
  ExternalLink,
  Download,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Moon,
  Sun,
} from "lucide-react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaJava, FaPython } from "react-icons/fa6"
import { Button } from "./ui/button"
import { SiMongodb, SiExpress, SiCplusplus, SiMysql, SiC, SiPostman, SiTailwindcss } from "react-icons/si"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

const skills = [
  { name: "C", icon: <SiC className="text-2xl text-blue-400" />, color: "text-blue-400" },
  { name: "C++", icon: <SiCplusplus className="text-2xl text-purple-500" />, color: "text-purple-500" },
  { name: "Java", icon: <FaJava className="text-2xl text-orange-600" />, color: "text-orange-600", },
  { name: "Python", icon: <FaPython className="text-2xl text-blue-500" />, color: "text-blue-500", },
  { name: "MySQL", icon: <SiMysql className="text-2xl text-blue-600" />, color: "text-blue-600" },
  { name: "HTML5", icon: <FaHtml5 className="text-2xl text-orange-500" />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt className="text-2xl text-blue-500" />, color: "text-blue-500" },
  { name: "Tailwind", icon: <SiTailwindcss className="text-2xl text-sky-400" />, color: "text-sky-400", },
  { name: "JavaScript", icon: <FaJs className="text-2xl text-yellow-500" />, color: "text-yellow-500" },
  { name: "React.js", icon: <FaReact className="text-2xl text-cyan-500" />, color: "text-cyan-500" },
  { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-500" />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress className="text-2xl text-gray-400" />, color: "text-gray-400" },
  { name: "MongoDB", icon: <SiMongodb className="text-2xl text-green-600" />, color: "text-green-600" },
  { name: "Git", icon: <FaGitAlt className="text-2xl text-red-500" />, color: "text-red-500" },
  { name: "GitHub", icon: <FaGithub className="text-2xl text-gray-300 dark:text-gray-300 text-gray-700" />, color: "text-gray-300 dark:text-gray-300 text-gray-700", },
  { name: "REST APIs", icon: <SiPostman className="text-2xl text-orange-600" />, color: "text-orange-600" },
  { name: "Figma", icon: <FaFigma className="text-2xl text-pink-500" />, color: "text-pink-500", }
]

const projects = [
   {
    title: "QueryNest",
    description:
      "A peer-to-peer query-solving platform for college students to post and answer queries based on skill tags.Features include  personalized feeds, OTP-based login, answer ratings, and a points-based leaderboard system.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB","JWT"],
    github: "https://github.com/trupal1211/QueryNest",
    // live: "#",
    image: "https://dy7glz37jgl0b.cloudfront.net/advice/images/902f6a7aed363495e9acc6472fb454aa-online-therapy-with-licensed-counselors-hero-image-4.png",
  },
  {
    title: "EcoTrack",
    description:
      "Built a community-based waste reporting platform where users can report issues with geolocation, images, and track resolution progress in real-time. Features include role-based access for users, NGOs and admins, interactive map, and reminder notifications via email.",
    tech: ["MERN", "Tailwind", "JWT","Google Maps API","Google Oauth","Cloudinary"],
    github: "https://github.com/trupal1211/EcoTrack",
    live: "https://ecotrack-green.vercel.app",
    // image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZfBIQoiQXD5eMKpOV9OdmH00Fk1dvFesKGj4qFnWJkY9_W5ZN"
    image:"data:image/jpeg;base64,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"
  },
  {
    title: "SPIQuest",
    description:
      "A responsive SPI calculator designed to help students easily estimate their semester performance without manual grade computation. Features a clean UI, instant results, and cross-device accessibility to simplify academic tracking for students.",
    tech: ["React.js","Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/trupal1211/SPIQuest",
    live: "https://spi-quest.vercel.app",
    // image: "https://www.chanty.com/blog/wp-content/uploads/2020/10/Task-manager-apps-scaled.jpg"
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI_x3aCQUcEaO2YeqImq_PN2KhpZCMNf5G6wRNJrcpOwOD6EV8"
  },
]

const downloadResume = () => {
  // window.open("https://drive.google.com/file/d/1XqafyCXk_48h66vMdesTnPIXK-h3trTh/view?usp=sharing","_blank")
  const link = document.createElement("a");
  link.href = "/Trupal_Godhat_Resume.pdf";
  link.download = "Trupal_Godhat_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show/hide navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }
      setLastScrollY(currentScrollY)

      // Active section tracking
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 to-purple-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10"
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              TG
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-violet-400 ${activeSection === item ? "text-violet-400" : "text-slate-700 dark:text-white/70"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="border-violet-400/50 text-violet-400 hover:bg-violet-400/10"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-violet-400/50 text-violet-400 hover:bg-violet-400/10"
                onClick={downloadResume}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 mt-8"
          >
            <div className="relative inline-block">
              <img
                src={ProfilePic}
                alt="Trupal Godhat"
                className="w-40 h-40 rounded-full border-4 border-violet-400/50 shadow-2xl shadow-violet-500/25"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-400/20 to-purple-400/20 animate-pulse" />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 dark:from-white via-violet-500 dark:via-violet-200 to-violet-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Trupal Godhat
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-violet-500 dark:text-violet-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="inline-flex items-center">
              <Code className="w-6 h-6 mr-2" />
              Full-Stack Developer
            </span>
          </motion.div>

          <motion.p
            className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-gray-300 leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Passionate Final year Information Technology student specializing in MERN stack development. I transform
            ideas into elegant, scalable solutions and thrive on solving complex problems through innovative code.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-600 hover:to-purple-600 text-white border-0"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-violet-400/50 text-violet-400 hover:bg-violet-400/10"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-20 pb-10 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 backdrop-blur-sm">
                <CardContent className="sm:p-6 p-4">
                  <div className="flex items-center mb-4">
                    <User className="w-8 h-8 text-violet-400 mr-3" />
                    <h3 className="text-2xl font-semibold">Who I Am</h3>
                  </div>
                  <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                    I'm a dedicated Information Technology student with a passion for creating impactful digital
                    solutions. My journey in web development started with curiosity and has evolved into a deep
                    commitment to crafting exceptional user experiences.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 backdrop-blur-sm">
                <CardContent className="sm:p-6 p-4">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="w-6 h-6 text-violet-400 mr-3" />
                    <h4 className="text-lg font-semibold">Education</h4>
                  </div>
                  <p className="text-slate-600 dark:text-gray-300">B.Tech in Information Technology</p>
                  <p className="text-sm text-slate-500 dark:text-gray-400">Dharmsinh Desai University (2022 – 2026)</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 backdrop-blur-sm">
                <CardContent className="sm:p-6 p-4">
                  <div className="flex items-center mb-3">
                    <Briefcase className="w-6 h-6 text-violet-400 mr-3" />
                    <h4 className="text-lg font-semibold">Experience</h4>
                  </div>
                  <p className="text-slate-600 dark:text-gray-300">Frontend Developer Intern</p>
                  <p className="text-sm text-slate-500 dark:text-gray-400">VMV Infosoft</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="pt-20 pb-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 backdrop-blur-sm hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <h3 className={`font-semibold ${skill.color}`}>{skill.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-20 pb-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 backdrop-blur-sm hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 group overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardContent className="p-3 sm:p-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
                    <p className="text-slate-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-1 line-clamp-7">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-violet-500/20 text-violet-600 dark:text-violet-300 border-violet-500/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-violet-400/50 text-violet-400 hover:bg-violet-400/10"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {project.live && <Button
                        size="sm"
                        className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-600 hover:to-purple-600"
                        onClick={() => window.open(project.live, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >


            <Card className="block sm:hidden w-full sm:w-auto bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 backdrop-blur-sm">
              <CardContent className="p-3 sm:p-8">
                <div className="flex flex-col gap-4">
                  {/* Header section: logo and title side by side on mobile */}
                  <div className="flex flex-row sm:flex-col items-start sm:items-start gap-4">
                    <img
                      src={VmvLogo}
                      alt="VMV Infosoft Logo"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded mt-1"
                    />
                    <div>
                      <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                        Frontend Developer Intern
                      </h3>
                      <p className="text-sm text-violet-400 sm:text-base">VMV Infosoft • Summer 2024</p>
                    </div>
                  </div>

                  {/* Description and tech badges (full width) */}
                  <div>
                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-4 line-clamp-4">
                      Completed an intensive summer internship focusing on building responsive web interfaces using
                      React.js and Bootstrap. Developed reusable UI components and integrated REST APIs for dynamic
                      content rendering. Ensured cross-device compatibility and optimized user experience across
                      multiple projects.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["HTML", "CSS", "Tailwind", "JavaScript", "React.js", "Responsive Design"].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-violet-500/20 text-violet-600 dark:text-violet-300 border-violet-500/30 cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hidden sm:block w-full sm:w-auto bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Logo */}
                  <div className="shrink-0">
                    <img
                      src={VmvLogo}
                      alt="VMV Infosoft Logo"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded mt-1"
                    />
                  </div>

                  {/* Right Side (title + content) */}
                  <div className="flex-1">
                    {/* Title & subtitle */}
                    <div>
                      <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                        Frontend Developer Intern
                      </h3>
                      <p className="text-sm sm:text-base text-violet-400 mb-4">
                        VMV Infosoft • Summer 2024
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-4 line-clamp-4">
                      Completed an intensive summer internship focusing on building responsive web interfaces using
                      React.js and Bootstrap. Developed reusable UI components and integrated REST APIs for dynamic
                      content rendering. Ensured cross-device compatibility and optimized user experience across
                      multiple projects.
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["HTML", "CSS", "Tailwind", "JavaScript", "React.js", "Responsive Design"].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-violet-500/20 text-violet-600 dark:text-violet-300 border-violet-500/30 cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>




          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Trupal Godhat
              </h3>
              <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                Full-Stack Developer passionate about creating innovative solutions with modern web technologies.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/trupal1211" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/trupal-godhat-68b490250" },
                  { icon: Instagram, href: "https://www.instagram.com/trupal_godhat/" },
                  { icon: Twitter, href: "https://x.com/Trupal_Godhat" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-gray-400 hover:text-violet-400 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-slate-500 dark:text-gray-400 hover:text-violet-400 transition-colors text-sm"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 text-violet-400 mr-3" />
                  <span className="text-slate-600 dark:text-gray-300">trupalgodhat1211@gmail.com</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 text-violet-400 mr-3" />
                  <span className="text-slate-600 dark:text-gray-300">Jetpur, Rajkot, India</span>
                </div>
              </div>
            </motion.div>
            
          </div>

        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-600 hover:to-purple-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  )
}
