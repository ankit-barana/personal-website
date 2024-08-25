import clsx from 'clsx';

interface TabProps {
    className?: string;
    children?: React.ReactNode;
}

const Tab = ({ className, children }: TabProps) => (
    <li
        className={clsx(
            'relative w-fit bg-primary-400 rounded-full px-[12px] py-[10px] sm:px-[20px] md:px-[22px] sm:py-2 dark:bg-dark-lightnavy',
            'text-center text-black font-[350px] text-[13px] tracking-tight sm:tracking-[0.1px] dark:text-dark-white',
            'bg-opacity-0 transition-colors duration-100 ease-in-out hover:bg-opacity-100 dark:bg-opacity-0',
            className
        )}
    >
        {children}
    </li>
);

export default Tab;
