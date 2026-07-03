"use client";

export default function PostJobPage() {
  return (
    <div className="container-page py-16 max-w-2xl">
      <h1 className="text-pageH1">Post a Job</h1>
      <p className="text-muted mt-4 leading-relaxed">
        Reach thousands of verified job seekers across Ethiopia. Fill out the form below to publish your listing —
        wire this up to your job-creation API to go live.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-8 rounded-2xl border border-border bg-white p-7 space-y-4"
      >
        <div>
          <label className="text-xs font-semibold text-ink">Job Title</label>
          <input className="mt-1.5 w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:border-brandGreen" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-ink">Company</label>
            <input className="mt-1.5 w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:border-brandGreen" />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink">Location</label>
            <input className="mt-1.5 w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:border-brandGreen" />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-ink">Job Description</label>
          <textarea rows={5} className="mt-1.5 w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:border-brandGreen" />
        </div>
        <button type="submit" className="w-full rounded-full bg-brandGreen text-white text-sm font-semibold py-3 hover:bg-darkGreen transition-colors">
          Publish Listing
        </button>
      </form>
    </div>
  );
}
