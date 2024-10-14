import Button from './Button';
import Link from 'next/link';

interface ResumeButtonProps {
    className?: string;
    size?: 'sm' | 'lg';
}

const ResumeButton = ({ className, size }: ResumeButtonProps) => {
    return (
        <div className={className}>
            <Link href="/documents/cv.pdf" target="_blank">
                <Button className={className}>
                    <p className="mx-4">CV</p>
                </Button>
            </Link>
        </div>
    );
};

export default ResumeButton;
