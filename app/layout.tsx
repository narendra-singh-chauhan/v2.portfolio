import "./globals.css"
import { JetBrains_Mono } from "next/font/google"
import { Metadata } from "next"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Narendra Singh - Full Stack Developer",
  description: "Portfolio of Narendra Singh, a Full Stack Developer with 3 years of experience",
  icons: {
    icon: "/icon.ico",
  },
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
