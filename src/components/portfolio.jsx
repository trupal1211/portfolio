// //"use client"

// import { useEffect, useState } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"
// import {
//   Github,
//   Linkedin,
//   Instagram,
//   Twitter,
//   ArrowUp,
//   Mail,
//   MapPin,
//   ExternalLink,
//   Download,
//   Code,
//   Briefcase,
//   GraduationCap,
//   User,
// } from "lucide-react"
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa6"
// import { SiMongodb, SiExpress, SiCplusplus, SiMysql, SiC, SiPostman } from "react-icons/si"
// import { Button } from "./ui/button"
// import { Card, CardContent } from "./ui/card"
// import { Badge } from "./ui/badge"

// const skills = [
//   { name: "HTML5", icon: <FaHtml5 className="text-2xl text-orange-500" />, color: "text-orange-500" },
//   { name: "CSS3", icon: <FaCss3Alt className="text-2xl text-blue-500" />, color: "text-blue-500" },
//   { name: "JavaScript", icon: <FaJs className="text-2xl text-yellow-500" />, color: "text-yellow-500" },
//   { name: "React.js", icon: <FaReact className="text-2xl text-cyan-500" />, color: "text-cyan-500" },
//   { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-500" />, color: "text-green-500" },
//   { name: "Express.js", icon: <SiExpress className="text-2xl text-gray-400" />, color: "text-gray-400" },
//   { name: "MongoDB", icon: <SiMongodb className="text-2xl text-green-600" />, color: "text-green-600" },
//   { name: "MySQL", icon: <SiMysql className="text-2xl text-blue-600" />, color: "text-blue-600" },
//   { name: "Git", icon: <FaGitAlt className="text-2xl text-red-500" />, color: "text-red-500" },
//   { name: "GitHub", icon: <FaGithub className="text-2xl text-gray-300" />, color: "text-gray-300" },
//   { name: "C++", icon: <SiCplusplus className="text-2xl text-purple-500" />, color: "text-purple-500" },
//   { name: "C", icon: <SiC className="text-2xl text-blue-400" />, color: "text-blue-400" },
//   { name: "REST APIs", icon: <SiPostman className="text-2xl text-orange-600" />, color: "text-orange-600" },
// ]

// const projects = [
//   {
//     title: "QueryNest",
//     description:
//       "A comprehensive peer-to-peer counseling platform built with the MERN stack. Features include secure user authentication, interactive Q&A system, dynamic leaderboard, and intelligent skill-based tagging for enhanced user experience.",
//     tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
//     github: "https://github.com/trupal1211/querynest",
//     live: "#",
//     image: "https://via.placeholder.com/400x200/1e293b/ffffff?text=QueryNest",
//   },
//   {
//     title: "E-Commerce Platform",
//     description:
//       "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern web technologies for optimal performance.",
//     tech: ["React", "Node.js", "Stripe", "MongoDB"],
//     github: "#",
//     live: "#",
//     image: "https://via.placeholder.com/400x200/1e293b/ffffff?text=E-Commerce",
//   },
//   {
//     title: "Task Management App",
//     description:
//       "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
//     tech: ["React", "Socket.io", "Express", "PostgreSQL"],
//     github: "#",
//     live: "#",
//     image: "https://via.placeholder.com/400x200/1e293b/ffffff?text=Task+Manager",
//   },
// ]

// const downloadResume = () => {
//   alert("Resume download will be available soon! Please contact me directly for now.")
//   // Or redirect to your LinkedIn profile
//   // window.open("https://www.linkedin.com/in/trupal-godhat-68b490250", "_blank")
// }

// export default function Portfolio() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [activeSection, setActiveSection] = useState("home")
//   const [showNavbar, setShowNavbar] = useState(true)
//   const [lastScrollY, setLastScrollY] = useState(0)
//   const { scrollYProgress } = useScroll()
//   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

//   useEffect(() => {
//     const toggleVisibility = () => {
//       setIsVisible(window.pageYOffset > 300)
//     }

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY

//       // Show/hide navbar based on scroll direction
//       if (currentScrollY < lastScrollY || currentScrollY < 100) {
//         setShowNavbar(true)
//       } else {
//         setShowNavbar(false)
//       }
//       setLastScrollY(currentScrollY)

//       // Active section tracking
//       const sections = ["home", "about", "skills", "projects", "experience", "contact"]
//       const scrollPosition = window.scrollY + 100

//       for (const section of sections) {
//         const element = document.getElementById(section)
//         if (element) {
//           const { offsetTop, offsetHeight } = element
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section)
//             break
//           }
//         }
//       }
//     }

