import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getProjectBySlug, getProjectsSlugs } from "@/services/projectService";
import { Project as ProjectType } from "@/types/project";

interface ProjectProps {
    project: ProjectType
}

const Project: NextPage<ProjectProps> = ({ project }) => {
    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.intro}</p>
        </div>
    )
}

export default Project


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: getProjectsSlugs().map((slug) => ({ params: { slug } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    return {
        props: {
            // @ts-ignore
            project: getProjectBySlug(params.slug)
        }
    }
}
