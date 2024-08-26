import { AnchorHTMLAttributes, ReactNode } from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';
import { ExternalLinkIcon } from './icons';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
    className?: string;
}

const Link = ({ href, children, className, ...props }: LinkProps) => {
    const styles = clsx(
        'flex gap-[6px] group bg-gradient-to-r from-primary-800 to-primary-100 bg-clip-text font-semibold uppercase text-transparent cursor-pointer',
        className
    );

    return (
        <div className="group flex flex-row gap-0.5 justify-center items-center">
            <div className={styles}>
                <NextLink href={href} {...props}>
                    <p>{children}</p>
                </NextLink>
            </div>
            <p className="-rotate-45 text-primary-100 transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 dutext-lg font-bold text-xl">
                -&gt;
            </p>
        </div>
    );
};

export default Link;
