"use client";

import geoSenseLogo from "../../../../public/geoSenseLogo.png";
import userName from "../../../../public/vercel.svg";
import Link from "next/link";
import Image from "next/image";
import SideNavItems from "./side-nav-items/side-nav-items";
import PlacesForm from "./places_form/places_form";
import PlaceStatus from "./place_status/place_status";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Gauge, AlertTriangle, ChevronFirst, ChevronLast } from "lucide-react";
import { Gudea } from "next/font/google";
import { useGlobalContext } from "@/store/ContextApi";

const SideNav = () => {
  const { expanded, setExpanded } = useGlobalContext();

  return (
    <div className="navOption bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
      <div
        className={`flex flex-col justify-between space-y-6 w-full h-full ${
          expanded ? "w-full" : "w-[74px]"
        }`}
      >
        <div className="top flex flex-col space-y-6 w-full">
          {/* LOGO DO HEADER */}
          <div
            onClick={() => setExpanded(!expanded)}
            className="flex items-center md:px-6 border-b border-zinc-200 h-12 w-full"
          >
            <button className="py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
              {expanded ? (
                <ChevronFirst width="24" height="24" />
              ) : (
                <ChevronLast width="24" height="24" />
              )}
            </button>

            <Link href="/">
              <Image
                src={geoSenseLogo}
                className={`overflow-hidden transition-all ${
                  expanded
                    ? "w-48 visible opacity-100 ml-3"
                    : "w-0 invisible opacity-0 "
                }`}
                alt=""
              />
            </Link>
          </div>
          {/* LOGO DO HEADER */}

          {/* FORMULÁRIO DO LOCAL */}
          <PlacesForm expanded={expanded} />
          {/* FORMULÁRIO DO LOCAL */}

          {/* ITENS DO SIDEBAR */}
          <div className="max-h-[280px] h-[280px] overflow-y-scroll border-y">
            <SideNavItems expanded={expanded} />
          </div>
          {/* ITENS DO SIDEBAR */}
        </div>

        {/* middle */}
        <div className="middle relative">
          {/* when the nav open */}
          <div
            className={`nav-open icons whitespace-nowrap grid gap-8 mx-6 transition-all absolute top-1/2 transform -translate-y-1/2 ${
              expanded ? "opacity-100 visible" : "opacity-0 invisible w-0"
            } `}
          >
            <PlaceStatus />
          </div>

          {/* When the nav is closed */}
          <div
            className={`nav-closed icons grid gap-10 mx-6 transition-all absolute top-1/2 transform -translate-y-1/2 ${
              expanded ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="icon w-[24px] h-[24px]">
              <Gauge width="19" height="19" />
            </div>
            <div className="icon w-[24px] h-[24px]">
              <AlertTriangle width="19" height="19" />
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="border-t flex py-3 pb-7 relative">
          <Image src={userName} alt="" className="w-10 h-10 rounded-md ml-3" />
          <div
            className={`flex justify-between items-center 
          overflow-hidden transition-all  ml-3 ${
            expanded ? "w-52 opacity-100 visible" : "w-0 opacity-0 invisible"
          }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Username</h4>
              <span className="text-xs text-gray-600">username@email.com</span>
            </div>
            <button className="flex items-center">
              <Icon
                className="absolute right-0 mr-8 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                icon="lucide:moon"
                width="32"
                height="32"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
