import clsx from 'clsx';
import Badge from './Badge';
import Link from './Link';
import { GithubIcon } from './icons';
import { Thumbnail } from '@/types/project';
import Image from 'next/image';

const Project = ({ project }: { project: Thumbnail }) => {
    const repoLink = (repoUrl: string, liveUrl: string, className?: string) => (
        <div className={className}>
            <a
                href={project.repoUrl}
                target="_blank"
                title="Github Repository"
                rel="noopener noreferrer"
            >
                <GithubIcon className="fill-primary-600 transition hover:fill-primary-800" />
            </a>
        </div>
    );

    const { title, intro, slug, tags, coverImage, liveUrl, repoUrl, priority } =
        project;

    return (
        <li className="flex flex-col md:flex-row">
            <div className="group relative order-1 mt-5 min-h-[14rem] w-full shrink-0 md:order-2 md:mt-0 md:w-3/5 overflow-hidden">
                <Image
                    src={coverImage}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt="A picture of the project"
                    className="rounded brightness-100 saturate-[.8] transition group-hover:scale-110 group-hover:saturate-100"
                />
            </div>

            <div
                className={clsx(
                    'flex w-full flex-col md:min-h-[300px]',
                    priority % 2 === 0
                        ? 'md:order-2 md:ml-10'
                        : 'md:order-1 md:mr-6'
                )}
            >
                <ul className="flex gap-x-4 gap-y-3 flex-wrap">
                    {tags.map((tag) => (
                        <li key={tag}>
                            <Badge>{tag}</Badge>
                        </li>
                    ))}
                </ul>
                <h4 className="mt-3 font-heading text-4xl text-black font-semibold md:text-5xl dark:text-dark-white">
                    {title}
                </h4>
                <p className="mt-4 text-gray-600 dark:text-dark-gray">
                    {intro}
                </p>
                <div className="mt-5 hidden md:flex items-center gap-5">
                    {repoLink(repoUrl, liveUrl, 'h-7 w-7')}
                    <div className="flex h-full items-end ">
                        <Link href={project.liveUrl}>Live Demo</Link>
                    </div>
                </div>
            </div>
            <div className="order-last mt-4 flex items-center justify-between md:hidden">
                <div className="flex h-full items-end">
                    <Link href={project.liveUrl}>Live Demo</Link>
                </div>
                {repoLink(repoUrl, liveUrl, 'h-7 w-7')}
            </div>
        </li>
    );
};

export default Project;
