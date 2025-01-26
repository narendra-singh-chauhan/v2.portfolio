"use client"
import { motion } from "framer-motion"
import { FaGraduationCap } from "react-icons/fa"

const educationData = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Smt Devkiba Mohansinhji Chauhan College of Commerce & Science",
    year: "2019 - 2022",
    description: "Focused on computer science fundamentals and application development.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Gujarat Secondary and Higher Secondary Education Board",
    year: "2017 - 2019",
    description: "Completed with a focus on Computer Science.",
  },
  {
    degree: "Secondary Education",
    institution: "Board of Secondary Education, Rajasthan",
    year: "2016 - 2017",
    description: "Completed general education with distinction.",
  },
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-start md:items-center bg-card text-card-foreground rounded-lg p-6 shadow-md"
            >
              <div className="flex-shrink-0 mr-4 mb-4 md:mb-0">
                <FaGraduationCap className="text-4xl text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mt-1">{edu.year}</p>
                <p className="mt-2">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

