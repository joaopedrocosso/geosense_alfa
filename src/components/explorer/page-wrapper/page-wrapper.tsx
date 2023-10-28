"use client";
import { ReactNode } from "react";
import { useGlobalContext } from "@/store/ContextApi";
export default function PageWrapper({ children }: { children: ReactNode }) {
  const { expanded, setExpanded } = useGlobalContext();
  console.log(expanded);
  return (
    <div
      className={`flex flex-col pt-2 px-4  transition-all space-y-2 bg-zinc-100 flex-grow pb-4  ${
        expanded ? "ml-[356px]" : "ml-[80px]"
      }`}
    >
      {children}
    </div>
  );
}
