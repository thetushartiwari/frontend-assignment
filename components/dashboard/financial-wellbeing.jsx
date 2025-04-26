import { TrendingUp } from "lucide-react"

export default function FinancialWellbeing() {
  return (
    <div className="bg-white rounded-lg border p-6 flex flex-col h-full">
      <h2 className="text-lg font-medium mb-4">Financial Wellbeing</h2>

      <div className="flex items-center mb-6">
        <div>
          <span className="text-4xl font-bold">20</span>
          <p className="text-sm text-gray-600">Total Franchisees</p>
        </div>

        <div className="ml-auto">
          <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" />
            2.1%
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-auto">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">Target</p>
          <p className="text-xl font-bold">$500,000</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">Current</p>
          <p className="text-xl font-bold">$450,000</p>
        </div>
      </div>
    </div>
  )
}
