"use client"

import SearchInput from "@/components/search-input"

export default function Sidebar() {
  return (
    <div className="sticky top-12 mt-12 hidden h-[calc(100vh-3rem)] md:flex">
      <aside className="flex w-64 flex-col p-4">
        {/* Search input */}
        <SearchInput onSearch={(term) => {}} clearSearch={() => {}} />
      </aside>
    </div>
  )
}
