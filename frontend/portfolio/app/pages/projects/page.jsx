"use client";

import Link from "next/link";
import {
    FiArrowUpRight,
    FiArrowRight,
    FiGithub,
} from "react-icons/fi";

import Navbar from "../navbar/page";
import Footer from "../footer/page";

const projects = [
    {
        id: "hoop",
        number: "01",
        title: "Hoop",
        subtitle: "AI B2B Lead Generation",
        category: "Web Applications",
        description:
            "A platform that helps freelancers discover businesses, evaluate their websites, and organize potential clients through a lead pipeline.",
        technologies: ["Next.js", "Node.js", "MongoDB", "Python"],

        // Example: "/images/projects/hoop-dashboard.png"
        image: "/images/hoop.png",
        imageAlt: "Hoop lead generation dashboard",

        // Add your actual URLs. Leave blank to hide the links.
        liveUrl: "",
        githubUrl: "",
    },
    {
        id: "tourism",
        number: "02",
        title: "NM Lanka Tour Takers",
        subtitle: "Tourism Website",
        category: "Websites",
        description:
            "A tourism website introducing Sri Lankan destinations and travel services, helping visitors explore their options and contact the business.",
        technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
        image: "/images/nmlanka.png",
        imageAlt: "NM Lanka Tour Takers website",
        liveUrl: "",
        githubUrl: "",
    },
    {
        id: "passenger",
        number: "03",
        title: "Passenger",
        subtitle: "Mobile Application",
        category: "Mobile Apps",
        description:
            "A Flutter mobile application featuring account registration, login, and a home interface designed for mobile use.",
        technologies: ["Flutter", "Dart"],
        image: "/images/passenger.png",
        imageAlt: "Passenger mobile application screens",
        liveUrl: "",
        githubUrl: "",
    },
    {
        id: "hotel",
        number: "04",
        title: "Hotel Reservation System",
        subtitle: "Web Applications",
        category: "Web Applications",
        description:
            "A platform to make hotel reservations.",
        technologies: ["HTML", "Tailwind CSS", "Java", "MySQL"],
        image: "/images/ocenviewlogo.png",
        imageAlt: "Hotel Reservation System interface",
        liveUrl: "",
        githubUrl: "",
    },
];

function ProjectPreview({ project }) {
    return (
        <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#101010] sm:aspect-[16/11]">
            {/* Subtle lighting behind the screenshot */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at 65% 80%, rgba(249,115,22,0.13), transparent 65%)",
                }}
            />

            {project.image ? (
                <img
                    src={project.image}
                    alt={project.imageAlt}
                    width={1200}
                    height={825}
                    loading="lazy"
                    className="relative h-full w-full object-contain p-4 transition-transform duration-500 motion-safe:group-hover:scale-[1.025] sm:p-7"
                />
            ) : (
                /* Typography preview until you add a project screenshot */
                <div className="relative flex h-full flex-col justify-between p-7 sm:p-10">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#999]">
                        {project.category}
                    </span>

                    <div>
                        <span
                            aria-hidden="true"
                            className="block text-[clamp(5rem,10vw,9rem)] font-bold leading-none tracking-[-0.08em] text-orange-500/20"
                        >
                            {project.number}
                        </span>

                        <p className="mt-4 max-w-sm text-2xl font-semibold tracking-tight text-[#ddd] sm:text-3xl">
                            {project.title}
                        </p>
                    </div>

                    <span
                        aria-hidden="true"
                        className="mt-6 h-px w-16 bg-orange-500/60"
                    />
                </div>
            )}
        </div>
    );
}

