import { BrainIcon, WorkshopIcon } from './icons';

const Work = () => {
    const works = [
        {
            title: 'Research Assistant',
            organization: 'Sensory Neuroscience Lab',
            location: 'Oberlin College',
            duration: 'Summer 2022 - Present',
            intro: 'I became part of the Leslie Kwakye Labs research exploring the interaction between attention and multisensory integration and worked on the projects experimental design and development and behavioral, EEG, and Eye-tracking data analysis. Participated in weekly plannings and journal clubs, presented research on and off-campus, and mentored new lab members',
            logo: (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-800 to-primary-200">
                    <BrainIcon className="ml-1 h-8 w-8" />
                </div>
            ),
        },
        {
            title: 'Organizer/Conductor',
            organization: 'Smartphone Workshops',
            location: 'Alwar, India',
            duration: 'Summer 2021',
            intro: 'I worked with the Village Council to design and organize smartphone workshops in my and nearby villages to promote digital literacy within the communities, focussing on UPI payments and relevant e-commerce strategies. Educated the community about the convenience of smartphones in finding jobs, availing medical treatments, and connecting with the younger generation',
            logo: (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-800 to-primary-200 hover:bg-primary-800">
                    <WorkshopIcon className="ml-1 h-8 w-8" />
                </div>
            ),
        },
    ];
    return (
        <section className="py-36 md:py-48" id="work">
            <div className="flex w-full items-center">
                <h3 className="whitespace-nowrap font-heading text-lg font-bold uppercase tracking-widest">
                    Work
                </h3>
                <div className="mx-8 h-0.5 w-full max-w-md rounded bg-gray-200"></div>
            </div>
            <div>
                <div className="ml-5 mt-12 flex-col items-center gap-4 sm:gap-6">
                    <div className="mb-1 h-0.5 w-2 bg-primary-" />
                    <div className="mb-1 h-1 w-2 bg-gray-200" />
                    <div className="mb-1.5 h-2 w-2 bg-gray-200" />
                </div>
                {works.map((work) => (
                    <div
                        key={work.organization}
                        className="flex items-center gap-4 text-gray-600 sm:gap-6"
                    >
                        <div className="flex h-full flex-col items-center">
                            <div className="mb-2 h-40 w-2 bg-gray-200 md:h-20" />
                            {work.logo}
                            <div className="mt-2 h-44 w-2 bg-gray-200 md:h-24" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-black">
                                {work.organization}
                            </h3>
                            <div className="mt-1 flex flex-col text-sm font-semibold text-gray-500 sm:flex-row sm:items-center">
                                <p>{work.title}</p>
                                <div className="h-[7px] w-[7px] rounded-full bg-gray-500 mx-3 hidden sm:inline"></div>
                                <p>{work.duration}</p>
                            </div>
                            <p className="mt-2 mb-5">{work.intro}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;
