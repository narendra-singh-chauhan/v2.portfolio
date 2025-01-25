"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Six Fintech",
    description:
      "Implemented tables for forex, crypto, stocks, ETFs, and MTFs using API data. Integrated TradingView charts and various other chart types.",
    tech: "React JS, Material UI, Redux Toolkit",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    title: "Hydrus",
    description:
      "Designed components, integrated APIs, and managed data through charts, tables, and forms. Generated reports on survey data and facilitated media uploading using AWS S3.",
    tech: "React JS, GraphQL, AWS Amplify, Lambda Functions, Ant Design",
    image: "/placeholder.svg",
    link: "https://hydrus.ai",
  },
  {
    title: "HRM",
    description:
      "Developed user and admin features for leave management, payroll, and more. Created APIs and integrated email functionality.",
    tech: "TypeScript, Metronic, Redux Toolkit, Formik & Yup, MERN Stack, Job Queue",
    image: "/placeholder.svg",
    link: "https://hrm-h12f.onrender.com",
  },
  {
    title: "YourPromate",
    description:
      "Developed a project management tool with features to oversee employees, projects, tasks, and teams. Introduced bidirectional sliders for listing project tasks.",
    tech: "Next.js, TypeScript, Redux Toolkit, Formik & Yup, Lodash",
    image: "/placeholder.svg",
    link: "https://yp-next.vercel.app",
  },
  {
    title: "SkyLudo",
    description:
      "Integrated payment gateways, managed user and admin panels, implemented online and offline Aadhar KYC, socket connections, and push notifications.",
    tech: "Material UI, Bootstrap, MERN Stack",
    image: "/placeholder.svg",
    link: "https://skyludo.com",
  },
  {
    title: "HyperGrid",
    description:
      "Developed a product with multiple games like escape the lava, find the color, red light green light, sharp shooter and human vs zombies using mern stack technologies with electron for desktop app and realm db for offline database.",
    tech: "MERN Stack, Electron, Realm DB",
    image: "/placeholder.svg",
    link: "https://skyludo.com",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-4">{project.tech}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

