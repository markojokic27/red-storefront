// External packages
import { twMerge } from 'tailwind-merge';
import * as RadixDialog from '@radix-ui/react-dialog';

export const Dialog: React.FC<
  React.ComponentPropsWithoutRef<'button'> & {
    title?: string;
    footer?: React.ReactNode;
    trigger?: React.ReactNode;
    open?: boolean;
  }
> = ({ title, children, footer, trigger, open, className, ...rest }) => {
  return (
    <RadixDialog.Root {...rest} open={open}>
      {trigger}
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-50 bg-black bg-opacity-10" />
        <RadixDialog.Content
          className={twMerge(
            'fixed left-[50%] top-[50%] z-[60] max-w-150 -translate-x-1/2 -translate-y-1/2 border border-blue-700 bg-white p-6',
            className
          )}
        >
          <RadixDialog.Title className="mb-10 text-md font-black text-blue-700">
            {title}
          </RadixDialog.Title>
          {children}
          {footer}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
