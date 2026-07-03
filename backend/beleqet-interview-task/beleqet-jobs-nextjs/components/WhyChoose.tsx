import { ShieldCheck, Zap, BellRing, Send, Smartphone } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Platform",
    desc: "All jobs are verified for your security.",
  },
  {
    icon: Zap,
    title: "Fast & Easy",
    desc: "Search and apply in just a few clicks.",
  },
  {
    icon: BellRing,
    title: "Real-time Updates",
    desc: "Get instant alerts every step.",
  },
  {
    icon: Send,
    title: "Telegram Alerts",
    desc: "Get instant job alerts on Telegram.",
  },
];

export default function WhyChoose() {
  return (
    <section className="container-page py-14">
      <h2 className="text-sectionH2 mb-8">Why Choose Beleqet?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-border bg-white p-5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brandGreen/10 text-brandGreen mb-3">
              <f.icon className="h-4.5 w-4.5" />
            </span>
            <h3 className="text-sm font-semibold text-ink">{f.title}</h3>
            <p className="text-xs text-muted mt-1">{f.desc}</p>
          </div>
        ))}

        <div className="rounded-xl bg-primary text-white p-5 flex flex-col justify-between">
          <div>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 mb-3">
              <Smartphone className="h-4.5 w-4.5" />
            </span>
            <h3 className="text-sm font-semibold">Search on the go!</h3>
            <p className="text-xs text-white/60 mt-1">Access thousands of jobs anytime, anywhere.</p>
          </div>
          <div className="flex flex-col gap-1.5 mt-4 text-[11px]">
            <span className="rounded-md bg-white/10 px-2.5 py-1.5 text-center">▶ Google Play</span>
            <span className="rounded-md bg-white/10 px-2.5 py-1.5 text-center"> App Store</span>
          </div>
        </div>
      </div>
    </section>
  );
}
