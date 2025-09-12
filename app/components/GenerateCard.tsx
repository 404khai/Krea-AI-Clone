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
        "flex items-center justify-between rounded-xl px-4 py-3 shadow-sm",
        background
      )}
    >
      {/* Left side */}
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="h-10 w-10 flex items-center justify-center rounded-md bg-white/20">
          {logo}
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              {title}
            </h3>
            {isNew && (
              <span className="rounded-md bg-blue-500 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                New
              </span>
            )}
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>

      {/* Right side button */}
      <button className="rounded-lg border border-gray-300 bg-white px-3 py-1 text-xs font-medium shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700">
        Open
      </button>
    </div>
  );
};

export default GenerateCard;
