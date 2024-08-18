import clsx from 'clsx';
import Gradient from './Gradient';

const Navbar = () => {
    return (
        <nav className="flex justify-center">
            <ul className="mt-8 z-50 p-1 fixed mx-auto flex w-fit rounded-full bg-secondary-glass opacity-100 backdrop-blur-[10.5px]">
                <a href="#home" title="Home">
                    <Tab>
                        <Gradient
                            text="ab."
                            className="font-bold font-logo text-[16px]"
                        />
                    </Tab>
                </a>
                <a href="#about" title="About">
                    <Tab>about</Tab>
                </a>
                <a href="#projects" title="Projects">
                    <Tab>projects</Tab>{' '}
                </a>
                <a href="#work" title="Work">
                    <Tab>Work</Tab>
                </a>
                <a href="#skills" title="Skills">
                    <Tab>tools</Tab>
                </a>
                <a href="#contact" title="Contact">
                    <Tab>contact</Tab>
                </a>
            </ul>
        </nav>
    );
};

const Tab = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => (
    <li
        className={clsx(
            'relative w-fit bg-primary-400 rounded-full md:px-[22px] md:py-2',
            'text-center text-black font-[350] text-[15px] tracking-[0.1px]',
            'bg-opacity-0 hover:bg-opacity-100 transition-opacity duration-700',
            className
        )}
    >
        {children}
    </li>
);

export default Navbar;
