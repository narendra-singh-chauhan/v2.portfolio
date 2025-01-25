"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const profile = `${process.env.NEXT_PUBLIC_BASE_PATH}/profile.v1.jpeg`

const Hero = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}`}>
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${isDarkTheme ? 'text-white' : 'text-gray-600'}`}>
            Hi, I'm <span className="text-blue-600">Narendra Singh</span>
          </h1>
          <h2 className={`text-2xl md:text-3xl mb-6 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Full Stack Developer</h2>
          <p className={`mb-8 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
            With 3 years of experience, I specialize in crafting high-performance web applications using MERN stack technologies. I have a strong background in developing scalable and maintainable applications, and I am proficient in MongoDB, Express.js, React, and Node.js. My expertise includes building RESTful APIs, implementing responsive designs, and optimizing performance for both client-side and server-side applications.
          </p>
          <motion.a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto" onClick={toggleTheme}>
            <Image
              src={profile}
              alt="Narendra Singh"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-2xl cursor-pointer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
