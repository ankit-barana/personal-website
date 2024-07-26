import { NextPage } from 'next';
import { getAllProjectsData } from '@/services/projectService';
import { Project } from '@/types/project';
import Intro from '@/components/Intro';

interface IndexProps {
    projects: Project[];
}

const Index: NextPage<IndexProps> = ({ projects }) => {
    return (
        <div className="mx-auto max-w-6xl">
            <div className="w-full px-4 sm:px-8 lg:ml-20">
                <Intro />
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
