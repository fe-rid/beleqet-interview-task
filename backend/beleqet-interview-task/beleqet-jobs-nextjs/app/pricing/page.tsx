import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    desc: "Post a single job listing",
    features: ["1 job listing", "30 days visibility", "Standard placement"],
  },
  {
    name: "Featured",
    price: "ETB 1,500",
    desc: "Get priority placement and more reach",
    features: ["5 job listings", "60 days visibility", "Featured badge", "Telegram channel boost"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For high-volume hiring teams",
    features: ["Unlimited listings", "Dedicated account manager", "Employer branding page", "API access"],
  },
];

export const metadata = { title: "Pricing | Beleqet Jobs" };

export default function PricingPage() {
  return (
    <div className="container-page py-16">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-pageH1">Simple pricing for employers</h1>
        <p className="text-muted mt-3">Choose a plan that fits your hiring needs and start reaching qualified candidates today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-7 flex flex-col ${
              plan.highlight ? "border-brandGreen bg-brandGreen text-white shadow-cardHover" : "border-border bg-white"
            }`}
          >
            <h3 className={`text-sm font-semibold ${plan.highlight ? "text-white/80" : "text-muted"}`}>{plan.name}</h3>
            <p className="text-3xl font-extrabold mt-2">{plan.price}</p>
            <p className={`text-sm mt-2 ${plan.highlight ? "text-white/70" : "text-muted"}`}>{plan.desc}</p>

            <ul className="mt-6 space-y-2.5 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className={`h-4 w-4 shrink-0 ${plan.highlight ? "text-white" : "text-brandGreen"}`} />
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={`mt-7 w-full rounded-full py-3 text-sm font-semibold transition-colors ${
                plan.highlight ? "bg-white text-brandGreen hover:bg-white/90" : "bg-brandGreen text-white hover:bg-darkGreen"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
