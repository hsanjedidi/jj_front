"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import LogoLink from "@/app/components/common/logo/logoLink";
import { LogoData, socialIconsData } from "@/app/hooks/data-general";
import { itemsNavbar } from "@/app/hooks/data-navbar";
import SocialIcons from "@/app/components/common/social/SocialIcons";
import MenuMobile from "@/app/components/common/menuMobile/menuMobile";
import MenuToggleButton from "./MenuToggleButton";
import { cn } from "@/lib/utils";
import throttle from "lodash.throttle";
import { useClickAway, useWindowScroll } from "@uidotdev/usehooks";
import { Separator } from "@/components/ui/separator";
import MenuMobileChips from "./MenuMobileChips";
import MobileHeader from "./MobileHeader";

const STICKY_THRESHOLD = 100; // Define scroll threshold (adjust as needed)
const SCROLL_THROTTLE_LIMIT = 200; // Throttle limit in ms

/**
 * The main header component for the website.
 * It includes the logo, main navigation, social icons, and a mobile menu toggle.
 * It also handles the "sticky" behavior on scroll.
 * @returns {React.ReactElement} The rendered header component.
 */
const Header2: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [{ x, y: scrollY }, scrollTo] = useWindowScroll();
  const [previousYRef, setPreviousYRef] = useState(scrollY);
  /**
   * Effect to handle the sticky header functionality.
   * It adds a throttled scroll event listener to track the page's scroll position
   * and applies a sticky class to the header when the threshold is passed.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > STICKY_THRESHOLD);
    };

    const throttledScrollHandler = throttle(
      handleScroll,
      SCROLL_THROTTLE_LIMIT,
    );

    window.addEventListener("scroll", throttledScrollHandler);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  /**
   * Toggles the visibility of the mobile menu.
   */
  const handleToggleMobileMenu = () => {
    setMenuVisibility((prev) => !prev);
  };

  const [headerHidden, setHeaderHidden] = useState(false);
  useEffect(() => {
    if (!previousYRef) setHeaderHidden(true);
    else if (scrollY && previousYRef < scrollY) {
      // Scrolling down
      setHeaderHidden(true);
      if (isMenuVisible) setMenuVisibility(false);
    } else {
      // Scrolling up
      setHeaderHidden(false);
    }

    setPreviousYRef(scrollY);
  }, [scrollY]);

  const bgTransparent = scrollY === null || scrollY < 20;

  const closeFuckingMobileMenu = () => {
    setMenuVisibility(false);
  };

  const ref = useClickAway<HTMLDivElement>(() => {
    closeFuckingMobileMenu();
  });

  return (
    <div className="  transition-all duration-300 ease-in-out" ref={ref}>
      <div className=" transition-all duration-300 ease-in-out">
        <header
          className={cn(
            "fixed top-0 left-0 w-full z-50 md:overflow-visible",
            headerHidden
              ? "-translate-y-full transition-all duration-300 ease-in-out"
              : "transition-all duration-300 ease-in-out",
          )}
        >
          <div
            className={cn(
              "p-4 duration-700 ease-in-out transition-colors",
              bgTransparent ? "bg-transparent" : " bg-black",
            )}
          >
            <div className="flex flex-col w-full h-fit transition-all duration-300 ease-in-out">
              <div className="grid grid-cols-3 w-full">
                <div className="flex items-center">
                  <div className="header__mobile" ref={null}>
                    <MenuToggleButton
                      isMobile={isMenuVisible}
                      onToggle={handleToggleMobileMenu}
                      aria-controls="menu-mobile"
                    />
                  </div>
                </div>

                <div className="">
                  <LogoLink
                    href={LogoData.hrefLogo}
                    src={LogoData.urlLogo}
                    alt={LogoData.altLogo}
                    scrollY={scrollY}
                  />
                </div>

                <div className="header__nav">
                  {/* Desktop Navigation */}
                  <nav className="header__menu" aria-label="Main navigation">
                    <ul className="header__menu-list">
                      {itemsNavbar.map((item) => (
                        <li
                          key={item.title}
                          className={cn(
                            "dropdown simple-dropdown",
                            item.children &&
                              item.children.length > 0 &&
                              "has-children",
                          )}
                        >
                          <Link href={item.link}>{item.title}</Link>
                          {item.children && item.children.length > 0 && (
                            <ul className="dropdown-menu">
                              {item.children.map((child) => (
                                <li key={child.id}>
                                  <Link href={child.link}>{child.title}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Mobile Menu Toggle & Social Icons Wrapper */}
                  <div className="flex items-center">
                    <div className="">
                      <SocialIcons socials={socialIconsData} />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out ",
                  isMenuVisible
                    ? "max-h-40 opacity-100 pt-6 md:max-h-0 md:opacity-0"
                    : "max-h-0 opacity-0 pt-0",
                )}
              >
                <MobileHeader handleLinkClick={closeFuckingMobileMenu} />
              </div>
            </div>
          </div>
        </header>
        {/* <MenuMobile
          id="menu-mobile"
          isMobile={isMobile}
          setIsMobile={setIsMobile}
        /> */}
      </div>
    </div>
  );
};

export default Header2;
