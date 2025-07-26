export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  author: string
  authorRole: string
  likes: number
  comments: number
  image: string
  tags: string[]
  slug: string
}

export interface ResearchProject {
  id: number
  title: string
  description: string
  period: string
  status: "Ongoing" | "Completed"
  categories: string[]
  link: string
}

export interface Publication {
  id: number
  title: string
  authors: string[]
  venue: string
  year: number
  doi?: string
  tags: string[]
  abstract: string
  type: "journal" | "conference" | "book"
}

export interface Award {
  id: number
  title: string
  organization: string
  year: number
  description: string
  category: string
}
