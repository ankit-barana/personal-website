import Image from 'next/image';
import { useRouter } from 'next/router';
import Heading from '../Heading';
import GradientHover from '../GradientHover';

const About = () => {
    const router = useRouter();

    return (
        <section
            className="flex w-full flex-col items-center gap-x-8 py-44 md:flex-row"
            id="about"
        >
            <div className="w-full">
                <Heading text="About Me" />
                <div className="mt-4 text-gray-600 dark:text-dark-gray">
                    <p>
                        Hi there! My name is Ankit, and I love solving problems
                        through code, whether it&apos;s developing research
                        tools, creating web applications, or just experimenting
                        with various algorithms. I am currently pursuing a{' '}
                        <GradientHover text="computer science" /> and{' '}
                        <GradientHover text="neuroscience" /> at{' '}
                        <GradientHover text="Oberlin College" />.
                    </p>
                    <br />
                    <div>
                        For over 2 years, I have been conducting research on{' '}
                        <GradientHover text="Mutlisensory Integration and Attention" />{' '}
                        in the Leslie Kwakye Lab where daily sessions of{' '}
                        <GradientHover text="coding" /> and{' '}
                        <GradientHover text="debugging" /> neuroscience
                        experiments became part of my life. I also joined Powers
                        Lab at{' '}
                        <GradientHover
                            text="Yale
                        School of Medicine"
                        />{' '}
                        for my winter-term project, where I contributed to
                        developing several experiments in{' '}
                        <GradientHover text="React" />. Lately, I have been
                        working on some personal projects which you can check{' '}
                        <p
                            className="inline-flex"
                            onClick={() => router.push('#projects')}
                        >
                            <GradientHover
                                text="here"
                                className="cursor-pointer"
                            />
                        </p>
                        .<br />
                        <br />
                        <p>
                            To put a face to my name, here is a photo of me
                            :&#41;
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-12 max-w-64 md:max-w-xs pr-5">
                <Image
                    src="/images/me.png"
                    alt="a picture of me"
                    width={300}
                    height={400}
                    className="rounded shadow-md brightness-100 saturate-100"
                />
            </div>
        </section>
    );
};

export default About;
