import Link from 'next/link';
import { EEGIcon, WorkshopIcon, CodepathIcon, ExternalLinkIcon } from './icons';
import Gradient from './Gradient';

const Work = () => {
    const works = [
        {
            title: 'Research Assistant',
            organization: 'Leslie Kwakye Lab at Oberlin College',
            duration: 'Summer 2022 - Present',
            priority: 2,
            intro: 'At the LK Lab, I work on experimental design, development, and analysis of behavioral, EEG, and eye-tracking data for research on the interaction between attention and multisensory integration. I also engaged in weekly planning sessions and journal clubs and presented research findings both on and off-campus.',
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
            intro: (
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
                    hallucinations, and collaborated with labmates, including
                    PhD and MD-PhD candidates, in developing and debugging their
                    React-based experiments.
                </p>
            ),
            priority: 1,
            logo: (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-800 to-primary-200 hover:bg-primary-800 transition-transform hover:rotate-[20deg] hover:duration-200">
                    <CodepathIcon className="h-8 w-8" />
                </div>
            ),
        },
        {
            title: 'Organizer/Conductor',
            organization: 'Smartphone Workshops',
            duration: 'Summer 2021',
            priority: 3,
            intro: 'I worked with the village council to design and organize smartphone workshops in my and nearby villages to promote digital literacy within the community, focussing on UPI payments and relevant e-commerce strategies.',
            logo: (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-800 to-primary-200 hover:bg-primary-800 transition-transform hover:rotate-[20deg] hover:duration-200">
                    <WorkshopIcon className="h-8 w-8" />
                </div>
            ),
        },
    ];
    return (
        <section className="py-36 md:py-40" id="work">
            <div className="flex w-full items-center">
                <h3 className="whitespace-nowrap font-heading text-lg font-bold uppercase tracking-widest">
                    Work
                </h3>
                <div className="mx-8 h-0.5 w-full max-w-md rounded bg-gray-200"></div>
            </div>
            <div>
                <div className="ml-5 mt-12 flex-col items-center gap-4 sm:gap-6">
                    <div className="mb-1 h-0.5 w-2 bg-gray-200" />
                    <div className="mb-1 h-1 w-2 bg-gray-200" />
                    <div className="mb-1.5 h-2 w-2 bg-gray-200" />
                </div>
                {works
                    .sort((a, b) => Number(a.priority) - Number(b.priority))
                    .map((work) => (
                        <div
                            key={work.organization}
                            className="flex items-center gap-4 text-gray-600 sm:gap-6"
                        >
                            <div className="flex h-full flex-col items-center">
                                <div className="mb-2 h-36 w-2 bg-gray-200 sm:h-32 md:h-16" />
                                {work.logo}
                                <div className="mt-2 h-36 w-2 bg-gray-200 sm:h-32 md:h-20" />
                            </div>
                            <div>
                                {/* className="group group-hover:p-3 group-hover:rounded-lg group-hover:bg-colors-cream group-hover:border group-hover:border-1 group-hover:border-colors-gray" */}
                                <h3 className="text-xl font-semibold text-black">
                                    {work.organization}
                                </h3>
                                <div className="mt-1 flex flex-col text-sm font-semibold text-gray-500 sm:flex-row sm:items-center">
                                    <p>{work.title}</p>
                                    <div className="h-[7px] w-[7px] rounded-full bg-gray-500 mx-3 hidden sm:inline"></div>
                                    <p>{work.duration}</p>
                                </div>
                                <div className="mt-2 mb-5">{work.intro}</div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Work;
