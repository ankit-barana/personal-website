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
                variant === 'fill' &&
                    'rounded-lg bg-primary-800 px-2 py-1 text-sm text-white transition-colors hover:bg-primary-800/80 dark:bg-dark-navy',
                variant === 'outline' &&
                    'rounded-lg px-2 py-1 text-sm border bg-transparent border-gray-700 text-gray-700 hover:bg-gray-700/10 dark:border-dark-gray dark:text-dark-gray dark:hover:bg-dark-gray/10',
                size === 'lg' && 'px-3 py-2 text-base'
            )}
        >
            {children}
        </span>
    );
};

export default Badge;
