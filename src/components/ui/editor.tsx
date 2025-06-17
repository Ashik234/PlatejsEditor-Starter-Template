'use client';

import React from 'react';

export function EditorContainer({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export const Editor = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={className} {...props} />;
  }
);
Editor.displayName = 'Editor';
