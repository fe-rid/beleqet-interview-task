import { Send } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="container-page pb-14">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-darkGreen text-white px-6 py-10 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cyanAccent/20 text-cyanAccent shrink-0">
            <Send className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-bold">Never Miss an Opportunity</h3>
            <p className="text-sm text-white/70 mt-0.5">
              Join the Beleqet Telegram channel and get instant job alerts delivered directly to your phone.
            </p>
          </div>
        </div>
        <a
          href="https://t.me"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center rounded-full bg-white text-primary px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors"
        >
          Join Telegram Channel →
        </a>
      </div>
    </section>
  );
}
