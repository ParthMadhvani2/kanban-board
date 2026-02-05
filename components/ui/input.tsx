import * as React from 'react';
import { cn } from '@/helpers/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
            'px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 focus:shadow-sm rounded-xl transition-all',
            className,
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

const FormItemWrapper: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ children, className, ...props }) => {
  return <div className="flex flex-col items-start gap-2">{children}</div>;
};

export { Input, FormItemWrapper };