//     window.addEventListener("scroll", toggleVisibility)
//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", toggleVisibility)
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [lastScrollY])

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" })
//   }

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId)
//     element?.scrollIntoView({ behavior: "smooth" })
//   }

//   return (
//     <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden">
//       {/* Scroll Progress Bar */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 to-purple-400 origin-left z-50"
//         style={{ scaleX: scrollYProgress }}
//       />

//       {/* Navigation */}
//       <motion.nav
//         className="fixed top-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-white/10"
//         initial={{ y: 0 }}
//         animate={{ y: showNavbar ? 0 : -100 }}
//         transition={{ duration: 0.3 }}
//       >
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             <motion.div
//               className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//             >
//               TG
//             </motion.div>
//             <div className="hidden md:flex space-x-8">
//               {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item)}
//                   className={`capitalize transition-colors hover:text-violet-400 ${
//                     activeSection === item ? "text-violet-400" : "text-white/70"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//             <Button
//               variant="outline"
//               size="sm"
//               className="border-violet-400/50 text-violet-400 hover:bg-violet-400/10"
//               onClick={downloadResume}
//             >
//               <Download className="w-4 h-4 mr-2" />
//               Resume
//             </Button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Hero Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
//         <div className="container mx-auto px-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="mb-8"
//           >
//             <div className="relative inline-block">
//               <img
//                 src="https://media.licdn.com/dms/image/v2/D5603AQHw5VOfwyElkA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721665851113?e=1755734400&v=beta&t=lyE8ChglmtpUaAFKADWzgCLhTXSfQKk1pjhJ1BmIs-c"
//                 alt="Trupal Godhat"
//                 className="w-40 h-40 rounded-full border-4 border-violet-400/50 shadow-2xl shadow-violet-500/25"
//               />
//               <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-400/20 to-purple-400/20 animate-pulse" />
//             </div>
//           </motion.div>

//           <motion.h1
//             className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             Trupal Godhat
//           </motion.h1>

//           <motion.div
//             className="text-xl md:text-2xl text-violet-300 mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             <span className="inline-flex items-center">
//               <Code className="w-6 h-6 mr-2" />
//               Full-Stack Developer
//             </span>
//           </motion.div>

//           <motion.p
//             className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             Passionate pre-final year Information Technology student specializing in MERN stack development. I transform
//             ideas into elegant, scalable solutions and thrive on solving complex problems through innovative code.
//           </motion.p>

//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//           >
//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-600 hover:to-purple-600 text-white border-0"
//               onClick={() => scrollToSection("projects")}
//             >
//               View My Work
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-violet-400/50 text-violet-400 hover:bg-violet-400/10"
//               onClick={() => scrollToSection("contact")}
//             >
//               Get In Touch
//             </Button>
//           </motion.div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 relative">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
//               About Me
//             </h2>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
//                 <CardContent className="p-8">
//                   <div className="flex items-center mb-6">
//                     <User className="w-8 h-8 text-violet-400 mr-3" />
//                     <h3 className="text-2xl font-semibold">Who I Am</h3>
//                   </div>
//                   <p className="text-gray-300 leading-relaxed mb-6">
//                     I'm a dedicated Information Technology student with a passion for creating impactful digital
//                     solutions. My journey in web development started with curiosity and has evolved into a deep
//                     commitment to crafting exceptional user experiences.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
//                 <CardContent className="p-6">
//                   <div className="flex items-center mb-4">
//                     <GraduationCap className="w-6 h-6 text-violet-400 mr-3" />
//                     <h4 className="text-lg font-semibold">Education</h4>
//                   </div>
//                   <p className="text-gray-300">B.Tech in Information Technology</p>
//                   <p className="text-sm text-gray-400">Dharmsinh Desai University (2022 – 2026)</p>
//                 </CardContent>
//               </Card>

