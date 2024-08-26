import clsx from 'clsx';

interface WorkProps {
    organization: string;
    title: string;
    duration: string;
    description: React.ReactNode;
    logo: React.ReactNode;
    length?: 'sm' | 'lg';
}

const Work = ({
    organization,
    title,
    duration,
    description,
    logo,
    length,
}: WorkProps) => {
    return (
        <div className="flex items-center gap-4 text-gray-600 sm:gap-6 dark:text-dark-gray">
            <div className="flex h-full flex-col items-center">
                <div
                    className={clsx(
                        'mb-2 h-52 w-2 bg-gray-200 sm:h-32 md:h-24 lg:h-20 dark:bg-dark-deepgray',
                        length === 'sm' && 'h-28 sm:h-24 md:h-8 lg:h-12'
                    )}
                />
                {logo}
                <div
                    className={clsx(
                        'mt-2 h-52 w-2 bg-gray-200 sm:h-32 md:h-24 lg:h-20 dark:bg-dark-deepgray',
                        length === 'sm' && 'h-28 sm:h-24 md:h-20'
                    )}
                />
            </div>
            <div>
                <h3 className="text-xl font-semibold text-black dark:text-dark-white">
                    {organization}
                </h3>
                <div className="mt-1 flex flex-col text-sm font-semibold text-gray-500 sm:flex-row sm:items-center dark:text-dark-gray">
                    <p>{title}</p>
                    <div className="h-[7px] w-[7px] rounded-full bg-gray-500 mx-3 hidden sm:inline"></div>
                    <p>{duration}</p>
                </div>
                <div className="mt-2 mb-5">{description}</div>
            </div>
        </div>
    );
};

export default Work;
