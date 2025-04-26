import { Settings } from "lucide-react"

export default function Header() {
  return (
    <header className="h-16 border-b flex items-center justify-end px-4">
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700">
          <Settings className="w-6 h-6" />
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src="/placeholder.svg?height=40&width=40" alt="User profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  )
}
