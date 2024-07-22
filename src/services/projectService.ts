import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const projectDirectory = join(process.cwd(), '/projects')

const getProject = (slug: string, fields: string[]) => {
    const path = join(projectDirectory, `${slug}.md`)
    const projectInfo = fs.readFileSync(path, 'utf-8')
    const { data, content } = matter(projectInfo)

    const items: { [key: string]: string | number } = {}

    for (const field of fields) {
        if (data[field] !== undefined) {
            items[field] = data[field]
        }

        if (field === 'content') {
            items[field] = content
        }
    }
    return items
}

export const getProjectsSlugs = () => {
    return (
        fs.
            readdirSync(projectDirectory).
            map((file) => file.replace('.md', ''))
    )
}
 
export const getAllProjectsData = () => {
    const slugs = getProjectsSlugs()
    const projects = slugs.map((slug) =>
        getProject(slug, [
            'title',
            'intro',
            'slug',
            'tags',
            'coverImage',
            'liveUrl',
            'repoUrl',
            'priority',
            'content'
        ])
    )
    return projects
}

export const getProjectBySlug = (slug: string) => {
    const project = getProject(slug, [
        'title',
        'intro',
        'slug',
        'tags',
        'coverImage',
        'liveUrl',
        'repoUrl',
        'priority',
        'content'
    ])
    return project
}
