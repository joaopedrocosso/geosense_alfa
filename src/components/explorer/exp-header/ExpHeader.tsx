"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils"

const ExpHeader = () => {
    
    const scrolled = useScroll(5);
    const selectedLayout = useSelectedLayoutSegment();

    return(
        <div className={cn(
            `sm:(sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200) md:hidden`,
            {
                "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
                "border-b border-gray-200 bg-white": selectedLayout,
            }
        )}>

            <div className="flex h-[47px] items-center justify-between px-4">

                <div className="flex items-center space-x-4">
                    <Link href="/" className="flex flex-row space-x-3 items-center justify-center md:hidden">
                        <span className="h-7 w-7 bg-zinc-300 rounded-lg"/>
                        <span className="font-bold text-xl flex">GeoSense Explorer</span>
                    </Link>
                </div>

                <div className="hidden md:block">
                    <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center ">
                        <span className="font-semibold text-sm"></span>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default ExpHeader;
