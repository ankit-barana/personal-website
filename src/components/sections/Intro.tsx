import ResumeButton from '../ResumeButton';
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/router';
import Gradient from '../Gradient';
import TypedText from '../TypedText';

const Intro = () => {
    const router = useRouter();
    const whyIcode = ['for fun.', 'for research.', 'for building things.'];

    return (
        <section
            className="flex flex-col justify-center py-44 md:pb-72 md:pt-80 lg:py-44 min-h-[600px] md:min-h-[750px]"
            id="home"
        >
            <p className="mt-8 tracking-wide font-semibold text-base text-gray-600 md:-mt-10 dark:text-dark-gray">
                Hi, I am{' '}
                <Gradient
                    className="font-bold"
                    text="Ankit Barana"
                    range="sm"
                />
            </p>
            <div className="mt-4 font-heading text-black font-semibold text-[2.75rem] leading-[1.1] sm:text-7xl dark:text-dark-white">
                I love to Code...
                <TypedText textArray={whyIcode} />
            </div>
            <ResumeButton className="mt-8" />
        </section>
    );
};

export default Intro;
