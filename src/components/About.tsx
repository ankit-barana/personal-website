import Image from 'next/image';

const About = () => {
    return (
        <section
            className="flex w-full flex-col items-center gap-x-8 pt-28 pb-36 md:flex-row md:pb-48"
            id="about"
        >
            <div className="w-full">
                <div className="flex w-full items-center">
                    <h3 className="whitespace-nowrap font-heading text-lg font-bold uppercase tracking-widest">
                        About Me
                    </h3>
                    <div className="mx-8 h-0.5 w-full rounded bg-gray-300"></div>
                </div>
                <div className="mt-4 text-gray-600">
                    <p>
                        Hello! My name is Ankit, and I love solving problems
                        through code, whether it&apos;s developing research
                        tools, creating web applications, or just experimenting
                        with various algorithms. Initially a neuroscience major
                        at Oberlin College, I found a passion for coding while
                        working in the Sensory Neuroscience Lab. It wasn&apos;t
                        until I took the Data Structures class that I declared a
                        second major in computer science.
                    </p>
                    {/* building stimuli, and untilizng
                        a range of data-analysis tools. */}
                    <br />
                    <p>
                        I think programming is akin to communication, whether
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
            <div className="mt-12 max-w-xs pr-5">
                <Image
                    src="/images/me.jpg"
                    alt="a picture of me"
                    width={300}
                    height={400}
                    className="rounded shadow-md"
                />
            </div>
        </section>
    );
};

export default About;
