import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-4xl font-bold text-center mb-4 text-current">
      {children}
    </h2>
  );
}