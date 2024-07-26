import Button from './Button';
import Gradient from './Gradient';

const Intro = () => {
    return (
        <section className="flex flex-col justify-center min-h-[600px] md:min-h-[750px]">
            <p className="font-bold text-gray-600">Hi, I am</p>
            <div
                className="mt-4 flex flex-col rounded max-w-fit font-semibold font-mono text-5xl tracking-tight text-preferred-white 
                bg-primary-800 px-2 pb-3 pt-2 whitespace-nowrap shadow-lg sm:flex-row sm:text-5xl lg:text-6xl"
            >
                <span className="mr-5">Ankit</span>
                <span>Barana</span>
            </div>
            <h2 className="mt-4 font-heading text-5xl font-bold text-gray-600 sm:text-5xl lg:text-6xl">
                I build things for the web.
            </h2>
            <p className="mt-8 max-w-2xl text-gray-600">
                I&apos;m a software developer currently studying at{' '}
                <Gradient
                    text="Oberlin College,
                OH"
                />
                . I enjoy making products for the web that look clean and
                working with new technologies in the process.
            </p>
            <Button className="mt-8">Projects</Button>
        </section>
    );
};

export default Intro;
