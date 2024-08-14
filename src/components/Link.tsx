import { AnchorHTMLAttributes, ReactNode } from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
    className?: string;
}

const Link = ({ href, children, className, ...props }: LinkProps) => {
    const styles = clsx(
        'bg-gradient-to-r from-primary-800 to-primary-100 bg-clip-text font-semibold uppercase text-transparent',
        'after:ml-1.5 after:transition-all after:content-["->"]',
        'hover:after:ml-3',
        className
    );

    return (
        <NextLink href={href} className={styles} {...props}>
            {children}
        </NextLink>
    );
};

export default Link;
