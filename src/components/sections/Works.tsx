import Link from 'next/link';
import { EEGIcon, WorkshopIcon, CodeIcon, ExternalLinkIcon } from './../icons';
import Work from '../Work';
import Heading from '../Heading';
import { title } from 'process';

const Works = () => {
    const works = [
        {
            title: 'Research Assistant',
            organization: 'Leslie Kwakye Lab at Oberlin College',
            duration: 'Summer 2022 - Present',
            priority: 1,
            length: 'lg',
            description:
                'In the LK Lab, I work on design, development, and analysis of behavioral, EEG, and eye-tracking experiments for research focussing on the interaction between attention and multisensory integration. I have been involved in everything from planning research goals to developing experiments and guiding participants through the tasks. I also gained experience in drafting research papers, writing IRB protocols, and communicating our research to both experts and non-experts through written and oral presentations.',
            logo: (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-800 to-primary-200 transition-transform hover:rotate-[20deg] hover:duration-200">
                    <EEGIcon className="h-11 w-11" />
                </div>
            ),
        },
        {
            title: 'Research Assistant',
            organization: 'Powers Lab at Yale School of Medicine',
            duration: 'Winter Term 2024',
            length: 'lg',
            priority: 2,
            description: (
                <p>
                    As a part of the Powers Lab, I developed a React/Node.js{' '}
                    <Link
                        href="https://github.com/Powers-Lab/hallucination-visualizer"
                        target="_blank"
                        title="Hallucination Visualizer"
                        rel="noopener noreferrer"
                        className="inline-flex items-center align-middle relative -top-[3px]"
                    >
                        <span className="underline">web app</span>
                        <ExternalLinkIcon className="ml-1 h-5 w-5" />
                    </Link>{' '}
                    with OpenAI API to visualize patient-reported
                    hallucinations, and collaborated with other lab members,
                    including PhD and MD-PhD candidates, in developing and
                    debugging multiple React-based experiments.
                </p>
            ),
            logo: (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-800 to-primary-200 hover:bg-primary-800 transition-transform hover:rotate-[20deg] hover:duration-200">
                    <CodeIcon className="h-8 w-8" />
                </div>
            ),
        },
        {
            title: 'Organizer/Conductor',
            organization: 'Smartphone Workshops',
            duration: 'Summer 2021',
            priority: 3,
            length: 'sm',
            description:
                'I collaborated with the local Village Council to design and organize smartphone workshops in my village and neighbouring communities to promote digital literacy with a focus on UPI payments and relevant e-commerce strategies.',
            logo: (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-800 to-primary-200 hover:bg-primary-800 transition-transform hover:rotate-[20deg] hover:duration-200">
                    <WorkshopIcon className="h-8 w-8" />
                </div>
            ),
        },
    ];
    return (
        <section className="py-44" id="work">
            <Heading text="Work" width="max-w-md" />
            <div>
                <div className="ml-5 mt-12 flex-col items-center gap-4 sm:gap-6">
                    <div className="mb-1 h-0.5 w-2 bg-gray-200 dark:bg-dark-deepgray" />
                    <div className="mb-1 h-1 w-2 bg-gray-200 dark:bg-dark-deepgray" />
                    <div className="mb-1.5 h-2 w-2 bg-gray-200 dark:bg-dark-deepgray" />
                </div>
                {works
                    .sort((a, b) => Number(a.priority) - Number(b.priority))
                    .map((work) => (
                        <Work
                            key={work.organization}
                            organization={work.organization}
                            title={work.title}
                            duration={work.duration}
                            description={work.description}
                            logo={work.logo}
                            length={work.length as 'sm' | 'lg'}
                        />
                    ))}
            </div>
        </section>
    );
};

export default Works;
