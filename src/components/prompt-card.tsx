import Link from "next/link"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export type Rule = {
  libs?: string[]
  content: string
  title?: string
  slug: string
  author: {
    name: string
    url: string
    avatar: string
  }
}

interface PromptCardProps {
  rule: Rule
  isPage?: boolean
}

export default function PromptCard({ rule, isPage }: PromptCardProps) {
  return (
    <Card className="flex aspect-square max-h-[calc(100vh-8rem)] flex-col bg-background p-4">
      <CardContent
        className={cn(
          "group relative mb-2 h-full flex-grow bg-card p-4 pr-1 font-mono text-sm opacity-50 transition-opacity hover:opacity-100",
          isPage && "opacity-100"
        )}
      >
        <div className="absolute bottom-4 right-4 z-10 hidden space-x-2 group-hover:flex"></div>

        <Link href={`/${rule.slug}`}>
          <ScrollArea className="h-full">
            <code className="block pr-3 text-sm">{rule.content}</code>
          </ScrollArea>
        </Link>
      </CardContent>
    </Card>
  )
}
