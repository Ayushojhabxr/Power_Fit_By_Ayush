import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <a 
      href={href} 
      className="hover:text-red-500 transition-colors"
    >
      {children}
    </a>
  );
}