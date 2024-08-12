'use client';

import React from 'react';

type LayoutColumnProps = React.ComponentPropsWithoutRef<'div'> & {
  span?: number;
  offset?: number;
  smSpan?: number;
  mdSpan?: number;
  lgSpan?: number;
  smOffset?: number;
  mdOffset?: number;
  lgOffset?: number;
};

const spanClasses = (span: number, prefix: string = '') => {
  const percentage = (span / 12) * 100;
  return prefix ? `${prefix}:w-[${percentage}%]` : `w-[${percentage}%]`;
};

const offsetClasses = (offset: number, prefix: string = '') => {
  const percentage = (offset / 12) * 100;
  return prefix ? `${prefix}:ml-[${percentage}%]` : `ml-[${percentage}%]`;
};

const LayoutColumn: React.FC<LayoutColumnProps> = ({
  span = 12,
  offset = 0,
  smSpan,
  mdSpan,
  lgSpan,
  smOffset,
  mdOffset,
  lgOffset,
  className,
  children,
  ...rest
}) => {
  const baseClasses = `${spanClasses(span)} ${offsetClasses(offset)}`;
  const smClasses = smSpan
    ? `${spanClasses(smSpan, 'sm')} ${smOffset ? offsetClasses(smOffset, 'sm') : ''}`
    : '';
  const mdClasses = mdSpan
    ? `${spanClasses(mdSpan, 'md')} ${mdOffset ? offsetClasses(mdOffset, 'md') : ''}`
    : '';
  const lgClasses = lgSpan
    ? `${spanClasses(lgSpan, 'lg')} ${lgOffset ? offsetClasses(lgOffset, 'lg') : ''}`
    : '';

  return (
    <div
      {...rest}
      className={`px-6 ${baseClasses} ${smClasses} ${mdClasses} ${lgClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default LayoutColumn;
