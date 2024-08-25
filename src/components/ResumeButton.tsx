import Button from './Button';
import Link from 'next/link';

interface ResumeButtonProps {
    className?: string;
    size?: 'sm' | 'lg';
}

const ResumeButton = ({ className, size }: ResumeButtonProps) => {
    return (
        <div className={className}>
            <Link href="/documents/resume.pdf" target="_blank">
                <Button className={className}>Resumé</Button>
            </Link>
        </div>
    );
};

export default ResumeButton;
