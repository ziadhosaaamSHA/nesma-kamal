"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePageTransition } from "@/context/PageTransitionContext";
import NesmaLogo from "./NesmaLogo";

const PageLoader = () => {
  const { isTransitioning } = usePageTransition();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Initial mount reveal
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const showLoader = isFirstLoad || isTransitioning;

  return (
    <AnimatePresence mode="wait">
      {showLoader && (
        <motion.div
          key="curtain"
          initial={{ y: isFirstLoad ? 0 : "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100]  flex flex-col items-center justify-center pointer-events-none bg-primary"
        >
          <div className="text-white text-center z-30">
            <div className="relative mx-auto mb-4">
              <div className="relative w-[280px] h-48 mx-auto">
                <NesmaLogo className="w-full h-full" />
              </div> 
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
