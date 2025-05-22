"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "Marry Doe",
    phoneNumber: "Marry Doe",
    email: "Marry Doe",
    password: "Marry Doe",
    companyName: "Marry Doe",
    isAgency: "yes",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, isAgency: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/profile")
  }

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-gray-800">Create your</h1>
          <h1 className="text-2xl font-semibold text-gray-800">PopX account</h1>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="fullName" className="text-purple-500">
              Full Name*
            </Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="phoneNumber" className="text-purple-500">
              Phone number*
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Marry Doe"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="email" className="text-purple-500">
              Email address*
            </Label>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="Marry Doe"
              value={formData.email}
              onChange={handleChange}
              className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password" className="text-purple-500">
              Password *
            </Label>
            <Input
              id="password"
              name="password"
              type="text"
              placeholder="Marry Doe"
              value={formData.password}
              onChange={handleChange}
              className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="companyName" className="text-purple-500">
              Company name
            </Label>
            <Input
              id="companyName"
              name="companyName"
              placeholder="Marry Doe"
              value={formData.companyName}
              onChange={handleChange}
              className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-purple-500">Are you an Agency?*</Label>
            <RadioGroup
              defaultValue="yes"
              value={formData.isAgency}
              onValueChange={handleRadioChange}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="agency-yes" className="text-purple-600 border-purple-600" />
                <Label htmlFor="agency-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="agency-no" className="text-purple-600 border-purple-600" />
                <Label htmlFor="agency-no">No</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 mt-8 rounded-md">
          Create Account
        </Button>
      </form>
    </div>
  )
}
