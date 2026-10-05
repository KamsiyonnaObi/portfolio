import React from "react";

export const StatusPill = ({ status }: { status: string }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-Accent-light dark:bg-Accent-dark" />
      <p className="caption-bold uppercase tracking-[2px] text-Accent-light dark:text-Accent-dark">
        {status}
      </p>
    </div>
  );
};
