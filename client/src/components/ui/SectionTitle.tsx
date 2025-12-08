import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  badge,
  align = "center",
  className = ""
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-12 md:mb-16",
      align === "center" && "text-center",
      className
    )}>
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-indigo-400">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg text-slate-400",
          align === "center" && "mx-auto max-w-2xl"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
