import { Thumbnail } from '../../types/project';
import Heading from '../Heading';
import Project from '../Project';

const Projects = ({ projects }: { projects: Thumbnail[] }) => {
    return (
        <section className="py-44" id="projects">
            <Heading text="Projects" width="max-w-md" />
            <ul className="mt-16 flex flex-col gap-10">
                {projects.map((project) => (
                    <Project key={project.title} project={project} />
                ))}
            </ul>
        </section>
    );
};

export default Projects;