//               <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
//                 <CardContent className="p-6">
//                   <div className="flex items-center mb-4">
//                     <Briefcase className="w-6 h-6 text-violet-400 mr-3" />
//                     <h4 className="text-lg font-semibold">Experience</h4>
//                   </div>
//                   <p className="text-gray-300">Frontend Developer Intern</p>
//                   <p className="text-sm text-gray-400">VMV Infosoft</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-20">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
//               Skills & Technologies
//             </h2>
//           </motion.div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={skill.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
//                   <CardContent className="p-4">
//                     <div className="flex items-center gap-3">
//                       {skill.icon}
//                       <h3 className={`font-semibold ${skill.color}`}>{skill.name}</h3>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
//               Featured Projects
//             </h2>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2, duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group overflow-hidden h-full flex flex-col">
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={project.image || "/placeholder.svg"}
//                       alt={project.title}
//                       className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                   </div>
//                   <CardContent className="p-6 flex-1 flex flex-col">
//                     <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
//                     <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-1 line-clamp-4">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tech.map((tech) => (
//                         <Badge
//                           key={tech}
//                           variant="secondary"
//                           className="bg-violet-500/20 text-violet-300 border-violet-500/30"
//                         >
//                           {tech}
//                         </Badge>
//                       ))}
//                     </div>
//                     <div className="flex gap-3 mt-auto">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="border-violet-400/50 text-violet-400 hover:bg-violet-400/10"
//                         onClick={() => window.open(project.github, "_blank")}
//                       >
//                         <Github className="w-4 h-4 mr-2" />
//                         Code
//                       </Button>
//                       <Button
//                         size="sm"
//                         className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-600 hover:to-purple-600"
//                         onClick={() => window.open(project.live, "_blank")}
//                       >
//                         <ExternalLink className="w-4 h-4 mr-2" />
//                         Live Demo
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-20">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
//               Experience
//             </h2>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="max-w-4xl mx-auto"
//           >
//             <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
//               <CardContent className="p-8">
//                 <div className="flex items-start gap-4">
//                   <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-3 rounded-lg">
//                     <Briefcase className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-2xl font-bold text-white mb-2">Frontend Developer Intern</h3>
//                     <p className="text-violet-400 mb-4">VMV Infosoft • Summer 2023</p>
//                     <p className="text-gray-300 leading-relaxed">
//                       Completed an intensive summer internship focusing on building responsive web interfaces using
//                       React.js and Bootstrap. Developed reusable UI components and integrated REST APIs for dynamic
//                       content rendering. Ensured cross-device compatibility and optimized user experience across
//                       multiple projects.
//                     </p>
//                     <div className="flex flex-wrap gap-2 mt-4">
//                       {["React.js", "Bootstrap", "REST APIs", "Responsive Design"].map((tech) => (
//                         <Badge
//                           key={tech}
//                           variant="secondary"
//                           className="bg-violet-500/20 text-violet-300 border-violet-500/30"
//                         >
//                           {tech}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Brand Section */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-4">
//                 Trupal Godhat
//               </h3>
//               <p className="text-gray-300 text-sm leading-relaxed mb-4">
//                 Full-Stack Developer passionate about creating innovative solutions with modern web technologies.
//               </p>
//               <div className="flex space-x-4">
//                 {[
//                   { icon: Github, href: "https://github.com/trupal1211" },
//                   { icon: Linkedin, href: "https://www.linkedin.com/in/trupal-godhat-68b490250" },
//                   { icon: Instagram, href: "https://www.instagram.com/trupal_godhat/" },
//                   { icon: Twitter, href: "https://x.com/Trupal_Godhat" },
//                 ].map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-400 hover:text-violet-400 transition-colors"
//                   >
//                     <social.icon className="w-5 h-5" />
//                   </a>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Quick Links */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
//               <ul className="space-y-2">
//                 {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
//                   <li key={item}>
//                     <button
//                       onClick={() => scrollToSection(item.toLowerCase())}
//                       className="text-gray-400 hover:text-violet-400 transition-colors text-sm"
//                     >
//                       {item}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* Contact Info */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
//               <div className="space-y-3">
//                 <div className="flex items-center text-sm">
//                   <Mail className="w-4 h-4 text-violet-400 mr-3" />
//                   <span className="text-gray-300">trupalgodhat1211@gmail.com</span>
//                 </div>
//                 <div className="flex items-center text-sm">
//                   <MapPin className="w-4 h-4 text-violet-400 mr-3" />
//                   <span className="text-gray-300">Jetpur, Rajkot, India</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Bottom Section */}
//           <div className="border-t border-violet-400/20 mt-8 pt-8 text-center">
//             <p className="text-gray-400 text-sm">
//               © 2024 Trupal Godhat. Built with React & Tailwind CSS. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>

//       {/* Scroll to Top Button */}
//       {isVisible && (
//         <motion.button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-600 hover:to-purple-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 1, scale: 1 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <ArrowUp className="w-6 h-6" />
//         </motion.button>
//       )}
//     </div>
//   )
// }






// ============================================================================================

