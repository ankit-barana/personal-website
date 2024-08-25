import clsx from 'clsx';

interface GradientProps {
    text: string;
    className?: string;
    range?: 'lg' | 'sm' | 'none';
}

const Gradient = ({ text, className, range }: GradientProps) => (
    <span
        className={clsx(
            'bg-gradient-to-r from-primary-800 to-primary-100 font-semibold text-transparent bg-clip-text',
            range === 'sm' &&
                'bg-gradient-to-r from-primary-800 to-primary-300',
            className
        )}
    >
        {text}
    </span>
);

export default Gradient;
