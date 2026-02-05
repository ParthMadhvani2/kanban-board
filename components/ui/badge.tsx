import { cn } from "@/helpers/utils";
import { forwardRef } from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    theme?: 'green' | 'orange' | 'purple' | 'blue' | 'red' | 'gray' | string;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, theme, ...args }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'px-2 py-1 rounded-md text-[10px] font-medium w-fit uppercase hover:brightness-95',
                    !theme && 'bg-gray-100 text-gray-500',
                    theme === 'green' && 'bg-green-600 text-green-100',
                    theme === 'orange' && 'bg-orange-500 text-orange-100',
                    theme === 'purple' && 'bg-purple-500 text-purple-100',
                    theme === 'blue' && 'bg-blue-500 text-blue-100',
                    theme === 'red' && 'bg-red-500 text-red-100',
                    theme === 'gray' && 'bg-gray-500 text-gray-100',
                    className,
                )}
                {...args}>
                {args.children}
            </div>
        )
    }
)

Badge.displayName = "Badge";