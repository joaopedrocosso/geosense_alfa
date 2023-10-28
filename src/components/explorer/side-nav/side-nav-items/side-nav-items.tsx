import React, { useContext, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SIDENAV_ITEMS } from "@/styles/constants";
import { SideNavItem } from "@/styles/types";
import { Icon } from "@iconify/react";

const SideNavItems = ({ expanded }: { expanded: boolean }) => {
  return (
    <div className="flex flex-col gap-3 my-8 min-w-full">
      {SIDENAV_ITEMS.map((item, idx) => {
        return <MenuItem key={idx} item={item} expanded={expanded} />;
      })}
    </div>
  );
};

export default SideNavItems;

const MenuItem = ({
  item,
  expanded,
}: {
  item: SideNavItem;
  expanded: boolean;
}) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div>
      {/* ITEM COM */}
      {item.subMenu ? (
        <>
          <div
            onClick={toggleSubMenu}
            className={`flex items-center py-2 rounded-lg hover-bg-zinc-100 justify-between hover:bg-zinc-100 mx-3 px-3 cursor-pointer ${
              pathname.includes(item.path) ? "bg-zinc-100" : ""
            }`}
          >
            <div className="flex items-center relative ">
              <div className="icon flex justify-center items-center w-[24px] h-[24px]">
                {item.icon}
              </div>
              <div
                className={`wrap  flex justify-between overflow-hidden transition-all gap-3 items-center ${
                  expanded
                    ? "w-36 visible opacity-100 ml-3"
                    : "w-0 invisible opacity-0"
                }`}
              >
                <span className="font-semibold whitespace-nowrap text-xs flex transition-all">
                  {item.title}
                </span>
                {/* arrow */}
                <div
                  className={` flex absolute right-0 transition-all duration-200 ${
                    subMenuOpen ? "rotate-180" : "rotate-0"
                  } `}
                >
                  <Icon icon="lucide:chevron-down" width="10" height="10" />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`ml-14 flex flex-col gap-4 text-sm transition-all duration-200 overflow-hidden ${
              subMenuOpen ? "h-[180px] pt-2" : "h-0"
            } ${
              expanded ? "w-36 visible opacity-100" : "w-0 invisible opacity-0"
            }`}
          >
            {item.subMenuItems?.map((subItem, idx) => {
              return (
                <Link
                  key={idx}
                  href={subItem.path}
                  className={`${subItem.path === pathname ? "font-bold" : ""}`}
                >
                  <span className="text-xs">{subItem.title}</span>
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        /* ITEM SEM SUBMENUS */
        <Link
          href={item.path}
          className={`flex items-center py-2 rounded-lg hover:bg-zinc-100 mx-3 px-3 ${
            item.path === pathname ? "bg-zinc-100" : ""
          }`}
        >
          <div className="icon flex justify-center items-center w-[24px] h-[24px]">
            {item.icon}
          </div>
          <span
            className={`font-semibold  overflow-hidden whitespace-nowrap text-xs flex transition-all ${
              expanded
                ? "w-36 visible opacity-100 ml-3"
                : "w-0 invisible opacity-0"
            }`}
          >
            {item.title}
          </span>
        </Link>
      )}
    </div>
  );
};
