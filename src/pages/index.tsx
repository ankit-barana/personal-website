import { NextPage } from 'next';
import { getAllProjectsData } from '@/services/projectService';
import { Project } from '@/types/project';
import Intro from '@/components/Intro';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import Work from '@/components/Work';

interface IndexProps {
    projects: Project[];
}

const Index: NextPage<IndexProps> = ({ projects, works }) => {
    return (
        <div className="mx-auto max-w-5xl">
            <div className="w-full px-5 sm:px-8">
                <Navbar />
                <Intro />
                <About />
                <Projects projects={projects} />
                <Work />
                <Skills />
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
