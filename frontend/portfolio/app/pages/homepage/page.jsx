"use client";
import Link from "next/link";

import { useId, useState } from "react";

import {
    FiArrowUpRight,
    FiMapPin,
    FiPhone,
    FiFigma,
    FiHeadphones,
    FiTerminal,
    FiPlus,
    FiMinus,
} from "react-icons/fi";

import {
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiExpress,
    SiFlutter,
    SiNextdotjs,
    SiPython,
    SiJavascript,
    SiMongodb,
    SiMysql,
} from "react-icons/si";

import { HiOutlineRocketLaunch } from "react-icons/hi2";

const steps = [

    {
        title: "Design",
        icon: FiFigma,
        description:
            "We create wireframes and detailed prototypes, shaping an experience that looks great and feels intuitive.",
    },
    {
        title: "Develop",
        icon: FiTerminal,
        description:
            "We bring the designs to life with clean, tested code and the right technologies for your product.",
    },
    {
        title: "Deploy",
        icon: HiOutlineRocketLaunch,
        description:
            "We prepare your product for launch, check the details, and get everything running in its live environment.",
    },
    {
        title: "Support",
        icon: FiHeadphones,
        description:
            "After launch, we help maintain your product, resolve issues, and improve features as your needs evolve.",
    },
];

const services = [
    {
        id: "web",
        number: "01",
        title: "Web Development",
        description:
            "Websites and web applications built around your business, with responsive interfaces and reliable functionality.",
        features: [
            "Business websites",
            "SaaS platforms",
            "Admin dashboards",
            "E-commerce experiences",
        ],
        technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    },
    {
        id: "mobile",
        number: "02",
        title: "Mobile Development",
        description:
            "Mobile experiences that make everyday tasks easier, combining intuitive interfaces with dependable performance.",
        features: [
            "Cross-platform applications",
            "Responsive mobile interfaces",
            "API integration",
            "App maintenance",
        ],
        technologies: ["Flutter", "Dart"],
    },
    {
        id: "design",
        number: "03",
        title: "UI/UX Engineering",
        description:
            "Thoughtful digital interfaces that bring your brand to life and help users move naturally through your product.",
        features: [
            "Website & app design",
            "Interactive prototypes",
            "Design systems",
            "Responsive experiences",
        ],
        technologies: ["Figma", "Tailwind CSS", "CSS"],
    },
    {
        id: "backend",
        number: "04",
        title: "API & Backend",
        description:
            "The systems behind your product, connecting interfaces, managing data, and supporting your business workflows.",
        features: [
            "REST API development",
            "Authentication & authorization",
            "Database integration",
            "Third-party integrations",
        ],
        technologies: ["Node.js", "Express.js", "Python", "MongoDB", "MySQL"],
    },
];

const technologyRows = [
    [
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Express.js", icon: SiExpress },

    ],
    [
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },

        { name: "Flutter", icon: SiFlutter },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Python", icon: SiPython },

    ],
];

const featuredProjects = [
    {
        id: "hoop",
        number: "01",
        title: "Hoop",
        category: "Full-stack application",
        description:
            "An AI-powered platform for discovering business leads and managing outreach.",
        image: "/images/projects/hoop.png",
        technologies: ["Next.js", "Node.js", "MongoDB", "Python"],
    },
    {
        id: "tourism",
        number: "02",
        title: "NM Lanka Tour Takers",
        category: "Tourism website",
        description:
            "A travel website showcasing Sri Lankan destinations and tourism services.",
        image: "/images/projects/tourism.png",
        technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    },
    {
        id: "passenger",
        number: "03",
        title: "Passenger",
        category: "Mobile application",
        description:
            "A Flutter application with account registration, login, and a mobile home interface.",
        image: "/images/projects/passenger.png",
        technologies: ["Flutter", "Dart"],
    },
];

