"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container-page py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-pageH1">Get in touch</h1>
        <p className="text-muted mt-4 leading-relaxed">
          Have a question about a job listing, your account, or partnering with Beleqet? Send us a message and our
          team will get back to you.
        </p>

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3 text-sm text-ink">
            <MapPin className="h-4 w-4 text-brandGreen" /> Addis Ababa, Ethiopia
          </div>
          <div className="flex items-center gap-3 text-sm text-ink">
            <Mail className="h-4 w-4 text-brandGreen" /> support@beleqet.com
          </div>
          <div className="flex items-center gap-3 text-sm text-ink">
            <Send className="h-4 w-4 text-brandGreen" /> Beleqet Telegram Channel
          </div>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="rounded-2xl border border-border bg-white p-7 space-y-4"
      >
        {submitted ? (
          <p className="text-sm text-brandGreen font-semibold">Thanks — your message has been sent.</p>
        ) : (
          <>
            <div>
              <label className="text-xs font-semibold text-ink">Full Name</label>
              <input required className="mt-1.5 w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:border-brandGreen" />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink">Email</label>
              <input required type="email" className="mt-1.5 w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:border-brandGreen" />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink">Message</label>
              <textarea required rows={4} className="mt-1.5 w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:border-brandGreen" />
            </div>
            <button type="submit" className="w-full rounded-full bg-brandGreen text-white text-sm font-semibold py-3 hover:bg-darkGreen transition-colors">
              Send Message
            </button>
          </>
        )}
      </form>
    </div>
  );
}
