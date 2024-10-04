import { angularRules } from "./rules/angular"

interface Rule {
  title: string
  slug: string
  tags: string[]
  libs: string[]
  content: string
  author: Author
}

interface Author {
  name: string
  url: string
  avatar: string
}

export const rules: Rule[] = [...angularRules]

export function getSections() {
  const categories = Array.from(new Set(rules.flatMap((rule) => rule.tags)))

  return categories
    .map((tag) => ({
      tag,
      rules: rules.filter((rule) => rule?.tags?.includes(tag)),
    }))
    .sort((a, b) => b.rules.length - a.rules.length)
}

export function getRuleBySlug(slug: string) {
  return rules.find((rule) => rule.slug === slug)
}
