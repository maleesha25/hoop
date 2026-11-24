import Link from "next/link";
import { FiArrowUp, FiArrowUpRight } from "react-icons/fi";

const homeHref = "/#home";
const servicesHref = "/#capabilities";
const contactHref = "/#contact";

const navigation = [
  { label: "Home", href: homeHref },
  { label: "About", href: "/pages/about" },
  { label: "Portfolio", href: "/pages/projects" },
  { label: "Services", href: servicesHref },
  { label: "Process", href: "/#process" },
];

const services = [
  "Web Development",
  "Mobile Development",
  "UI/UX Engineering",
  "API & Backend",
];

const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500";

const linkClass = `inline-flex min-h-11 items-center rounded-sm text-sm font-medium tracking-wide text-white transition-colors hover:text-orange-500 ${focusClass}`;

const headingClass =
  "mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60";

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="border-t border-white/10 bg-[#080808] text-white"
    >
      <div className="mx-auto max-w-[1920px] px-6 pb-32 pt-14 sm:px-10 sm:pt-16 lg:px-[4.5%]">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-center lg:pb-12">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-orange-500">
              Your next chapter
            </p>
            <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-bold leading-tight tracking-[-0.045em]">
              Let&apos;s build{" "}
              <span className="font-serif font-normal italic text-[#ccc]">
                something great.
              </span>
            </h2>
          </div>

          <Link
            href={contactHref}
            className={`group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-[14px] bg-[#ed6008] px-4 py-2.5 text-sm text-white transition-colors hover:bg-white hover:text-orange-500 sm:px-5 lg:min-h-[50px] ${focusClass}`}
          >
            Get Started
            <FiArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-10 lg:grid-cols-[1.5fr_0.8fr_1fr] lg:gap-16 lg:py-14">
          <div className="col-span-2 lg:col-span-1">
            <Link
              href={homeHref}
              aria-label="Hoop home"
              className={`inline-block rounded-sm text-3xl font-extrabold tracking-[-0.07em] text-orange-500 ${focusClass}`}
            >
              hoop<span className="text-white">.</span>
            </Link>

            <p className="mt-4 max-w-[330px] text-sm leading-7 text-[#aaa]">
              Where logic meets creativity. Thoughtful design and reliable
              development for your next digital project.
            </p>
            <p className="mt-5 font-mono text-xs leading-relaxed text-[#999]">
              Based in Sri Lanka · Working worldwide
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className={headingClass}>Explore</h3>
            <ul>
              {navigation.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h3 className={headingClass}>What we do</h3>
            <ul>
              {services.map((service) => (
                <li key={service}>
                  <Link href={servicesHref} className={linkClass}>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-[#999]">
            © {new Date().getFullYear()} Hoop. All rights reserved.
          </p>

          <a href="#top" className={`${linkClass} group w-fit gap-3`}>
            Back to top
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-white/15">
              <FiArrowUp aria-hidden="true" className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
