import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PopX Mobile App",
  description: "A pixel-perfect mobile app UI built with React and Tailwind CSS",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}
