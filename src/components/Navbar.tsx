import { useRouter } from 'next/router';
import { HomeIcon } from './icons';
import Tab from './Tab';
import Link from 'next/link';
import clsx from 'clsx';

const Navbar = ({ className }: { className?: string }) => {
    const router = useRouter();

    const navLinks = [
        {
            name: 'about',
            link: '#about',
        },
        {
            name: 'projects',
            link: '#projects',
        },
        {
            name: 'work',
            link: '#work',
        },
        {
            name: 'tools',
            link: '#tools',
        },
        {
            name: 'contact',
            link: '#contact',
        },
    ];

    return (
        <nav
            className={clsx(
                'mt-8 z-50 flex justify-center fixed m-auto left-0 right-0 bottom-4 md:bottom-auto',
                className
            )}
        >
            <ul className="p-1 mx-auto flex items-center w-fit max-w-7xl rounded-full bg-secondary-glass opacity-100 backdrop-blur-[10.5px]">
                <Link href="#home" title="Home">
                    <Tab className="px-[17px]">
                        <HomeIcon className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
                    </Tab>
                </Link>
                {navLinks.map((navLink) => (
                    <Link
                        key={navLink.name}
                        href={navLink.link}
                        title={navLink.name}
                    >
                        <Tab>{navLink.name}</Tab>
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
