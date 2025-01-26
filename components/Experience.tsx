"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaBriefcase, FaChevronDown } from "react-icons/fa"

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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card rounded-lg shadow-md overflow-hidden"
            >
              <div
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex items-center">
                  <FaBriefcase className="text-primary mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <motion.div animate={{ rotate: expandedIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <FaChevronDown className="text-primary" size={18} />
                </motion.div>
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-muted-foreground mb-4">{exp.duration}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-card-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

