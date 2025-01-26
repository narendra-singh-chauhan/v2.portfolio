import "./globals.css"
import { Inter } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Narendra Singh - Full Stack Developer",
  description: "Portfolio of Narendra Singh, a Full Stack Developer with 3 years of experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>{children}</body>
    </html>
  )
}

