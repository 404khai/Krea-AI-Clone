import { FC } from "react";
import { cn } from "@/lib/utils"; 

interface GenerateCardProps {
  logo: React.ReactNode; // Icon/logo passed as a React node
  title: string;
  description: string;
  isNew?: boolean;
  background?: string; // Tailwind class for bg or gradient
}

const GenerateCard: FC<GenerateCardProps> = ({
  logo,
  title,
  description,
  isNew = false,
  background = "bg-white",
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-xl px-4 py-3 "
      )}
    >
      {/* Left side */}
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className={cn("p-2 flex items-center justify-center rounded-[10px]", background)}>
          {logo}
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-black">
              {title}
            </h3>
            {isNew && (
              <span className="rounded-lg bg-[#126cfc] px-1.5 py-0.5 text-[10px] text-white">
                New
              </span>
            )}
          </div>
          <p className="text-xs text-[#b0b0b0]">
            {description}
          </p>
        </div>
      </div>

      {/* Right side button */}
      <button className="rounded-lg bg-[#f5f5f5] px-3 py-1 text-xs font-medium">
        Open
      </button>
    </div>
  );
};

export default GenerateCard;
