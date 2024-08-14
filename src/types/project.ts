export type Project = {
    title: string
    intro: string
    slug: string
    tags: string[]
    coverImage: string
    liveUrl: string
    repoUrl: string
    priority: number
    content: string
}

export type Thumbnail = Omit<Project, 'content'>