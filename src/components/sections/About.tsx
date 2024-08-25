import Image from 'next/image';
import Gradient from '../Gradient';
import Heading from '../Heading';

const About = () => {
    return (
        <section
            className="flex w-full flex-col items-center gap-x-8 py-44 md:flex-row"
            id="about"
        >
            <div className="w-full">
                <Heading text="About Me" />
                <div className="mt-4 text-gray-600 dark:text-dark-gray">
                    <p>
                        Hello! My name is Ankit, and I love solving problems
                        through code, whether it&apos;s developing research
                        tools, creating web applications, or just experimenting
                        with various algorithms. I am currently pursuing a
                        double major in neuroscience and computer science at
                        Oberlin College. I found a passion for coding while
                        working in the Sensory Neuroscience Lab. It wasn&apos;t
                        until I took the Data Structures class, however, that I
                        declared a major in computer science.
                    </p>
                    <br />
                    <p>
                        I think of programming as akin to communication, whether
                        it&apos;s collaborating with programmers or crafting
                        user experiences. That&apos;s why I strive for clean,
                        maintainable, and minimalistic solutions, from user
                        interface to the underlying code structure and file
                        organization.
                    </p>
                    <br />
                    <p>
                        To put a face to my name, here&apos;s a photo of me
                        :&#41;
                    </p>
                </div>
            </div>
            <div className="mt-12 max-w-64 md:max-w-xs pr-5">
                <Image
                    src="/images/me.png"
                    alt="a picture of me"
                    width={300}
                    height={400}
                    className="rounded shadow-md brightness-100 saturate-100 "
                />
            </div>
        </section>
    );
};

export default About;
