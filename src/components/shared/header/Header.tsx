"use client";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

const Header = () => {
    return(
        <Popover className={"container mx-auto flex items-center border-b-2 px-6 py-2 h-24"}>
            <h1 className="font-bold">
                GeoSense Explorer
            </h1>
            <div className="grow">
                <div className="hidden sm:flex flex items-center justify-center gap-2 md:gap-8">
                    <Link href="Home">Home</Link>
                    <Link href="Explorer">Explorer</Link>
                    <Link href="Pricing">Pricing</Link>
                    <Link href="About">About</Link>
                    <Link href="Support">Support</Link>
                </div>
            </div>

            <div className="flex grow items-center justify-end sm:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
                hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
            </div>

            <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30" />
            <Transition 
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duation-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >

            <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                    <div className="px-5 pt-5 pb-6">
                        <div className="flex items-center justify-between">
                            <h1 className="font-bold">GeoSense Explorer</h1>
                            <div className="-mr-2">
                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2
                                text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset
                                focus:ring-indigo-500">
                                    <span className="sr-only">
                                        Close menu
                                    </span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <nav className="grid gap-y-8">
                                <Link className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2" href="/">
                                    Home
                                </Link>
                                <Link className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2" href="explorer">
                                    Explorer
                                </Link>
                                <Link className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2" href="pricing">
                                    Pricing
                                </Link>
                                <Link className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2" href="about">
                                    About
                                </Link>
                                <Link className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2" href="support">
                                    Support
                                </Link>
                            </nav>
                        </div>
                        <div className="mt-6 flex flex-col items-center gap-2">
                            <Link className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2
                            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500" href="register">
                                Sign Up
                            </Link>
                            <Link className="rounded-md bg-gray-500 px-4 py-2 text-sm font-medium md:text-xl w-full focus:outline-none
                            focus:ring-2 focus:ring-inset focus:ring-gray-500" href="login">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </Popover.Panel>

            </Transition>

            <div className="hidden sm:block">
                <Link href="register" className="mr-2 font-bold">Sign Up</Link>
                <Link href="register" className="font-bold">Login</Link>
            </div>
        </Popover>
    )
}

export default Header;
