import { TrendingUp } from "lucide-react"

export default function FranchiseesOnboard() {
  return (
    <div className="bg-white rounded-lg border p-6 flex flex-col h-full">
      <h2 className="text-lg font-medium mb-4">Total Franchisees Onboard</h2>

      <div className="flex items-center mb-6">
        <span className="text-4xl font-bold">14</span>
        <div className="ml-4 flex items-center">
          <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" />
            7.4%
          </div>
        </div>
        <div className="ml-auto flex -space-x-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
              <img
                src={`/placeholder.svg?height=32&width=32&text=${i}`}
                alt={`User ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-600">
            +7
          </div>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-4 mb-6">
        <div className="h-2 bg-[#2196f3] rounded-full w-full"></div>
        <div className="h-2 bg-[#4fc3f7] rounded-full w-3/4"></div>
        <div className="h-2 bg-[#b3e5fc] rounded-full w-full"></div>
      </div>

      {/* Stages */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-[#2196f3] mr-3"></span>
            <span className="text-sm">Stage 1 (Initial Inquiry)</span>
          </div>
          <span className="text-xl font-semibold">02</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-[#4fc3f7] mr-3"></span>
            <span className="text-sm">Stage 2 (Document Submission)</span>
          </div>
          <span className="text-xl font-semibold">07</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-[#b3e5fc] mr-3"></span>
            <span className="text-sm">Stage 3 (Training)</span>
          </div>
          <span className="text-xl font-semibold">05</span>
        </div>
      </div>
    </div>
  )
}
