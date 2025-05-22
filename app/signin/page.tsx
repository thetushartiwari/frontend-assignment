"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SigninPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/profile")
  }

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-800">Signin to your</h1>
          <h1 className="text-2xl font-semibold text-gray-800">PopX account</h1>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email" className="text-purple-500">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password" className="text-purple-500">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="text"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 py-6 mt-8 rounded-md">
          Login
        </Button>
      </form>
    </div>
  )
}
