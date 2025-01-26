"use client"
import { motion } from "framer-motion"

const skillsData = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Next.js", level: 85 },
  { name: "Express", level: 80 },
  { name: "HTML/CSS", level: 90 },
]

const SkillsMatrix = () => {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills Matrix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card text-card-foreground rounded-lg p-6 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-primary text-primary-foreground">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="flex h-2 mb-4 overflow-hidden rounded bg-primary/20">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="flex flex-col justify-center overflow-hidden bg-primary text-xs text-primary-foreground text-center whitespace-nowrap"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsMatrix

