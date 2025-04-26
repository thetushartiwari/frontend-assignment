import { Send } from "lucide-react"

export default function ChatAssistant() {
  return (
    <div className="mt-8 border rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome to the AI Chat Assistant</h2>

        <div className="mb-4">
          <div className="mb-4">
            <p className="text-gray-600 mb-2">What are the requirements for opening a new store?</p>

            <div className="flex items-start mt-4">
              <div className="w-8 h-8 rounded-full overflow-hidden mr-3 flex-shrink-0 relative">
                <img
                  src="/placeholder.svg?height=32&width=32&text=KO"
                  alt="Koray Okumus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
              </div>
              <div>
                <div className="flex items-center">
                  <p className="font-medium">Koray Okumus</p>
                  <p className="text-xs text-gray-500 ml-2">4hr ago</p>
                </div>
                <p className="text-xs text-gray-500">@koray</p>
              </div>

              <div className="ml-auto relative">
                <input
                  type="text"
                  placeholder="Ask your question here.."
                  className="border rounded-md py-2 px-4 pr-10 w-64"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-600">How do I manage inventory effectively?</p>
          </div>
        </div>
      </div>
    </div>
  )
}
