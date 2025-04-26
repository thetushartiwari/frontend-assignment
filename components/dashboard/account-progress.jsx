import { CheckCircle2 } from "lucide-react"

export default function AccountProgress() {
  return (
    <div className="bg-white rounded-lg border p-6 flex flex-col h-full">
      <h2 className="text-lg font-medium mb-6 text-center">Account Progress</h2>

      {/* Progress Circle */}
      <div className="flex justify-center mb-6">
        <div className="relative w-36 h-36">
          {/* Background Circle */}
          <div className="absolute inset-0 rounded-full bg-gray-100"></div>

          {/* Progress Arc - 85% */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#e6e6e6" strokeWidth="10" />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#2196f3"
              strokeWidth="10"
              strokeDasharray="251.2"
              strokeDashoffset="37.68"
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>

          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold">85%</span>
          </div>
        </div>
      </div>

      {/* Steps Completed */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Steps Completed</h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="w-4 h-4 mr-3 flex-shrink-0 rounded-full bg-gray-200"></span>
            <span className="text-sm">Profile Setup</span>
            <CheckCircle2 className="ml-auto text-green-500 w-5 h-5" />
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 mr-3 flex-shrink-0 rounded-full bg-gray-200"></span>
            <span className="text-sm">Initial Training</span>
            <CheckCircle2 className="ml-auto text-green-500 w-5 h-5" />
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 mr-3 flex-shrink-0 rounded-full bg-gray-200"></span>
            <span className="text-sm">Legal Documents</span>
            <CheckCircle2 className="ml-auto text-green-500 w-5 h-5" />
          </li>
        </ul>
      </div>

      {/* Steps Remaining */}
      <div>
        <h3 className="font-medium mb-3">Steps Remaining</h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="w-4 h-4 mr-3 flex-shrink-0 rounded-full bg-gray-200"></span>
            <span className="text-sm">Financial Integration</span>
            <span className="ml-auto w-5 h-5 rounded-full border-2 border-gray-200"></span>
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 mr-3 flex-shrink-0 rounded-full bg-gray-200"></span>
            <span className="text-sm">Final Review</span>
            <span className="ml-auto w-5 h-5 rounded-full border-2 border-gray-200"></span>
          </li>
        </ul>
      </div>
    </div>
  )
}
