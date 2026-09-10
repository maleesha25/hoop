import Link from "next/link";
import {
    FiArrowUpRight,
    FiArrowRight,
    FiCode,
    FiPenTool,
    FiLayers,
} from "react-icons/fi";

import Navbar from "../navbar/page";
import Footer from "../footer/page";

const principles = [
    {
        number: "01",
        icon: FiPenTool,
        title: "Design with purpose.",
        description:
            "An interface should look good and make sense. I focus on clear layouts, useful interactions, and details that help people use a product comfortably.",
    },
    {
        number: "02",
        icon: FiCode,
        title: "Understand the build.",
        description:
            "I enjoy connecting what users see with the systems behind it—from responsive components to APIs and databases.",
    },
    {
        number: "03",
        icon: FiLayers,
        title: "Keep improving.",
        description:
            "Every project is a chance to learn. I revisit my work, explore better approaches, and use feedback to improve the next version.",
    },
];

const education = [
    {
        title: "BSc Software Engineering",
        institution: "Cardiff Metropolitan University · ICBT",
        description:
            "Building on my computing background through software engineering studies and practical project work.",
        status: "Undergraduate",
    },
    {
        title: "HND in Computing",
        institution: "ICBT Kandy",
        description:
            "Developed a foundation in programming, databases, and building software applications.",
        status: "Education",
    },
];

