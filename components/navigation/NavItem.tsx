"use client";

import React from "react";
import { TransitionLink } from "../transitions/TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";
import type { NavigationItem } from "@/app/types/navigation";

type Props = {
  item: NavigationItem;
  lang: string;

  isActive?: boolean;
  isCurrentPage?: boolean;

  useBurgundyTone?: boolean;
  align?: "left" | "right";

  isMobile?: boolean;

  expandedMobileItem?: string | null;
  setExpandedMobileItem?: (s: string | null) => void;
  setIsMobileMenuOpen?: (b: boolean) => void;
};


/* ============================================================
   DESKTOP NAV ITEM
   ============================================================ */

const desktopItem =
  `
  relative
  inline-flex
  min-h-10
  items-center
  justify-center
  gap-1.5
  rounded-md
  px-3
  py-2

  text-md
  font-medium
  tracking-[0.02em]
  text-surface/80
  
  transition-all
  duration-200
  ease-out

  hover:bg-moss-50
  hover:text-moss-700

  active:scale-[0.97]
  
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-moss-400/40
  focus-visible:ring-offset-2
`;


/* ============================================================
   MOBILE TITLE
   ============================================================ */

const mobileTitle =
  `
  flex
  min-h-12
  w-full
  items-center
  justify-between

  rounded-lg
  px-4

  text-lg
  font-medium
  text-cream

  transition-all
  duration-200

  hover:bg-cream/10
  active:opacity-70
`;


/* ============================================================
   MOBILE SUB ITEM
   ============================================================ */

const mobileSub =
  `
  flex
  min-h-11
  items-center

  rounded-md
  px-4

  text-sm
  text-cream/70

  transition-all

  hover:bg-cream/10
  hover:text-cream
`;


export default function NavItem({
  item,
  lang,
  isActive,
  isCurrentPage,
  align = "left",
  isMobile,
  expandedMobileItem,
  setExpandedMobileItem,
  setIsMobileMenuOpen,
}: Props) {

  /* ==========================================================
     MOBILE
     ========================================================== */

  if (isMobile) {

    /* ------------------------------
       Mobile Dropdown
       ------------------------------ */

    if (item.dropdown) {

      const isOpen = expandedMobileItem === item.label;

      return (
        <div className="flex flex-col">

          <button
            onClick={() =>
              setExpandedMobileItem?.(
                isOpen ? null : item.label
              )
            }
            className={mobileTitle}
            aria-expanded={isOpen}
          >

            <span>
              {lang === "en"
                ? item.label
                : item.labelAr}
            </span>

            <motion.span
              animate={{
                rotate: isOpen ? 180 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
              }}
            >
              <CaretDown size="1.25rem" />
            </motion.span>

          </button>


          <AnimatePresence initial={false}>

            {isOpen && (

              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-hidden"
              >

                <div
                  className="
                    ml-4
                    flex
                    flex-col
                    gap-1
                    border-l
                    border-cream/15
                    py-2
                    pl-3
                  "
                >

                  {item.dropdown.map((sub) => (

                    <TransitionLink
                      key={sub.name}
                      href={sub.href}
                      onClick={() =>
                        setIsMobileMenuOpen?.(false)
                      }
                      className={mobileSub}
                    >

                      <span
                        className="
                          mr-3
                          h-1
                          w-1
                          shrink-0
                          rounded-full
                          bg-cream/40
                        "
                      />

                      {lang === "en"
                        ? sub.name
                        : sub.nameAr}

                    </TransitionLink>

                  ))}

                </div>

              </motion.div>

            )}

          </AnimatePresence>

        </div>
      );
    }


    /* ------------------------------
       Mobile Simple Link
       ------------------------------ */

    return (
      <TransitionLink
        href={item.href || "#"}
        onClick={() =>
          setIsMobileMenuOpen?.(false)
        }
        className={`
          ${mobileTitle}
          ${isCurrentPage ? "bg-cream/10 text-cream" : ""}
        `}
      >

        {lang === "en"
          ? item.label
          : item.labelAr}

      </TransitionLink>
    );
  }


  /* ==========================================================
     DESKTOP DROPDOWN
     ========================================================== */

  if (item.dropdown) {

    return (
      <div className="relative">

        <button
          className={`
            ${desktopItem}

            ${
              isCurrentPage || isActive
                ? "bg-moss-700 text-moss-700"
                : ""
            }
          `}
          data-current={isCurrentPage}
          aria-expanded={isActive}
        >

          {lang === "en"
            ? item.label
            : item.labelAr}

          <motion.span
            animate={{
              rotate: isActive ? 180 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
            }}
            className="inline-flex"
          >
            <CaretDown
              size="0.75rem"
              weight="bold"
            />
          </motion.span>

        </button>


        <AnimatePresence>

          {isActive && (

            <motion.div
              initial={{
                opacity: 0,
                y: 6,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 6,
              }}
              transition={{
                duration: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`
                absolute
                top-full
                z-50
                pt-2

                ${
                  align === "left"
                    ? "left-0"
                    : "right-0"
                }
              `}
            >

              <div
                className="
                  min-w-48
                  rounded-lg
                  border
                  border-gray-200
                  bg-cream
                  p-2
                  shadow-dropdown
                "
              >

                {item.dropdown.map((sub) => (

                  <TransitionLink
                    key={sub.name}
                    href={sub.href}
                    className="
                      flex
                      items-center
                      rounded-md
                      px-3
                      py-2.5

                      text-xs
                      font-medium
                      text-moss-900

                      transition-colors

                      hover:bg-moss-50
                      hover:text-moss-700
                    "
                  >

                    {lang === "en"
                      ? sub.name
                      : sub.nameAr}

                  </TransitionLink>

                ))}

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    );
  }


  /* ==========================================================
     DESKTOP SIMPLE LINK
     ========================================================== */

  return (
    <TransitionLink
      href={item.href || "#"}
      className={`
        ${desktopItem}

        ${
          isCurrentPage
            ? "bg-moss-700 text-moss-700"
            : ""
        }
      `}
      data-current={isCurrentPage}
    >
      {lang === "en"
        ? item.label
        : item.labelAr}
    </TransitionLink>
  );
}