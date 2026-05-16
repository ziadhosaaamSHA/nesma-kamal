"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { usePageTransition } from "@/context/PageTransitionContext";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export const TransitionLink = ({ href, children, className, ...props }: TransitionLinkProps) => {
  const { navigateWithTransition } = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateWithTransition(href.toString());
    if (props.onClick) {
      props.onClick(e as any);
    }
  };

  return (
    <Link href={href} className={className} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};