const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Python",
    "MongoDB",
    "MySQL",
    "Flutter",
];

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <main className="bg-[#030303] text-[#ededed]">
                {/* Introduction */}
                <section
                    id="about"
                    aria-labelledby="about-heading"
                    className="relative isolate overflow-hidden px-6 pb-16 pt-36 sm:px-10 lg:pb-24 lg:pt-44"
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -z-10"
                        style={{
                            background:
                                "radial-gradient(ellipse at 85% 15%, rgba(249,115,22,0.09), transparent 50%)",
                        }}
                    />

                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8 flex items-center gap-4">
                            <span
                                aria-hidden="true"
                                className="h-px w-10 bg-orange-500"
                            />

                            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#999]">
                                Behind Hoop
                            </p>
                        </div>

                        <h1
                            id="about-heading"
                            className="max-w-5xl text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[1.02] tracking-[-0.06em]"
                        >
                            A developer&apos;s mind.
                            <br />
                            <span className="font-serif font-normal text-orange-500">
                                A designer&apos;s eye.
                            </span>
                        </h1>

                        <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 lg:mt-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:pt-10">
                            <div>
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">
                                    Hello, I&apos;m
                                </p>

                                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                                    Maleesha Thulsara
                                </h2>

                                <p className="mt-2 text-sm text-[#999]">
                                    Software engineering undergraduate · Sri Lanka
                                </p>
                            </div>

                            <div className="max-w-2xl">
                                <p className="text-lg leading-relaxed text-[#ccc] sm:text-xl">
                                    I build websites and applications that bring thoughtful
                                    design and practical functionality together.
                                </p>

                                <p className="mt-5 text-base leading-7 text-[#999]">
                                    My background brings together graphic design, web
                                    development, and software engineering. I enjoy working
                                    across the full stack—shaping the interface, connecting
                                    the backend, and understanding how each part supports
                                    the overall experience.
                                </p>

                                <p className="mt-5 text-base leading-7 text-[#999]">
                                    Hoop is where I bring that work together: a space for
                                    my projects, ideas, and the things I&apos;m learning
                                    along the way.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Brand statement */}
                <section
                    aria-labelledby="about-statement"
                    className="border-y border-white/10 bg-[#080808] px-6 py-12 sm:px-10 lg:py-16"
                >
                    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center md:gap-12">
                        <h2
                            id="about-statement"
                            className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl"
                        >
                            Where logic meets{" "}
                            <span className="font-serif font-normal text-orange-500">
                                creativity.
                            </span>
                        </h2>

                        <p className="max-w-sm text-base leading-7 text-[#999]">
                            For me, the interesting part is making both work
                            together—an experience that feels right and a system
                            that works behind it.
                        </p>
                    </div>
                </section>

                {/* Approach */}
                <section
                    aria-labelledby="approach-heading"
                    className="px-6 py-16 sm:px-10 lg:py-24"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">
                                My approach
                            </p>

                            <h2
                                id="approach-heading"
                                className="mt-5 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.045em]"
                            >
                                What guides
                                <br />
                                <span className="font-serif font-normal text-orange-500">
                                    the work.
                                </span>
                            </h2>
                        </div>

                        <div>
                            {principles.map((principle) => {
                                const Icon = principle.icon;

                                return (
                                    <article
                                        key={principle.number}
                                        className="grid grid-cols-[28px_1fr] gap-4 border-t border-white/15 py-7 first:pt-7 sm:grid-cols-[36px_1fr_28px] sm:gap-5"
                                    >
                                        <span className="mt-1 font-mono text-xs text-orange-500">
                                            {principle.number}
                                        </span>

                                        <div>
                                            <h3 className="text-xl font-semibold tracking-tight">
                                                {principle.title}
                                            </h3>

                                            <p className="mt-3 max-w-xl text-base leading-7 text-[#999]">
                                                {principle.description}
                                            </p>
                                        </div>

                                        <Icon
                                            aria-hidden="true"
                                            className="mt-1 hidden h-5 w-5 text-orange-500 sm:block"
                                        />
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section
                    aria-labelledby="education-heading"
                    className="border-t border-white/10 px-6 py-16 sm:px-10 lg:py-24"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">
                                The foundation
                            </p>

                            <h2
                                id="education-heading"
                                className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em]"
                            >
                                Learning.
                                <br />
                                Building.
                                <br />
                                <span className="font-serif font-normal text-orange-500">
                                    Growing.
                                </span>
                            </h2>
                        </div>

                        <ol className="space-y-10 border-l border-white/15 pl-7 sm:pl-9">
                            {education.map((item) => (
                                <li key={item.title} className="relative">
                                    <span
                                        aria-hidden="true"
                                        className="absolute -left-[33px] top-1.5 h-2 w-2 rounded-full bg-orange-500 sm:-left-[41px]"
                                    />

                                    <p className="font-mono text-xs uppercase tracking-widest text-orange-500">
                                        {item.status}
                                    </p>

                                    <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-[#bbb]">
                                        {item.institution}
                                    </p>

                                    <p className="mt-4 max-w-xl text-base leading-7 text-[#999]">
                                        {item.description}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Technical skills */}
                <section
                    aria-labelledby="skills-heading"
                    className="border-y border-white/10 bg-[#080808] px-6 py-14 sm:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                            <h2
                                id="skills-heading"
                                className="text-3xl font-semibold tracking-[-0.04em]"
                            >
                                Tools I{" "}
                                <span className="font-serif font-normal text-orange-500">
                                    build with.
                                </span>
                            </h2>

                            <p className="text-sm text-[#999]">
                                Across interfaces, APIs, databases, and mobile.
                            </p>
                        </div>

                        <ul
                            aria-label="Technical skills"
                            className="mt-8 flex flex-wrap gap-x-1 gap-y-4 sm:gap-x-5"
                        >
                            {skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="border rounded-2xl px-3 bg-orange-500/10 py-2 border-orange-500/50 pb-2 text-sm text-[#bbb] sm:text-sm"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Closing invitation */}
                <section
                    aria-labelledby="about-cta"
                    className="px-6 py-16 sm:px-10 lg:py-24"
                >
                    <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
                        <div>
                            <h2
                                id="about-cta"
                                className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl"
                            >
                                Let the work{" "}
                                <span className="font-serif font-normal text-orange-500">
                                    speak.
                                </span>
                            </h2>

                            <p className="mt-4 max-w-lg text-base leading-7 text-[#999]">
                                Explore what I&apos;ve built, or get in touch to talk
                                about a project or opportunity.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-5">
                            <Link
                                href="/pages/projects"
                                className="group inline-flex min-h-12 items-center gap-4 rounded-full bg-orange-500 px-6 text-sm font-semibold text-black transition-colors hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                            >
                                Explore projects
                                <FiArrowRight
                                    aria-hidden="true"
                                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                />
                            </Link>

                            <Link
                                href="/pages/contact"
                                className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-[#ddd] transition-colors hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                            >
                                Get in touch
                                <FiArrowUpRight aria-hidden="true" className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}