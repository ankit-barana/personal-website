import { useRouter } from 'next/router';
import { GithubIcon, LinkedInIcon } from './../icons';
import Button from '../Button';
import ResumeButton from '../ResumeButton';
import Heading from '../Heading';

const Contact = () => {
    const router = useRouter();
    return (
        <section className="py-44" id="contact">
            <Heading text="Contact" width="max-w-md" />
            <div className="mt-10">
                <p className="max-w-lg text-gray-600 dark:text-dark-gray">
                    Wanna connect? Shoot me an email or text me on Linkedin
                    &#40;linked below&#41;. Looking forward to hearing from you!
                </p>
                <div className="mt-10 flex flex-col justify-center gap-y-6 sm:flex-row sm:items-center sm:justify-start">
                    <div className="flex items-center gap-4">
                        <ResumeButton />
                        <Button
                            className="after:left-[-150%]"
                            onClick={() =>
                                router.push('mailto:ankitbarana@outlook.com')
                            }
                        >
                            Mail
                        </Button>
                    </div>
                    <div>
                        <ul className="ml-4 flex items-center gap-4">
                            <li>
                                <a
                                    href="https://github.com/ankit-barana"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Github profile"
                                >
                                    {' '}
                                    <GithubIcon className="h-8 w-8 fill-black dark:fill-dark-white" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/ankitbarana"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Linkedin profile"
                                >
                                    <LinkedInIcon className="h-8 w-8" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