function ProjectEntry({ project, index }) {
    const hasLinks = project.liveUrl || project.githubUrl;

    return (
        <article
            aria-labelledby={`project-${project.id}`}
            className="grid items-center gap-8 border-b border-white/10 py-10 first:pt-0 sm:gap-10 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20"
        >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <ProjectPreview project={project} />
            </div>

            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="mb-5 flex items-center gap-4">
                    <span className="font-mono text-xs text-orange-500">
                        {project.number}
                    </span>

                    <span aria-hidden="true" className="h-px w-8 bg-white/20" />

                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#888]">
                        {project.category}
                    </span>
                </div>

                <h2
                    id={`project-${project.id}`}
                    className="text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#eee] sm:text-4xl"
                >
                    {project.title}
                </h2>

                <p className="mt-2 font-serif text-xl text-orange-500 sm:text-2xl">
                    {project.subtitle}
                </p>

                <p className="mt-5 max-w-lg text-base leading-7 text-[#999]">
                    {project.description}
                </p>

                <ul
                    aria-label="Technologies used"
                    className="mt-6 flex flex-wrap gap-x-4 gap-y-2"
                >
                    {project.technologies.map((technology) => (
                        <li
                            key={technology}
                            className="border-b border-white/15 pb-1 text-xs text-[#aaa]"
                        >
                            {technology}
                        </li>
                    ))}
                </ul>

                {hasLinks && (
                    <div className="mt-8 flex flex-wrap items-center gap-6">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} live, opens in a new tab`}
                                className="group/link inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                            >
                                View live project
                                <FiArrowUpRight
                                    aria-hidden="true"
                                    className="h-5 w-5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                                />
                            </a>
                        )}

                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} source code, opens in a new tab`}
                                className="inline-flex min-h-11 items-center gap-2 text-sm text-[#bbb] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                            >
                                <FiGithub aria-hidden="true" className="h-4 w-4" />
                                Source code
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}

export default function ProjectsPage() {
    return (
        <>
            <Navbar />

            <main className="bg-[#030303] text-white">
                <section
                    id="projects"
                    aria-labelledby="projects-heading"
                    className="relative isolate overflow-hidden px-6 pb-16 pt-36 sm:px-10 lg:pb-24 lg:pt-44"
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -z-10"
                        style={{
                            background:
                                "radial-gradient(ellipse at 95% 0%, rgba(249,115,22,0.08), transparent 35%)",
                        }}
                    />

                    <div className="mx-auto max-w-7xl">
                        {/* Page introduction */}
                        <header>
                            <div className="mb-7 flex items-center gap-4">
                                <span
                                    aria-hidden="true"
                                    className="h-px w-10 bg-orange-500"
                                />
                                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#999]">
                                    Selected projects
                                </p>
                            </div>

                            <div className="grid items-end gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                                <h1
                                    id="projects-heading"
                                    className="text-[clamp(3rem,7vw,6rem)] font-bold leading-[1.02] tracking-[-0.06em] text-[#eee]"
                                >
                                    Ideas made
                                    <br />
                                    <span className="font-serif font-normal text-orange-500">
                                        real.
                                    </span>
                                </h1>

                                <p className="max-w-md text-base leading-7 text-[#999] lg:pb-2">
                                    A closer look at the websites, applications, and
                                    experiments I&apos;ve built—bringing design and
                                    development together to solve practical problems.
                                </p>
                            </div>
                        </header>

                        {/* Divider */}
                        <div className="mb-10 mt-12 flex flex-col gap-5 border-b border-white/15 pb-6 sm:flex-row sm:items-center sm:justify-between lg:mb-14 lg:mt-16">

                        </div>

                        {/* Project showcase */}
                        <div id="project-list">
                            {projects.map((project, index) => (
                                <ProjectEntry
                                    key={project.id}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </div>


                    </div>
                </section>

                {/* What goes into the work */}
                <section
                    id="behind-the-build"
                    aria-labelledby="build-heading"
                    className="border-y border-white/10 bg-[#0a0a0a] px-6 py-16 sm:px-10 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
                            <div>
                                <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-orange-500">
                                    Behind the build
                                </p>
                                <h2 id="build-heading" className="max-w-xl text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.045em]">
                                    More than what<br />
                                    <span className="font-serif font-normal text-orange-500">meets the eye.</span>
                                </h2>
                            </div>
                            <p className="max-w-md text-base leading-7 text-[#999]">
                                A screenshot shows the interface. The work underneath is about
                                understanding the problem, connecting the pieces, and making
                                the experience useful. These are the priorities I bring to a build.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16 lg:gap-12">
                            {[
                                {
                                    number: "01",
                                    title: "A clear user journey",
                                    description: "Start with what someone needs to do. Make the next action easy to find, keep the interface readable, and adapt the layout to the screen.",
                                    detail: "Layout · Interaction · Responsiveness",
                                },
                                {
                                    number: "02",
                                    title: "Connected functionality",
                                    description: "Think through how the interface, application logic, and data work together—including what happens when something loads, fails, or has no results.",
                                    detail: "Components · APIs · Data",
                                },
                                {
                                    number: "03",
                                    title: "Room to improve",
                                    description: "Keep the structure understandable so the next change is easier to make. Use feedback and real use to decide what the next version needs.",
                                    detail: "Structure · Feedback · Iteration",
                                },
                            ].map((item) => (
                                <article key={item.number} className="border-t border-white/20 pt-6">
                                    <span aria-hidden="true" className="font-mono text-sm text-orange-500">{item.number}</span>
                                    <h3 className="mt-5 text-xl font-semibold tracking-tight">{item.title}</h3>
                                    <p className="mt-4 text-base leading-7 text-[#999]">{item.description}</p>
                                    <p className="mt-6 text-xs leading-relaxed text-[#aaa]">{item.detail}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* A new project conversation */}
                <section
                    id="next-project"
                    aria-labelledby="next-project-heading"
                    className="relative isolate overflow-hidden px-6 py-16 sm:px-10 lg:py-28"
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -z-10"
                        style={{ background: "radial-gradient(ellipse at 5% 90%, rgba(249,115,22,0.09), transparent 50%)" }}
                    />
                    <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
                        <div>
                            <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-orange-500">
                                Your idea comes next
                            </p>
                            <h2 id="next-project-heading" className="max-w-lg text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.045em]">
                                From a conversation<br />
                                <span className="font-serif font-normal text-orange-500">to a working product.</span>
                            </h2>
                            <p className="mt-6 max-w-md text-base leading-7 text-[#999]">
                                You don&apos;t need every detail figured out. Bring the problem
                                you want to solve, and we can explore what a useful first version looks like.
                            </p>
                            <Link
                                href="/#contact"
                                className="group mt-8 inline-flex min-h-13 items-center justify-center gap-5 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                            >
                                Talk about your project
                                <FiArrowRight aria-hidden="true" className="h-5 w-5 transition-transform motion-safe:group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <ol className="border-t border-white/15">
                            {[
                                {
                                    title: "Shape the brief",
                                    description: "Discuss the audience, the problem, and the features that matter most. Agree on a realistic scope before the build starts.",
                                },
                                {
                                    title: "Build and review",
                                    description: "Work through the interface and functionality in manageable stages, with opportunities to review progress and refine the details.",
                                },
                                {
                                    title: "Prepare for launch",
                                    description: "Check the main user journeys, work through remaining issues, and agree on the handover and any ongoing support needed.",
                                },
                            ].map((step, index) => (
                                <li key={step.title} className="grid grid-cols-[28px_1fr] gap-4 border-b border-white/15 py-7 sm:grid-cols-[40px_1fr] sm:gap-5">
                                    <span aria-hidden="true" className="mt-1 font-mono text-xs text-orange-500">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                                        <p className="mt-3 text-base leading-7 text-[#999]">{step.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}