"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "./theme-provider"
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
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa6"
import { SiMongodb, SiExpress, SiCplusplus, SiMysql, SiC, SiPostman } from "react-icons/si"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-2xl text-orange-500" />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt className="text-2xl text-blue-500" />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs className="text-2xl text-yellow-500" />, color: "text-yellow-500" },
  { name: "React.js", icon: <FaReact className="text-2xl text-cyan-500" />, color: "text-cyan-500" },
  { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-500" />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress className="text-2xl text-gray-400" />, color: "text-gray-400" },
  { name: "MongoDB", icon: <SiMongodb className="text-2xl text-green-600" />, color: "text-green-600" },
  { name: "MySQL", icon: <SiMysql className="text-2xl text-blue-600" />, color: "text-blue-600" },
  { name: "Git", icon: <FaGitAlt className="text-2xl text-red-500" />, color: "text-red-500" },
  {
    name: "GitHub",
    icon: <FaGithub className="text-2xl text-gray-300 dark:text-gray-300 text-gray-700" />,
    color: "text-gray-300 dark:text-gray-300 text-gray-700",
  },
  { name: "C++", icon: <SiCplusplus className="text-2xl text-purple-500" />, color: "text-purple-500" },
  { name: "C", icon: <SiC className="text-2xl text-blue-400" />, color: "text-blue-400" },
  { name: "REST APIs", icon: <SiPostman className="text-2xl text-orange-600" />, color: "text-orange-600" },
]

const projects = [
  {
    title: "QueryNest",
    description:
      "A comprehensive peer-to-peer counseling platform built with the MERN stack. Features include secure user authentication, interactive Q&A system, dynamic leaderboard, and intelligent skill-based tagging for enhanced user experience.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com/trupal1211/querynest",
    live: "#",
    image: "https://dy7glz37jgl0b.cloudfront.net/advice/images/902f6a7aed363495e9acc6472fb454aa-online-therapy-with-licensed-counselors-hero-image-4.png",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern web technologies for optimal performance.",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    github: "#",
    live: "#",
    image: "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FWhat_is_E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg&w=4500&q=90",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
    tech: ["React", "Socket.io", "Express", "PostgreSQL"],
    github: "#",
    live: "#",
    image: "https://www.chanty.com/blog/wp-content/uploads/2020/10/Task-manager-apps-scaled.jpg",
  },
]

const downloadResume = () => {
  // alert("Resume download will be available soon! Please contact me directly for now.")
  // Or redirect to your LinkedIn profile
  window.open("https://drive.google.com/file/d/1XqafyCXk_48h66vMdesTnPIXK-h3trTh/view?usp=sharing","_blank")
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
                  className={`capitalize transition-colors hover:text-violet-400 ${
                    activeSection === item ? "text-violet-400" : "text-slate-700 dark:text-white/70"
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
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 mt-8"
          >
            <div className="relative inline-block">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQHw5VOfwyElkA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721665851113?e=1755734400&v=beta&t=lyE8ChglmtpUaAFKADWzgCLhTXSfQKk1pjhJ1BmIs-c"
                alt="Trupal Godhat"
                className="w-40 h-40 rounded-full border-4 border-violet-400/50 shadow-2xl shadow-violet-500/25"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-400/20 to-purple-400/20 animate-pulse" />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 dark:from-white via-violet-500 dark:via-violet-200 to-violet-400 bg-clip-text text-transparent"
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
            Passionate pre-final year Information Technology student specializing in MERN stack development. I transform
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
      <section id="about" className="py-20 relative">
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
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
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
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-violet-400 mr-3" />
                    <h4 className="text-lg font-semibold">Education</h4>
                  </div>
                  <p className="text-slate-600 dark:text-gray-300">B.Tech in Information Technology</p>
                  <p className="text-sm text-slate-500 dark:text-gray-400">Dharmsinh Desai University (2022 – 2026)</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
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
      <section id="skills" className="py-20">
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
      <section id="projects" className="py-10">
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
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
                    <p className="text-slate-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-1 line-clamp-4">
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
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-600 hover:to-purple-600"
                        onClick={() => window.open(project.live, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-10">
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
            <Card className="bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-3 rounded-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Frontend Developer Intern
                    </h3>
                    <p className="text-violet-400 mb-4">VMV Infosoft • Summer 2023</p>
                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                      Completed an intensive summer internship focusing on building responsive web interfaces using
                      React.js and Bootstrap. Developed reusable UI components and integrated REST APIs for dynamic
                      content rendering. Ensured cross-device compatibility and optimized user experience across
                      multiple projects.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {["React.js", "Bootstrap", "REST APIs", "Responsive Design"].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-violet-500/20 text-violet-600 dark:text-violet-300 border-violet-500/30"
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
      <footer className="py-12 bg-slate-50 dark:bg-slate-900">
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
