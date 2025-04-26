import { Award } from "lucide-react"

export default function KeyInsights() {
  return (
    <div className="bg-white rounded-lg border p-6 flex flex-col h-full">
      <h2 className="text-lg font-medium mb-4">Key Insights & Feedback</h2>

      <div className="flex items-center mb-6">
        <div>
          <span className="text-4xl font-bold">10%</span>
          <p className="text-sm text-gray-600">Sales Growth</p>
        </div>

        <div className="ml-auto">
          <div className="relative">
            <Award className="w-12 h-12 text-gray-800" />
            <div className="absolute bottom-0 right-0 bg-blue-50 text-blue-500 text-xs px-2 py-1 rounded-full whitespace-nowrap">
              Top Performer
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <h3 className="font-medium mb-3">Feedback</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-start">
            <span className="w-4 h-4 mt-1 mr-3 flex-shrink-0 rounded-full bg-gray-200"></span>
            <p className="text-sm text-gray-600">Franchisees are requesting more detailed training materials.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
