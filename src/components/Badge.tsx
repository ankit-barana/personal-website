import clsx from 'clsx';
import { ReactNode } from 'react';

type BadgeProps = {
    variant?: 'fill' | 'outline';
    size?: 'md' | 'lg';
    children?: ReactNode;
};

const Badge = ({ variant = 'fill', size = 'md', children }: BadgeProps) => {
    return (
        <span
            className={clsx(
                'rounded-lg bg-primary-700 px-2 py-1 text-sm text-white transition-colors hover:bg-primary-700/80',
                variant === 'outline' &&
                    'border border-gray-700 bg-transparent text-gray-700 hover:bg-gray-700/10',
                size === 'lg' && 'px-3 py-2 text-base'
            )}
        >
            {children}
        </span>
    );
};

export default Badge;
