"use client"
import { ThemeProvider } from "next-themes"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Education from "../components/Education"
import SkillsMatrix from "../components/SkillsMatrix"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <SkillsMatrix />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

