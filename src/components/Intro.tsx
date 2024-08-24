import ResumeButton from './ResumeButton';
import { DownArrowIcon } from './icons';
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/router';

const Intro = () => {
    const router = useRouter();
    const typewriterText = [
        'for fun.',
        'for research.',
        'for building softwares.',
    ];

    return (
        <section
            className="flex flex-col justify-center min-h-[600px] md:min-h-[750px]"
            id="home"
        >
            <p className="mt-20 font-semibold text-gray-600 md:mt-5">
                Hi, I am Ankit Barana
            </p>
            <div className="mt-4 font-heading font-semibold text-[2.75rem] leading-none sm:text-6xl">
                I love to Code...
                <div className="mt-2 flex flex-col sm:ml-auto">
                    <Typewriter
                        options={{
                            strings: typewriterText,
                            autoStart: true,
                            cursor: '',
                            loop: true,
                            delay: 70,
                            deleteSpeed: 60,
                            pauseFor: 700,
                        }}
                    />
                </div>
            </div>
            <ResumeButton className="mt-8" />
        </section>
    );
};

export default Intro;
