import Link from "next/link";

const footerColumns = [
  {
    title: "For Job Seekers",
    links: [
      { label: "Find Jobs", href: "/jobs" },
      { label: "Browse Categories", href: "/jobs" },
      { label: "CV Maker", href: "/cv-maker" },
      { label: "Telegram Alerts", href: "https://t.me" },
    ],
  },
  {
    title: "For Employers",
    links: [
      { label: "Post a Job", href: "/post-job" },
      { label: "Find Candidates", href: "/post-job" },
      { label: "Pricing", href: "/pricing" },
      { label: "Support", href: "/contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Addis Ababa, Ethiopia", href: "/contact" },
      { label: "beleqet.com", href: "https://beleqet.com" },
      { label: "Telegram Channel", href: "https://t.me" },
      { label: "Support Center", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-page py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2 font-extrabold text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brandGreen text-white text-sm">
              B
            </span>
            Beleqet Job
          </Link>
          <p className="mt-4 text-sm text-white/60 max-w-xs">
            Beleqet helps job seekers discover opportunities and employers connect with the right talent across Ethiopia.
          </p>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-white/90 mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Beleqet Vacancy Platform. All rights reserved.</p>
          <p>Built for fast job discovery.</p>
        </div>
      </div>
    </footer>
  );
}
