import clsx from 'clsx';

const Gradient = ({
    text,
    className,
}: {
    text: string;
    className?: string;
}) => (
    <span
        className={clsx(
            'bg-gradient-to-r from-primary-800 to-primary-100 font-semibold text-transparent bg-clip-text',
            className
        )}
    >
        {text}
    </span>
);

export default Gradient;
