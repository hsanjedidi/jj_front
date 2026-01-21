"use client";

import { itemsNavbar } from "@/app/hooks/data-navbar";
import MenuMobileChips from "./MenuMobileChips";
import { useState } from "react";

const MobileHeader = ({ handleLinkClick }: { handleLinkClick: () => void }) => {
  const [currentPage, setCurrentPage] = useState("/");

  const handleNavigation = (link: string) => {
    setCurrentPage(link);
    handleLinkClick();
  };
  return (
    <>
      {itemsNavbar.map((item, index) => (
        <MenuMobileChips
          key={item.title}
          title={item.title}
          link={item.link}
          separator={index !== itemsNavbar.length - 1}
          onClick={handleNavigation}
          clover={item.link === currentPage}
        />
      ))}
    </>
  );
};
export default MobileHeader;
