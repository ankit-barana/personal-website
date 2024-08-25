import clsx from 'clsx';
import Typewriter from 'typewriter-effect';

interface TypedTextProps {
    textArray: string[];
    className?: string;
}

const TypedText = ({ textArray, className }: TypedTextProps) => (
    <div className={clsx('flex flex-col', className)}>
        <Typewriter
            options={{
                strings: textArray,
                autoStart: true,
                cursor: '',
                loop: true,
                delay: 70,
                deleteSpeed: 70,
                // @ts-ignore
                pauseFor: 1200,
            }}
        />
    </div>
);

export default TypedText;
