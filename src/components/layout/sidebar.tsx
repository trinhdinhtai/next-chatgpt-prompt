"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { getSections } from "@/data"
import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import SearchInput from "@/components/search-input"

const allSections = getSections()

export default function Sidebar() {
  const router = useRouter()
  const [sections, setSections] = useState(allSections)

  const clearSearch = () => {
    // Clear the search input
    setSections(allSections)
  }

  const handleClick = (tag: string) => {
    router.push("/", { scroll: false })

    const element = document.getElementById(tag)
    if (!element) return

    window.scrollTo({
      top: element.offsetTop - 56,
      behavior: "smooth",
    })

    // Run the handleClick function first
    clearSearch()
  }

  return (
    <div className="sticky top-12 mt-12 hidden h-[calc(100vh-3rem)] md:flex">
      <aside className="flex w-64 flex-col p-4">
        {/* Search input */}
        <SearchInput onSearch={(term) => {}} clearSearch={() => {}} />

        <ScrollArea className="flex-grow">
          <div className="space-y-1">
            {sections.map((section) => (
              <Button
                onClick={() => handleClick(section.tag)}
                key={section.tag}
                variant="ghost"
                className="w-full justify-start"
              >
                {section.tag}
                <span className="ml-auto text-[#878787]">
                  {section.rules.length}
                </span>
              </Button>
            ))}
          </div>
        </ScrollArea>

        <Separator className="my-4" />

        <a
          href="https://github.com/trinhdinhtai/next-chatgpt-prompt"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            className="hidden w-full items-center justify-center gap-2 rounded-full border border-black bg-[#F5F5F3]/30 font-medium text-black dark:border-white dark:text-white md:flex"
            variant="outline"
          >
            <span>Submit</span> <PlusIcon className="h-4 w-4" />
          </Button>
        </a>
      </aside>
    </div>
  )
}
