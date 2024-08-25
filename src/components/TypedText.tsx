import clsx from 'clsx';
import Typewriter from 'typewriter-effect';

interface TypedTextProps {
    textArray: string[];
    className?: string;
}

const TypedText = ({ textArray, className }: TypedTextProps) => (
    <div className={clsx('mt-2 flex flex-col', className)}>
        <Typewriter
            options={{
                strings: textArray,
                autoStart: true,
                cursor: '',
                loop: true,
                delay: 70,
                deleteSpeed: 60,
                pauseFor: 700,
            }}
        />
    </div>
);

export default TypedText;
