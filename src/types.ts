import type { ReactNode } from "react"

export type Rule = {
    id: string
    title: string
    description?: string
    before: ReactNode
    after: ReactNode
  } 