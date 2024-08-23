import { NextPage } from 'next';
import { getAllProjectsData } from '@/services/projectService';
import { Project } from '@/types/project';
import Intro from '@/components/Intro';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Tools from '@/components/Tools';
import Work from '@/components/Work';
import Navbar from '@/components/Navbar';

interface IndexProps {
    projects: Project[];
}

const Index: NextPage<IndexProps> = ({ projects }) => {
    return (
        <div className="mx-auto max-w-5xl">
            <div className="w-full px-5 sm:px-8">
                <Navbar />
                <Intro />
                <About />
                <Projects projects={projects} />
                <Work />
                <Tools />
                <Contact />
            </div>
        </div>
    );
};

export default Index;

export const getStaticProps = async () => {
    return {
        props: {
            projects: getAllProjectsData(),
        },
    };
};
