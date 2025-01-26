"use client"
import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"
import { SiTypescript, SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss, SiRedux } from "react-icons/si"

const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500 dark:text-orange-400" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500 dark:text-blue-400" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500 dark:text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600 dark:text-blue-500" },
  { name: "React", icon: FaReact, color: "text-blue-400 dark:text-blue-300" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500 dark:text-green-400" },
  { name: "Express", icon: SiExpress, color: "text-gray-500 dark:text-gray-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600 dark:text-green-500" },
  { name: "MySQL", icon: FaDatabase, color: "text-blue-800 dark:text-blue-700" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500 dark:text-teal-400" },
  { name: "Redux", icon: SiRedux, color: "text-purple-600 dark:text-purple-500" },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className={`text-5xl mb-4 ${skill.color}`}>
                <skill.icon />
              </div>
              <p className="text-foreground font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

