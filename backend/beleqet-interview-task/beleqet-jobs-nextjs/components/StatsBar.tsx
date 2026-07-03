import { Briefcase, Building2, Users, Smile, type LucideIcon } from "lucide-react";
import { stats } from "@/lib/mockData";

const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  "building-2": Building2,
  users: Users,
  smile: Smile,
};

export default function StatsBar() {
  return (
    <div className="container-page -mt-7 relative z-10">
      <div className="rounded-2xl bg-brandGreen text-white grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/15 shadow-cardHover">
        {stats.map((stat) => {
          const Icon = iconMap[stat.icon] ?? Briefcase;
          return (
            <div key={stat.label} className="flex items-center gap-3 px-5 py-5">
              <Icon className="h-5 w-5 text-white/80 shrink-0" />
              <div>
                <p className="text-lg font-extrabold leading-none">{stat.value}</p>
                <p className="text-[11px] text-white/70 mt-1">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
