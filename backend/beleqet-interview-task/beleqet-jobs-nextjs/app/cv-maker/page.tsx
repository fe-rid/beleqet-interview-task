import { FileText } from "lucide-react";

export const metadata = { title: "CV Maker | Beleqet Jobs" };

export default function CvMakerPage() {
  return (
    <div className="container-page py-20 text-center max-w-lg mx-auto">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brandGreen/10 text-brandGreen mx-auto mb-5">
        <FileText className="h-6 w-6" />
      </span>
      <h1 className="text-pageH1">CV Maker</h1>
      <p className="text-muted mt-4 leading-relaxed">
        Build a professional, employer-ready CV in minutes. This tool is coming soon — connect it to your CV builder
        API to go live.
      </p>
      <button className="mt-7 rounded-full bg-brandGreen text-white text-sm font-semibold px-6 py-3 hover:bg-darkGreen transition-colors">
        Notify Me
      </button>
    </div>
  );
}
