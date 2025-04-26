import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import AccountProgress from "@/components/dashboard/account-progress"
import FranchiseesOnboard from "@/components/dashboard/franchisees-onboard"
import KeyInsights from "@/components/dashboard/key-insights"
import FinancialWellbeing from "@/components/dashboard/financial-wellbeing"
import ProspectLeads from "@/components/dashboard/prospect-leads"
import ChatAssistant from "@/components/dashboard/chat-assistant"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-4">
          {/* First row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <AccountProgress />
            <FranchiseesOnboard />
            <KeyInsights />
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <FinancialWellbeing />
            <ProspectLeads />
          </div>

          {/* Chat Assistant */}
          <ChatAssistant />
        </main>
      </div>
    </div>
  )
}
