import { NextPage } from 'next';
import { getAllProjectsData } from '@/services/projectService';
import { Project } from '@/types/project';
import Intro from '@/components/sections/Intro';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Tools from '@/components/sections/Tools';
import Works from '@/components/sections/Works';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

interface IndexProps {
    projects: Project[];
}

const Index: NextPage<IndexProps> = ({ projects }) => {
    return (
        <div className="mx-auto max-w-5xl">
            <div className="w-full px-5 sm:px-8">
                <Header />
                <Intro />
                <About />
                <Projects projects={projects} />
                <Works />
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
