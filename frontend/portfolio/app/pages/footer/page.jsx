import Link from "next/link";
import { FiArrowUp, FiArrowUpRight } from "react-icons/fi";

const navigation = [
    { label: "Home", href: "#home" },
    { label: "Technologies", href: "#technologies" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Our process", href: "#process" },
    { label: "Contact", href: "#contact" },
];

const services = [
    "Web Development",
    "Mobile Development",
    "UI/UX Engineering",
    "API & Backend",
];

export default function Footer() {
    return (
        <footer
            aria-label="Site footer"
            className="relative overflow-hidden border-t border-white/10 bg-[#080808] px-6 pb-32 pt-14 sm:px-10 sm:pt-16"
        >
            <div className="mx-auto max-w-7xl">
                {/* Closing call to action */}
                <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-center lg:pb-12">
                    <div>
                        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-orange-500">
                            Your next chapter
                        </p>

                        <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-bold leading-tight tracking-[-0.045em] text-[#ededed]">
                            Let&apos;s build{" "}
                            <span className="font-serif font-normal italic text-[#ccc]">
                                something great.
                            </span>
                        </h2>
                    </div>

                    <Link
                        href="#contact"
                        className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full border border-orange-500/50 px-6 text-sm font-semibold text-orange-500 transition-colors hover:bg-orange-500 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                    >
                        Start a conversation
                        <FiArrowUpRight
                            aria-hidden="true"
                            className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </Link>
                </div>

                {/* Footer columns */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-10 lg:grid-cols-[1.5fr_0.8fr_1fr] lg:gap-16 lg:py-14">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-1">
                        <Link
                            href="#home"
                            aria-label="Hoop home"
                            className="inline-block rounded-sm text-4xl font-extrabold tracking-[-0.07em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                        >
                            hoop<span className="text-orange-500">.</span>
                        </Link>

                        <p className="mt-4 max-w-[330px] text-sm leading-7 text-[#929292]">
                            Where logic meets creativity. Thoughtful design and
                            reliable development for your next digital project.
                        </p>

                        <p className="mt-5 font-mono text-xs leading-relaxed text-[#777]">
                            Based in Sri Lanka · Working worldwide
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav aria-label="Footer navigation">
                        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                            Explore
                        </h3>

                        <ul className="space-y-3">
                            {navigation.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="inline-block py-1 text-sm text-[#929292] transition-colors hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Services */}
                    <nav aria-label="Footer services">
                        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                            What we do
                        </h3>

                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <Link
                                        href="#capabilities"
                                        className="inline-block py-1 text-sm leading-relaxed text-[#929292] transition-colors hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Bottom strip */}
                <div className="flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-relaxed text-[#777]">
                        © {new Date().getFullYear()} Hoop. All rights reserved.
                    </p>

                    <Link
                        href="#home"
                        className="group inline-flex w-fit items-center gap-3 text-xs font-medium text-[#aaa] transition-colors hover:text-orange-500"
                    >
                        Back to top

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-orange-500/50">
                            <FiArrowUp aria-hidden="true" className="h-4 w-4" />
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}