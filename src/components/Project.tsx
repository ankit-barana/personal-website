import clsx from 'clsx';
import Badge from './Badge';
import Link from './Link';
import { GithubIcon, ExternalLinkIcon } from './icons';
import { Thumbnail } from '@/types/project';
import Image from 'next/image';
import NextLink from 'next/link';

const Project = ({ project }: { project: Thumbnail }) => {
    const links = (repoUrl: string, liveUrl: string, className?: string) => (
        <ul className={clsx('flex gap-4', className)}>
            <li>
                <a
                    href={project.repoUrl}
                    target="_blank"
                    title="Github Repository"
                    rel="noopener noreferrer"
                >
                    <GithubIcon className="h-7 w-7 fill-primary-600 transition hover:fill-primary-800" />
                </a>
            </li>
            <li>
                <a
                    href={project.liveUrl}
                    target="_blank"
                    title="Live Link"
                    rel="noopener noreferrer"
                >
                    <ExternalLinkIcon className="h-7 w-7 stroke-primary-600 transition hover:stroke-primary-800" />
                </a>
            </li>
        </ul>
    );

    const { title, intro, slug, tags, coverImage, liveUrl, repoUrl, priority } =
        project;

    return (
        <li className="flex flex-col md:flex-row">
            <div className="group relative order-1 mt-5 min-h-[14rem] w-full shrink-0 md:order-2 md:mt-0 md:w-3/5 overflow-hidden">
                <div
                    className={clsx(
                        'absolute top-3 z-20 hidden rounded-full bg-primary-700 md:block',
                        priority === 2 ? 'right-3' : 'left-3'
                    )}
                >
                    {links(repoUrl, liveUrl, 'py-2 px-3')}
                </div>
                <NextLink href={`/projects/${slug}`}>
                    <Image
                        src={coverImage}
                        layout="fill"
                        objectFit="cover"
                        alt="A picture of the project"
                        className="rounded brightness-100 saturate-[.8] transition group-hover:scale-110 group-hover:saturate-100"
                    />
                </NextLink>
            </div>

            <div
                className={clsx(
                    'flex w-full flex-col md:min-h-[300px]',
                    priority === 2
                        ? 'md:order-1 md:mr-6'
                        : 'md:order-2 md:ml-10'
                )}
            >
                <ul className="flex gap-6">
                    {tags.map((tag) => (
                        <li key={tag}>
                            <Badge>{tag}</Badge>
                        </li>
                    ))}
                </ul>
                <h4 className="mt-3 font-heading text-4xl font-semibold md:text-5xl">
                    {title}
                </h4>
                <p className="mt-4 text-gray-600">{intro}</p>
                <div className="hidden h-full items-end md:flex">
                    <Link href={`/projects/${slug}`}>Read More</Link>
                </div>
            </div>
            <div className="order-last mt-4 flex items-center justify-between md:hidden">
                <div className="flex h-full items-end">
                    <Link href={`/projects/${slug}`}>Read more</Link>
                </div>
                <span className="fill-primary-700 stroke-primary-700"></span>
                {links(repoUrl, liveUrl)}
            </div>
        </li>
    );
};

export default Project;
