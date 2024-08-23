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
        'flex gap-[6px] group bg-gradient-to-r from-primary-800 to-primary-100 bg-clip-text font-semibold uppercase text-transparent',
        className
    );

    return (
        <div className={styles}>
            <NextLink href={href} {...props}>
                {children}
            </NextLink>
            <p className="transition-all group-hover:ml-1.5">-&gt;</p>
        </div>
        // inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px
    );
};

export default Link;
