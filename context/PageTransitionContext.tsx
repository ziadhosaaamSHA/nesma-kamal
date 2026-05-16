"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface PageTransitionContextType {
  isTransitioning: boolean;
  setIsTransitioning: (value: boolean) => void;
  navigateWithTransition: (href: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined);

export const PageTransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Reset transition state when pathname changes (page loaded)
  useEffect(() => {
    setIsTransitioning(false);
  }, [pathname]);

  const navigateWithTransition = (href: string) => {
    if (href === pathname) return;
    setIsTransitioning(true);
    
    // Wait for the curtain to fall down (800ms) before navigating
    setTimeout(() => {
      router.push(href);
    }, 800);
  };

  return (
    <PageTransitionContext.Provider value={{ isTransitioning, setIsTransitioning, navigateWithTransition }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error("usePageTransition must be used within a PageTransitionProvider");
  }
  return context;
};
