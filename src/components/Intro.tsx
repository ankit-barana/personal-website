import Button from './Button';
import Gradient from './Gradient';
import { useRouter } from 'next/router';
import ResumeButton from './ResumeButton';

const Intro = () => {
    const router = useRouter();
    return (
        <section
            className="flex flex-col justify-center min-h-[600px] md:min-h-[750px]"
            id="home"
        >
            <div className="flex justify-center items-center">
                <p> Hi, my name is Ankit</p>
            </div>
        </section>
    );
};

export default Intro;
