"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function WelcomePage() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-[600px]">
      <div className="w-full space-y-6 flex flex-col items-start">
        <div className="space-y-2 w-full">
          <h1 className="text-2xl font-semibold text-gray-800">Welcome to PopX</h1>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="w-full space-y-3 pt-4">
          <Button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 rounded-md"
            onClick={() => router.push("/signup")}
          >
            Create Account
          </Button>

          <Button
            variant="secondary"
            className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 py-6 rounded-md"
            onClick={() => router.push("/signin")}
          >
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  )
}
