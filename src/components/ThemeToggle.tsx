import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from './icons';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const ThemeToggle = ({ className }: { className?: string }) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <button id="home" className={clsx('z-50 cursor-pointer', className)}>
            {mounted && (
                <>
                    {theme === 'dark' ? (
                        <div onClick={() => setTheme('light')}>
                            <SunIcon className="mt-7 md:mt-11 h-6 w-6 fill-dark-day" />
                        </div>
                    ) : (
                        <div onClick={() => setTheme('dark')}>
                            <MoonIcon className="mt-7 md:mt-11 h-6 w-6 fill-dark-night" />
                        </div>
                    )}
                </>
            )}
        </button>
    );
};

export default ThemeToggle;
