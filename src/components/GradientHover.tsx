import clsx from 'clsx';

interface GradientHoverProps {
    className?: string;
    text: string;
}

const GradientHover = ({ className, text }: GradientHoverProps) => {
    const styles = clsx(
        'font-semibold dark:text-dark-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-800 hover:to-primary-100 dark:hover:text-transparent dark:hover:bg-clip-text dark:hover:bg-gradient-to-r dark:hover:from-primary-800 dark:hover:to-primary-100',
        className
    );
    return <span className={styles}>{text}</span>;
};
export default GradientHover;
