import clsx from 'clsx';

interface GradientHoverProps {
    className?: string;
    text: string;
}

const GradientHover = ({ className, text }: GradientHoverProps) => {
    const styles = clsx(
        'font-semibold dark:text-dark-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-700 hover:to-primary-200',
        className
    );
    return <span className={styles}>{text}</span>;
};
export default GradientHover;
