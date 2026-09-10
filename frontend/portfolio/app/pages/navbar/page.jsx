"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Change this only if your homepage is served at another route.
const HOME_PATH = "/";
const homeSection = (id) => `${HOME_PATH}#${id}`;

const links = [
    { label: "Home", href: homeSection("home") },
    { label: "About", href: "/pages/about" },
    { label: "Portfolio", href: "/pages/projects" },
    { label: "Services", href: homeSection("capabilities") },
    { label: "Process", href: homeSection("process") },
    // These sections must exist on the homepage for their links to scroll.

];

const contactLink = { label: "Contact", href: homeSection("contact") };
const mobileLinks = [...links, contactLink];
const normalizePath = (path) => path.replace(/\/+$/, "") || "/";

function Logo({ className = "", onClick }) {
    return (
        <Link
            href={homeSection("home")}
            onClick={onClick}
            aria-label="Hoop home"
            className={`inline-block rounded-sm text-3xl font-extrabold tracking-[-0.07em] text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 ${className}`}
        >
            hoop<span className="text-white">.</span>
        </Link>
    );
}

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const mobileToggleRef = useRef(null);
    const headerRef = useRef(null);

    const isHomePage = normalizePath(pathname || "/") === normalizePath(HOME_PATH);

    useEffect(() => {
        if (!menuOpen) return;

        function closeOnOutsideClick(event) {
            if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
        }
        function closeOnEscape(event) {
            if (event.key === "Escape") {
                setMenuOpen(false);
                mobileToggleRef.current?.focus();
            }
        }
        function closeOnDesktop() {
            if (window.innerWidth >= 1024) setMenuOpen(false);
        }

        document.addEventListener("pointerdown", closeOnOutsideClick);
        document.addEventListener("keydown", closeOnEscape);
        window.addEventListener("resize", closeOnDesktop);
        return () => {
            document.removeEventListener("pointerdown", closeOnOutsideClick);
            document.removeEventListener("keydown", closeOnEscape);
            window.removeEventListener("resize", closeOnDesktop);
        };
    }, [menuOpen]);

    // Re-scroll to any homepage anchor, even when its hash is unchanged.
    function handleNavigationClick(event) {
        if (
            event.defaultPrevented ||
            event.button !== 0 ||
            event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
            (event.currentTarget.target && event.currentTarget.target !== "_self")
        ) return;

        closeMenu();
        const destination = new URL(event.currentTarget.href, window.location.href);

        // Let Next.js handle page changes and non-section links.
        if (
            !isHomePage ||
            destination.origin !== window.location.origin ||
            normalizePath(destination.pathname) !== normalizePath(HOME_PATH) ||
            destination.search !== window.location.search ||
            !destination.hash
        ) return;

        let sectionId;
        try {
            sectionId = decodeURIComponent(destination.hash.slice(1));
        } catch {
            return;
        }
        const section = document.getElementById(sectionId);
        if (!section) return;

        event.preventDefault();
        if (window.location.hash !== destination.hash) {
            window.history.pushState(
                window.history.state,
                "",
                `${destination.pathname}${destination.search}${destination.hash}`
            );
        }
        section.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "instant"
                : "smooth",
            block: "start",
        });
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    const contactClass = "inline-flex min-h-11 shrink-0 items-center justify-center rounded-[14px] px-4 py-2.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 bg-[#ed6008] text-white hover:bg-white hover:text-orange-500";

    return (
        <>
            <header ref={headerRef} className="absolute inset-x-0 top-0 z-40">
                <nav aria-label="Main navigation" className="mx-auto flex max-w-[1920px] items-center justify-between px-6 py-6 sm:px-10 lg:px-[4.5%]">
                    <Logo className="inline-flex" onClick={handleNavigationClick} />
                    <div className="flex items-center gap-5 sm:gap-7">

                        <Link href={contactLink.href} onClick={handleNavigationClick} className={contactClass}>
                            Get Started
                        </Link>
                        <button
                            ref={mobileToggleRef}
                            type="button"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                            onClick={() => setMenuOpen((open) => !open)}
                            className="flex h-11 w-11 items-center justify-center rounded-lg bg-black/20 text-white lg:hidden"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                                <path d={menuOpen ? "M6 6l12 12M6 18 18 6" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </nav>
                <nav id="mobile-menu" aria-label="Mobile navigation" hidden={!menuOpen} className="mx-4 max-h-[65svh] overflow-y-auto rounded-2xl border border-white/10 bg-[#292b2c]/95 p-4 shadow-xl backdrop-blur-xl lg:hidden">
                    {mobileLinks.map(({ label, href }) => (
                        <Link key={label} href={href} onClick={
                            handleNavigationClick
                        }
                            className="block rounded-lg px-4 py-3 font-medium text-white transition-colors hover:bg-white/5 hover:text-orange-500"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </header>

            <div className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-6 lg:inset-x-[2.5%] lg:bottom-5">
                <nav aria-label="Quick navigation" className="flex min-h-[76px] items-center justify-between gap-3 rounded-[15px] bg-white/20 px-3 py-2.5 backdrop-blur-xl sm:px-5 lg:min-h-[60px]">
                    <Logo className="mr-2 hidden sm:inline-flex" onClick={handleNavigationClick} />
                    <div className="ml-auto flex items-center gap-6 xl:gap-8">
                        <ul className="hidden items-center gap-8 lg:flex xl:gap-12">
                            {links.map(({ label, href }) => (
                                <li key={label}>
                                    <Link href={href} onClick={handleNavigationClick}
                                        className="inline-flex min-h-11 items-center text-base font-medium tracking-wide text-white transition-colors hover:text-orange-500"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link href={contactLink.href} onClick={handleNavigationClick} className={`${contactClass} sm:min-h-14 sm:px-5 lg:min-h-[50px]`}>
                            Contact Us
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}
