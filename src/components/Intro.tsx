import ResumeButton from './ResumeButton';
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/router';
import Gradient from './Gradient';
import TypedText from './TypedText';

const Intro = () => {
    const router = useRouter();
    const whyIcode = ['for fun.', 'for research.', 'for building softwares.'];

    return (
        <section
            className="flex flex-col justify-center min-h-[600px] md:min-h-[750px]"
            id="home"
        >
            <p className="mt-20 tracking-wide font-semibold text-gray-600 md:mt-5">
                Hi, I am{' '}
                <Gradient
                    className="font-bold"
                    text="Ankit Barana"
                    range="sm"
                />
            </p>
            <div className="mt-4 font-heading font-semibold text-[2.75rem] leading-none sm:text-6xl">
                I love to Code...
                <TypedText textArray={whyIcode} />
            </div>
            <ResumeButton className="mt-8" />
        </section>
    );
};

export default Intro;
