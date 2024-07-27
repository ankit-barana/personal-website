import clsx from 'clsx';
import Gradient from './Gradient';
import Button from './Button';

const Navbar = () => {
    return (
        <ul className="z-10 p-1 fixed mx-auto flex w-fit rounded-full bg-preferred-glass opacity-100 backdrop-blur-[10.5px]">
            <Tab>
                <Gradient
                    text="ab."
                    className="font-bold font-logo text-[15px]"
                />
            </Tab>
            <Tab>about</Tab>
            <Tab>projects</Tab>
            <Tab>experience</Tab>
            <Tab>tools</Tab>
            <Tab>contact</Tab>
        </ul>
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
