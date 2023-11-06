"use client";
import { SideBarType } from "@/@types/typeSideBar";
import { Popover, Transition } from '@headlessui/react';
import { useState } from "react";
import { SidebarItemMock } from "./SidebarItem";

export function AsideMenu() {
  const [isShowing, setIsShowing] = useState(
    Array(SidebarItemMock.length).fill(false),
  );

  const handleMouseEnter = (index: number) => {
    const newIsShowing = [...isShowing];
    newIsShowing[index] = true;
    setIsShowing(newIsShowing);
  };

  const handleMouseLeave = (index: number) => {
    const newIsShowing = [...isShowing];
    newIsShowing[index] = false;
    setIsShowing(newIsShowing);
  };
  // /absolute inset-y-0 left-0 z-20 hidden flex-col items-center gap-8 border-y border-secondary-300 bg-quaternary px-6 py-12 lg:flex
  return (
    <div className=" fixed top-14  flex h-full md:top-[60px] lg:bottom-16 lg:top-16">
      <nav className=" absolute inset-y-0 left-0 z-20 hidden flex-col items-center gap-8 border-y border-secondary-300 bg-quaternary px-6 py-12 lg:flex">
      {SidebarItemMock.map((item: SideBarType, index) => (
        <Popover
          key={item.id}
          className="relative"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <Popover.Button as="a" href="#">
            <item.icon className="h-8 w-8" />
          </Popover.Button>
          <Transition
            show={isShowing[index]}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            className="absolute inset-y-0 left-full ml-4 flex origin-left items-center justify-center rounded bg-primary-400 px-6 py-2 shadow-[0px_4px_8px_rgba(0,0,0,0.1)]"
          >
            <Popover.Panel static>
              <div
                className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-primary"
                aria-hidden
              />
              <span className="whitespace-nowrap text-label text-white">
                {item.title}
              </span>
            </Popover.Panel>
          </Transition>
        </Popover>
      ))}
      </nav>
    </div>
  );
}
