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
        'flex gap-[6px] group bg-gradient-to-r from-primary-800 to-primary-100 bg-clip-text font-semibold uppercase text-transparent cursor-pointer',
        className
    );

    return (
        <div className={styles}>
            <NextLink href={href} {...props}>
                <div className="flex flex-row gap-1.5 justify-center">
                    <p>{children}</p>
                    <p className="transition-all ease-in-out duration-300 group-hover:ml-1.5">
                        -&gt;
                    </p>
                </div>
            </NextLink>
        </div>
    );
};

export default Link;
