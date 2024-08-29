import { title } from 'process';
import Badge from '../Badge';
import Heading from '../Heading';

const Tools = () => {
    const tools = [
        {
            title: 'Languages',
            subtitle:
                'Programming, markup, and query languages I have experience with',
            items: [
                'Typescript',
                'HTML + CSS',
                'Java',
                'Rust',
                // 'SQL',
                'SQLite',
                'R',
                'MATLAB',
            ],
        },
        {
            title: 'Frontend and Backend Technologies',
            subtitle:
                'Technologies I have used for developing user-interfaces and building backends',
            items: [
                'React',
                'Next',
                // 'Node',
                // 'Express',
                'Rocket.rs',
                'Yew',
                'Jekyll',
                'Tailwind CSS',
                // 'PostgreSQL',
                'Rusqlite',
            ],
        },
        {
            title: 'Tools',
            subtitle:
                'Some other tools I used for design, development, and project management',
            items: [
                'Git & Github',
                'Command Line',
                'Postman',
                'Figma',
                'Lucidchart',
            ],
        },
        {
            title: 'Research',
            subtitle:
                'Technologies for designing experiments, building stimuli, analysing data, and communicating findings.',
            items: [
                'MS Office',
                'Latex',
                'Adobe-Suite',
                'Canva',
                'SPSS',
                'GraphPad Prism',
                'Experiment Builder',
                'Eyelink Plus',
                'BrainVision',
                'Eprime-3',
            ],
        },
    ];
    return (
        <section className="py-44" id="tools">
            <Heading text="Tools" width="max-w-md" />
            <div className="mt-12 flex flex-col gap-12">
                {tools.map((tool) => (
                    <div key={tool.title}>
                        <div className="flex flex-col gap-1">
                            <p className="text-lg font-semibold text-black dark:text-dark-white">
                                {tool.title}
                            </p>
                            <p className="text-sm font-medium text-gray-500 dark:text-dark-gray">
                                {tool.subtitle}
                            </p>
                        </div>

                        <ul className="mt-4 flex flex-wrap gap-3">
                            {tool.items.map((item) => (
                                <Badge key={item} variant="outline" size="lg">
                                    {item}
                                </Badge>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tools;
