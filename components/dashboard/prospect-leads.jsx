export default function ProspectLeads() {
  const prospects = [
    {
      id: 1,
      name: "Wade Warren",
      stage: "Initial Inquiry",
      avatar: "/placeholder.svg?height=40&width=40&text=WW",
    },
    {
      id: 2,
      name: "Ava Wright",
      stage: "Initial Inquiry",
      avatar: "/placeholder.svg?height=40&width=40&text=AW",
    },
    {
      id: 3,
      name: "Cody Fisher",
      stage: "Initial Inquiry",
      avatar: "/placeholder.svg?height=40&width=40&text=CF",
    },
  ]

  return (
    <div className="bg-white rounded-lg border p-6 flex flex-col h-full">
      <h2 className="text-lg font-medium mb-6">Prospect Leads</h2>

      <div className="space-y-4">
        {prospects.map((prospect) => (
          <div key={prospect.id} className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img
                src={prospect.avatar || "/placeholder.svg"}
                alt={prospect.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium">{prospect.name}</p>
            </div>
            <div className="ml-auto">
              <p className="text-sm text-gray-600">Stage: {prospect.stage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
