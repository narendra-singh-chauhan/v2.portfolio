"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const menuItems = ["Home", "Experience", "Skills", "Projects", "Contact"]

  const menuVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-2xl font-bold text-primary flex items-center space-x-2">
              {/* Narendra Singh */}
              <div className="relative w-10 h-10">
                <Image
                  src="/v2.portfolio/icon.webp"
                  alt="Narendra Singh"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full shadow-2xl"
                />
              </div>
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-4 items-center">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground hover:text-primary transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : theme === "light" ? "system" : "dark")}
                className="p-2 rounded-full bg-primary text-primary-foreground"
              >
                {theme === "dark" ? <FiSun /> : theme === "light" ? <FiMonitor /> : <FiMoon />}
              </button>
            )}
          </div>
          <div className="md:hidden flex items-center space-x-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : theme === "light" ? "system" : "dark")}
                className="p-2 rounded-full bg-primary text-primary-foreground"
              >
                {theme === "dark" ? <FiSun /> : theme === "light" ? <FiMonitor /> : <FiMoon />}
              </button>
            )}
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden mt-4 space-y-2"
            >
              {menuItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-foreground hover:text-primary transition duration-300 py-2 px-4 rounded-md hover:bg-primary/10"
                  onClick={() => setIsOpen(false)}
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header

