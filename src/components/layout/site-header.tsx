import Link from "next/link"

export default function SiteHeader() {
  return (
    <div className="top-0 z-10 flex w-full items-center justify-between border-b bg-background bg-opacity-30 px-6 py-2 backdrop-blur-sm backdrop-filter md:fixed">
      <Link href="/" className="font-mono text-sm font-medium">
        promptGPT
      </Link>
    </div>
  )
}
