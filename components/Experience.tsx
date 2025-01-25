"use client"
import { motion } from "framer-motion"
import { FaBriefcase } from "react-icons/fa"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "FOG Technologies",
    duration: "Jan 2024 - Present",
    description: [
      "Worked primarily on a project named Hyper Grid, an LED floor-based game, focusing on software development.",
      "Utilized MERN stack and Electron with Realm DB for offline support.",
      "Successfully completed various projects within specified timelines, ensuring 100% client satisfaction.",
      "Enhanced communication skills and overall performance through collaboration with multiple clients.",
      "Took on the role of training new talent in MERN stack technology, elevating my capabilities as a team leader and a more senior.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Codelink Infotech",
    duration: "May 2022 - Dec 2023",
    description: [
      "Sharpened problem-solving skills and gained a robust full-stack foundation.",
      "Collaborated with the team to develop an ERP system for the company, which is now actively in use.",
      "Worked on various projects involving both frontend and backend development.",
      "Developed and maintained web applications using the MERN stack.",
      "Implemented responsive design and ensured cross-browser compatibility.",
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row"
            >
              <div className="md:w-1/4">
                <div className="flex items-center mb-4">
                  <FaBriefcase className="text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                </div>
                <p className="text-gray-600 mb-2">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.duration}</p>
              </div>
              <div className="md:w-3/4 mt-4 md:mt-0 md:pl-8 border-l border-gray-200">
                <ul className="list-disc list-inside space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

