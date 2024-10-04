"use client"

import { ChangeEvent, useState } from "react"
import { Search, X } from "lucide-react"

import { Input } from "@/components/ui/input"

interface SearchInputProps {
  onSearch: (term: string) => void
  clearSearch: () => void
}

export default function SearchInput({
  onSearch,
  clearSearch,
}: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase()
    setSearchTerm(term)
    onSearch(term)
  }

  const handleClear = () => {
    setSearchTerm("")
    onSearch("")
    clearSearch()
  }

  return (
    <div className="relative mb-3 ml-3 mr-2">
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="border border-none border-border bg-transparent pl-0 text-sm text-[#606060] text-primary !placeholder-[#606060] outline-none focus:!border-none focus:!ring-0"
      />
      {searchTerm ? (
        <X
          className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer text-[#606060]"
          size={16}
          onClick={handleClear}
        />
      ) : (
        <Search
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#606060]"
          size={16}
        />
      )}
    </div>
  )
}
