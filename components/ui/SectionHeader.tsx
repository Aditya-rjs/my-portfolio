import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center", className)}>
      <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-base max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}
