import { cn } from "@/helpers/utils";
import { forwardRef } from "react";

export interface PageContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
        {...props}
      />
    );
  }
);

PageContainer.displayName = "PageContainer";