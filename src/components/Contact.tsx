import { useRouter } from 'next/router';
import { GithubIcon, LinkedInIcon } from './icons';
import Button from './Button';

const Contact = () => {
    const router = useRouter();
    return (
        <section className="py-36 md:py-48" id="contact">
            <div className="flex w-full items-center">
                <h3 className="whitespace-nowrap font-heading text-lg font-bold uppercase tracking-widest">
                    Contact
                </h3>
                <div className="mx-8 h-0.5 w-full max-w-md rounded bg-gray-200"></div>
            </div>
            <div className="mt-10">
                <p className="max-w-lg text-gray-600 ">
                    Wanna connect? Shoot me an email or text me on Linkedin
                    &#40;linked below&#41;. Looking forward to hearing from you!
                </p>
                <div className="mt-10 flex flex-col justify-center gap-y-6 sm:flex-row sm:items-center sm:justify-start">
                    <div>
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
                                    <GithubIcon className="h-8 w-8" />
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
