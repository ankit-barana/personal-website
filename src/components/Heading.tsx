import clsx from 'clsx';

interface HeadingProps {
    text: string;
    width?: string;
    className?: string;
}

const Heading = ({ text, className, width }: HeadingProps) => {
    const styles = clsx('', className);
    return (
        <div className="flex w-full items-center">
            <h3 className="whitespace-nowrap font-heading text-lg text-black font-bold uppercase tracking-widest dark:text-dark-white">
                {text}
            </h3>
            <div
                className={clsx(
                    'mx-8 h-0.5 w-full rounded bg-gray-200 dark:bg-dark-deepgray',
                    width
                )}
            ></div>
        </div>
    );
};

export default Heading;
