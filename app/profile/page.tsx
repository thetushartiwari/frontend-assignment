"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilePage() {
  return (
    <div className="flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-medium text-gray-700">Account Settings</h1>
      </div>

      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16 border-2 border-white shadow-sm">
            <AvatarImage src="/profile.png" alt="Marry Doe" />
            <AvatarFallback className="bg-purple-600 text-white">MD</AvatarFallback>
          </Avatar>

          <div>
            <h2 className="text-lg font-medium">Marry Doe</h2>
            <p className="text-gray-600">Marry@Gmail.Com</p>
          </div>

          <div className="ml-auto">
            <div className="bg-purple-600 text-white rounded-full h-8 w-8 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  )
}