function TechnologyCard({ name, icon: Icon }) {
    return (
        <li className="group flex shrink-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#090909] px-10 py-3 transition-colors duration-300 hover:border-orange-500/40 hover:bg-orange-500/[0.04]">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-orange-500/15 bg-[#080a0b] text-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.06)] transition-colors group-hover:border-orange-500/40">
                <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
            </span>

            <span className="whitespace-nowrap text-sm font-medium text-[#b8bec5] transition-colors group-hover:text-white">
                {name}
            </span>
        </li>
    );
}

const serviceOptions = [
    ...services.map(({ id, title }) => ({ value: id, label: title })),
    { value: "unsure", label: "Not sure yet" },
];

const inputClass =
    "w-full rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-4 text-base text-white placeholder:text-[#606060] outline-none transition-colors focus:border-orange-500 focus:ring-0 disabled:opacity-50";

function StepHeading({ number, title, description = "" }) {
    return (
        <div className="mb-7 flex items-start gap-4">
            <span className="mt-1 font-mono text-xs text-orange-500">
                {number}
            </span>

            <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#eee]">
                    {title}
                </h3>

                {description && (
                    <p className="mt-2 text-sm leading-relaxed text-[#999]">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}

/**
 * @param {{
 *   phone?: string,
 *   onSubmit?: (values: Record<string, FormDataEntryValue>) => Promise<void> | void
 * }} props
 */
export default function HeroSection({ phone = "", onSubmit } = {}) {
    const [activeService, setActiveService] = useState("web");
    const accordionId = useId();

    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState("");

    const isSubmitting = status === "submitting";
    const canSubmit = typeof onSubmit === "function";

    async function handleSubmit(event) {
        event.preventDefault();

        if (!canSubmit || isSubmitting) return;

        const form = event.currentTarget;
        const values = Object.fromEntries(new FormData(form).entries());

        setStatus("submitting");
        setMessage("");

        try {
            // The supplied handler must throw if the request fails.
            await onSubmit(values);

            form.reset();
            setStatus("success");
            setMessage("Thanks! Your message has been sent.");
        } catch {
            setStatus("error");
            setMessage("Your message couldn’t be sent. Please try again.");
        }
    }

    function toggleService(id) {
        setActiveService((current) => (current === id ? null : id));
    }

    return (
        <>
            <section
                id="home"
                aria-labelledby="hero-heading"
                className="relative isolate flex min-h-[100svh] border-b border-white/30 w-full items-end justify-center overflow-hidden bg-[#535658] px-6 pb-[170px] pt-40 sm:pb-[180px]"
            >
                {/* Background image */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/hero.png')",
                    }}
                />

                {/* Light at the top, dark at the bottom */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10"
                    style={{
                        background: `linear-gradient(
                            180deg,
                            rgba(0, 0, 0, 0.40) 0%,
                            rgba(165, 165, 165, 0.05) 30%,
                            rgba(60, 65, 68, 0.20) 60%,
                            rgba(0, 0, 0, 0.50) 100%
                            )`,
                    }}
                />

                <div className="hero-content mx-auto w-full max-w-7xl text-left">
                    <div className="main-heading">
                        <h1
                            id="hero-heading"
                            className="text-[clamp(3rem,6vw,5.1rem)] font-bold leading-none tracking-normal text-white"
                        >
                            <span className="block">Where Logic</span>
                            <span className="block">Meets </span>
                            <span className="font-serif text-orange-500">Creativity</span>
                        </h1>
                        <p className="mt-4 w-full max-w-[620px] text-lg text-white/50">
                            We design and ship production-grade platforms that help teams launch faster, automate operations, and scale with confidence.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="#contact"
                            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-[14px] border border-[#ed6008] px-5 text-sm text-[#ed6008] transition-colors hover:bg-[#fff] hover:text-orange-500 sm:min-h-14 sm:px-20 lg:min-h-[50px]"
                        >
                            Start Now
                        </Link>

                        <Link
                            href="/pages/projects"
                            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-[14px] bg-[#ed6008] px-10 text-sm text-white transition-colors hover:bg-[#fff] hover:text-orange-500 sm:min-h-14 sm:px-10 lg:min-h-[50px]"
                        >
                            Projects
                        </Link>
                    </div>
                </div>
            </section>

            <section
                id="technologies"
                aria-labelledby="technologies-heading"
                className="overflow-hidden border-b border-white/30 bg-[#030303] py-14 sm:py-16 lg:py-40"
            >
                {/* Heading */}
                <div className="mx-auto max-w-7xl px-6 text-left">
                    <div className="mb-6 flex items-center justify-start gap-4">
                        <span className="font-mono text-xs font-semibold text-orange-500">
                            01
                        </span>

                        <span
                            aria-hidden="true"
                            className="h-px w-10 bg-white/15"
                        />

                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#80858c]">
                            Tech Stacks
                        </span>
                    </div>

                    <h2
                        id="technologies-heading"
                        className="text-[clamp(2rem,4vw,3.25rem)] max-w-xl leading-[1.15] tracking-[-0.045em] text-[#e5e5e5]"
                    >
                        <span className="font-bold">The tools behind your </span>
                        <span className="font-serif font-normal tracking-[-0.055em] text-orange-500">
                            next big idea
                        </span>
                    </h2>

                    <p className="mt-5 max-w-5xl text-left text-base leading-relaxed text-[#858990] sm:text-lg">
                        We use modern frameworks and reliable technologies to build fast websites,
                        intuitive apps, and dependable backends—choosing the right tools for your
                        project’s goals.
                    </p>

                    <div
                        aria-hidden="true"
                        className="mt-9 h-px w-20 bg-orange-500/60"
                    />
                </div>

                {/* Horizontally scrollable technology rows */}
                <div
                    className="mx-auto mt-10 max-w-6xl space-y-4 sm:mt-11"
                    style={{
                        maskImage:
                            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                    }}
                >
                    {technologyRows.map((technologies, index) => (
                        <div
                            key={index}
                            role="region"
                            aria-label={`Technology row ${index + 1}`}
                            tabIndex={0}
                            className="overflow-x-auto overscroll-x-contain px-6 py-1 [scrollbar-width:none] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-orange-500 sm:px-12 [&::-webkit-scrollbar]:hidden"
                        >
                            <ul className="mx-auto flex w-max items-center gap-4">
                                {technologies.map((technology) => (
                                    <TechnologyCard
                                        key={technology.name}
                                        {...technology}
                                    />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section
                id="capabilities"
                aria-labelledby="capabilities-heading"
                className="bg-[#030303] px-6 border-b border-white/30 py-16 sm:px-10 sm:py-24 lg:py-36"
            >
                <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                    {/* Left: section introduction */}
                    <div>
                        <div className="mb-7 flex items-center gap-4">
                            <span className="font-mono text-xs font-semibold text-orange-500">
                                02
                            </span>

                            <span
                                aria-hidden="true"
                                className="h-px w-10 bg-white/15"
                            />

                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#808080]">
                                Capabilities
                            </span>
                        </div>

                        <h2
                            id="capabilities-heading"
                            className="max-w-lg text-[clamp(2.5rem,4.5vw,4rem)] font-bold leading-[1.06] tracking-[-0.05em] text-[#ededed]"
                        >
                            What we can
                            <br />
                            build{" "}
                            <span className="font-serif font-normal text-orange-500">
                                together.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[390px] text-base leading-relaxed text-[#929292]">
                            From the first sketch to the final release, we connect design
                            and development to create digital experiences around your
                            goals.
                        </p>

                        <div
                            aria-hidden="true"
                            className="mt-9 h-px w-20 bg-orange-500/60"
                        />
                    </div>

                    {/* Right: service accordion */}
                    <div className="min-w-0">
                        <div className="border-t border-white/15">
                            {services.map((service) => {
                                const isOpen = activeService === service.id;
                                const triggerId = `${accordionId}-${service.id}-trigger`;
                                const panelId = `${accordionId}-${service.id}-panel`;

                                return (
                                    <article
                                        key={service.id}
                                        className={`border-b transition-colors duration-300 ${isOpen
                                            ? "border-orange-500/40"
                                            : "border-white/15"
                                            }`}
                                    >
                                        <h3>
                                            <button
                                                id={triggerId}
                                                type="button"
                                                aria-expanded={isOpen}
                                                aria-controls={panelId}
                                                onClick={() => toggleService(service.id)}
                                                className="group flex w-full items-center gap-4 py-7 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 sm:gap-5 sm:py-8"
                                            >
                                                <span
                                                    className={`shrink-0 font-mono text-xs transition-colors ${isOpen
                                                        ? "text-orange-500"
                                                        : "text-[#666] group-hover:text-orange-500"
                                                        }`}
                                                >
                                                    {service.number}
                                                </span>

                                                <span
                                                    className={`min-w-0 flex-1 text-xl font-semibold tracking-[-0.035em] transition-colors sm:text-2xl xl:text-3xl ${isOpen
                                                        ? "text-orange-500"
                                                        : "text-[#dedede] group-hover:text-white"
                                                        }`}
                                                >
                                                    {service.title}
                                                </span>

                                                <span
                                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${isOpen
                                                        ? "border-orange-500/40 bg-orange-500/10 text-orange-500"
                                                        : "border-white/15 text-[#999] group-hover:border-orange-500/40 group-hover:text-orange-500"
                                                        }`}
                                                >
                                                    {isOpen ? (
                                                        <FiMinus aria-hidden="true" className="h-4 w-4" />
                                                    ) : (
                                                        <FiPlus aria-hidden="true" className="h-4 w-4" />
                                                    )}
                                                </span>
                                            </button>
                                        </h3>

                                        <div
                                            id={panelId}
                                            role="region"
                                            aria-labelledby={triggerId}
                                            hidden={!isOpen}
                                            className="pb-8 pl-8 sm:pl-9"
                                        >
                                            <p className="max-w-xl text-base leading-relaxed text-[#999]">
                                                {service.description}
                                            </p>

                                            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                                                {service.features.map((feature) => (
                                                    <li
                                                        key={feature}
                                                        className="flex items-start gap-3 text-sm leading-relaxed text-[#b0b0b0]"
                                                    >
                                                        <span
                                                            aria-hidden="true"
                                                            className="mt-2.5 h-px w-3 shrink-0 bg-orange-500"
                                                        />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2">

                                                {service.technologies.map((technology, index) => (
                                                    <span
                                                        key={technology}
                                                        className="inline-flex border rounded-2xl px-2 py-1 border-orange-500 items-center gap-3 text-xs text-orange-500"
                                                    >
                                                        {index > 0 && (
                                                            <span
                                                                aria-hidden="true"
                                                                className="h-1 w-1 rounded-full bg-white/20"
                                                            />
                                                        )}

                                                        {technology}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        <Link
                            href="#contact"
                            className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                        >
                            Discuss your project
                            <FiArrowUpRight
                                aria-hidden="true"
                                className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </Link>
                    </div>
                </div>
            </section>


            <section
                id="work"
                aria-labelledby="featured-projects-heading"
                className="overflow-hidden border-b border-white/30 bg-[#080808] px-6 py-16 sm:px-10 sm:py-24 lg:py-32"
            >
                <div className="mx-auto max-w-7xl">
                    {/* Section introduction */}
                    <div className="mb-10 flex flex-col justify-between gap-6 lg:mb-14 lg:flex-row lg:items-end lg:gap-12">
                        <div>
                            <div className="mb-6 flex items-center gap-4">
                                <span className="font-mono text-xs font-semibold text-orange-500">
                                    03
                                </span>

                                <span
                                    aria-hidden="true"
                                    className="h-px w-10 bg-white/15"
                                />

                                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888]">
                                    Selected work
                                </span>
                            </div>

                            <h2
                                id="featured-projects-heading"
                                className="text-[clamp(2.25rem,4vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.05em] text-[#ededed]"
                            >
                                A few ideas,
                                <br />
                                <span className="font-serif font-normal text-orange-500">
                                    brought to life.
                                </span>
                            </h2>
                        </div>

                        <p className="max-w-sm text-base leading-7 text-[#999]">
                            A selection of websites and applications I&apos;ve built,
                            combining thoughtful interfaces with practical functionality.
                        </p>
                    </div>

                    {/* Three project cards */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {featuredProjects.map((project) => (
                            <article
                                key={project.id}
                                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] transition-colors duration-300 hover:border-orange-500/40"
                            >
                                {/* Project screenshot */}
                                <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-[#151515]">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} project preview`}
                                        width={800}
                                        height={600}
                                        loading="lazy"
                                        className="h-full w-full object-contain p-4 transition-transform duration-500 motion-safe:group-hover:scale-[1.04]"
                                    />

                                    <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/80 px-3 py-1.5 font-mono text-xs text-orange-500 backdrop-blur-sm">
                                        {project.number}
                                    </span>
                                </div>

                                {/* Project details */}
                                <div className="flex flex-1 flex-col p-6">
                                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-orange-500">
                                        {project.category}
                                    </p>

                                    <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#ededed]">
                                        {project.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#999]">
                                        {project.description}
                                    </p>

                                    <ul
                                        aria-label={`${project.title} technologies`}
                                        className="mt-auto flex flex-wrap gap-2 pt-6"
                                    >
                                        {project.technologies.map((technology) => (
                                            <li
                                                key={technology}
                                                className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#aaa]"
                                            >
                                                {technology}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* See all projects */}
                    <div className="mt-10 flex justify-center sm:mt-12">
                        <Link
                            href="/pages/projects"
                            className="group inline-flex min-h-13 items-center justify-center gap-5 rounded-full border border-orange-500/50 px-8 py-3.5 text-sm font-semibold text-orange-500 transition-colors hover:bg-orange-500 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                        >
                            See all projects

                            <FiArrowUpRight
                                aria-hidden="true"
                                className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            <section
                id="process"
                aria-labelledby="process-heading"
                className="overflow-hidden border-b border-white/30 bg-[#080808] px-6 py-16 sm:px-10 sm:py-20 lg:py-28"
            >
                <div className="mx-auto max-w-7xl">
                    {/* Section heading */}
                    <div className="max-w-2xl text-left flex flex-col items-start justify-start gap-4 sm:gap-6 lg:max-w-3xl">
                        <div className="mb-6 flex items-center justify-center gap-4">
                            <span className="font-mono text-xs font-semibold text-orange-500">
                                04
                            </span>

                            <span
                                aria-hidden="true"
                                className="h-px w-10 bg-white/15"
                            />

                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#808080]">
                                BUILDING WITH HOOP
                            </span>
                        </div>

                        <h2
                            id="process-heading"
                            className="text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.15] tracking-[-0.045em] text-[#e5e5e5]"
                        >
                            <span className="font-bold">From what if to </span>
                            <span className="font-serif font-normal text-orange-500">
                                what’s next.
                            </span>
                        </h2>

                        <p className="mt-5 w-full text-base leading-relaxed text-[#929292] sm:text-lg">
                            Bring the idea. We’ll help shape it, build it, and get it into people’s hands—with clear
                            communication along the way.
                        </p>

                        <div
                            aria-hidden="true"
                            className="mt-1 h-px w-20 bg-orange-500/60"
                        />
                    </div>

                    {/* Process timeline */}
                    <ol className="relative mt-12 grid grid-cols-1 gap-0 lg:mt-14 lg:grid-cols-4">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isLast = index === steps.length - 1;

                            return (
                                <li
                                    key={step.title}
                                    className="group relative grid grid-cols-[64px_1fr] gap-x-6 pb-10 last:pb-0 lg:flex lg:flex-col lg:items-center lg:px-3 lg:pb-0 lg:text-center xl:px-5"
                                >
                                    {/* Connector: vertical on mobile, horizontal on desktop */}
                                    {!isLast && (
                                        <span
                                            aria-hidden="true"
                                            className="absolute bottom-0 left-8 top-16 w-px bg-white/10 lg:bottom-auto lg:left-1/2 lg:top-[34px] lg:h-px lg:w-full"
                                        />
                                    )}

                                    {/* Icon and step number */}
                                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/70 bg-[#080808] transition-colors duration-300 group-hover:border-orange-500 lg:h-[68px] lg:w-[68px]">
                                        <Icon
                                            aria-hidden="true"
                                            className="h-6 w-6 text-orange-500"
                                        />

                                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-[#080808] font-mono text-[10px] font-semibold text-orange-500">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    {/* Step content */}
                                    <div className="pt-1 lg:mt-5 lg:pt-0">
                                        <h3 className="text-base font-semibold tracking-tight text-[#eeeeee]">
                                            {step.title}
                                        </h3>

                                        <p className="mt-2 max-w-md text-sm leading-[1.7] text-[#929292] lg:mx-auto lg:max-w-[220px]">
                                            {step.description}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </section>



            <section
                id="contact"
                aria-labelledby="contact-heading"
                className="relative isolate border-b  border-b-white/30 overflow-hidden bg-[#030303] text-[#ededed] px-6 pb-20 pt-36 sm:px-10 lg:pb-28 lg:pt-44"
            >
                {/* Subtle background lighting */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10"
                    style={{
                        background:
                            "radial-gradient(ellipse at 90% 0%, rgba(249,115,22,0.09), transparent 45%)",
                    }}
                />

                <div className="mx-auto max-w-7xl">
                    {/* Page introduction */}
                    <header className="border-b border-white/15 pb-12 lg:pb-16">
                        <div className="mb-8 flex items-center gap-4">
                            <span className="h-px w-10 bg-orange-500" />

                            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#999]">
                                Let&apos;s work together
                            </p>
                        </div>

                        <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
                            <h2
                                id="contact-heading"
                                className="text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.98] tracking-[-0.06em]"
                            >
                                Big idea?
                                <br />
                                <span className="font-serif font-normal text-orange-500">
                                    Let&apos;s talk.
                                </span>
                            </h2>

                            <div className="max-w-sm lg:pb-2">
                                <p className="text-base leading-relaxed text-[#aaa] sm:text-lg">
                                    A fresh concept, a website that needs work, or an app
                                    ready for its next chapter. Tell us what you have
                                    in mind.
                                </p>

                                <div className="mt-6 flex items-center gap-2 text-sm text-[#888]">
                                    <FiMapPin
                                        aria-hidden="true"
                                        className="shrink-0 text-orange-500"
                                    />
                                    <span>Sri Lanka · Working worldwide</span>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Brief and form */}
                    <div className="grid items-start gap-12 pt-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:pt-16">
                        <aside>
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">
                                The first step
                            </p>

                            <h3 className="mt-4 max-w-xs text-3xl font-semibold leading-tight tracking-[-0.04em]">
                                Every build starts
                                <br />
                                with a conversation.
                            </h3>

                            <p className="mt-5 max-w-xs text-sm leading-7 text-[#999]">
                                You don&apos;t need a finished brief. Share what you
                                know, and we&apos;ll work through the details together.
                            </p>

                            <div className="mt-8 border-l border-orange-500/40 pl-5">
                                <h3 className="text-sm font-medium text-[#ddd]">
                                    From here
                                </h3>

                                <p className="mt-2 max-w-xs text-sm leading-7 text-[#888]">
                                    We review your idea, arrange a conversation, and
                                    outline a proposal around your needs.
                                </p>
                            </div>

                            {phone && (
                                <a
                                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                                    className="mt-8 inline-flex items-center gap-3 text-sm text-[#bbb] transition-colors hover:text-orange-500"
                                >
                                    <FiPhone
                                        aria-hidden="true"
                                        className="text-orange-500"
                                    />
                                    {phone}
                                </a>
                            )}
                        </aside>

                        <form
                            onSubmit={handleSubmit}
                            aria-label="Project inquiry"
                            aria-busy={isSubmitting}
                            className="min-w-0"
                        >
                            <fieldset
                                disabled={isSubmitting}
                                className="min-w-0 space-y-10 sm:space-y-12"
                            >
                                <legend className="sr-only">Your project details</legend>

                                {/* 01: Service selection */}
                                <fieldset className="min-w-0">
                                    <legend className="mb-3 flex items-center gap-4">
                                        <span className="font-mono text-xs text-orange-500">
                                            01
                                        </span>

                                        <span className="text-xl font-semibold tracking-tight text-[#eee]">
                                            What can we help with?
                                        </span>
                                    </legend>

                                    <p className="mb-6 text-sm text-[#999]">
                                        Choose the closest fit. You can leave this open.
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        {serviceOptions.map(({ value, label }) => (
                                            <label key={value} className="relative">
                                                <input
                                                    type="radio"
                                                    name="service"
                                                    value={value}
                                                    className="peer sr-only"
                                                />

                                                <span className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm text-[#aaa] transition-colors hover:border-orange-500/60 hover:text-white peer-checked:border-orange-500 peer-checked:bg-orange-500 peer-checked:text-black peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-orange-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                                                    {label}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </fieldset>

                                {/* 02: Contact details */}
                                <div>
                                    <StepHeading
                                        number="02"
                                        title="A little about you"
                                    />

                                    <div className="grid gap-7 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="contact-name"
                                                className="text-sm text-[#aaa]"
                                            >
                                                Your name{" "}
                                                <span className="text-orange-500">*</span>
                                            </label>

                                            <input
                                                id="contact-name"
                                                name="name"
                                                type="text"
                                                autoComplete="name"
                                                required
                                                maxLength={100}
                                                placeholder="Full name"
                                                className={inputClass}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="contact-email"
                                                className="text-sm text-[#aaa]"
                                            >
                                                Email address{" "}
                                                <span className="text-orange-500">*</span>
                                            </label>

                                            <input
                                                id="contact-email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                maxLength={254}
                                                placeholder="you@company.com"
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 03: Project details */}
                                <div>
                                    <StepHeading
                                        number="03"
                                        title="Tell us about the idea"
                                        description="Your goals, timeline, and any details you already have."
                                    />

                                    <div className="space-y-7">
                                        <div>
                                            <label
                                                htmlFor="contact-engagement"
                                                className="text-sm text-[#aaa]"
                                            >
                                                Where are you starting?{" "}
                                                <span className="text-orange-500">*</span>
                                            </label>

                                            <select
                                                id="contact-engagement"
                                                name="engagement"
                                                required
                                                defaultValue=""
                                                className={`${inputClass} [color-scheme:dark] [&>option]:bg-[#111]`}
                                            >
                                                <option value="" disabled>
                                                    Select an option
                                                </option>
                                                <option value="new-project">
                                                    I have a new project in mind
                                                </option>
                                                <option value="existing-project">
                                                    I want to improve an existing product
                                                </option>
                                                <option value="ongoing-support">
                                                    I need ongoing support
                                                </option>
                                                <option value="discuss">
                                                    I’d like to explore the possibilities
                                                </option>
                                            </select>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="contact-message"
                                                className="text-sm text-[#aaa]"
                                            >
                                                Your project{" "}
                                                <span className="text-orange-500">*</span>
                                            </label>

                                            <textarea
                                                id="contact-message"
                                                name="message"
                                                required
                                                rows={4}
                                                maxLength={5000}
                                                placeholder="I’m looking to build..."
                                                className={`${inputClass} min-h-32 resize-y`}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Submit */}
                                <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                                    <p className="text-xs text-[#888]">
                                        Fields marked{" "}
                                        <span className="text-orange-500">*</span>{" "}
                                        are required.
                                    </p>

                                    <button
                                        type="submit"
                                        disabled={!canSubmit || isSubmitting}
                                        className="group inline-flex min-h-14 w-full items-center justify-between gap-8 rounded-full bg-orange-500 px-7 text-sm font-semibold text-black transition-colors hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
                                    >
                                        {isSubmitting ? "Sending..." : "Let’s make it happen"}

                                        <FiArrowUpRight
                                            aria-hidden="true"
                                            className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    </button>
                                </div>
                            </fieldset>

                            <p
                                role="status"
                                aria-live="polite"
                                className={`mt-5 text-sm ${status === "error" ? "text-red-400" : "text-[#bbb]"
                                    }`}
                            >
                                {message}
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}