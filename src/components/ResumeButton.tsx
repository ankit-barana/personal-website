import clsx from 'clsx';
import Button from './Button';

interface ResumeButtonProps {
    className?: string;
    size?: 'sm' | 'lg';
}

const ResumeButton = ({ className, size }: ResumeButtonProps) => {
    return (
        <div className={className}>
            <Button className={className}>Resume</Button>
        </div>
    );
};

export default ResumeButton;
