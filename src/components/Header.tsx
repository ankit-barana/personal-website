import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
        <div className="flex flex-row justify-end mr-2 lg:mr-40">
            <Navbar />
            <ThemeToggle />
        </div>
    );
};

export default Header;
