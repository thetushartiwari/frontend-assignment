import Link from "next/link"

 // provides nav links to diff sections of dashoard
export default function Sidebar() {
  return (
    <div className="w-60 bg-[#0e3b52] text-white flex flex-col h-full">
      <div className="p-4 h-16"></div> {/* Spacer to align with header */}
      <nav className="flex-1 px-4 py-2">
        <ul className="space-y-2">
          <li>
            <Link href="#" className="flex items-center px-4 py-3 bg-[#1a4d67] rounded-md">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#1a4d67] rounded-md">
              Stages & Checklist
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#1a4d67] rounded-md">
              Upload Docs
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#1a4d67] rounded-md">
              Preferred Vendors
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#1a4d67] rounded-md">
              Tech Stack
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#1a4d67] rounded-md">
              Targets
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#1a4d67] rounded-md">
              Zee Sales Targets
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#1a4d67] rounded-md">
              MAI Settings
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#1a4d67] rounded-md">
              <span>Pending Questions</span> #notification badge
              <span className="ml-auto bg-white text-[#0e3b52] rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">
                3
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
