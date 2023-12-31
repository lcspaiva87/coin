'use client';
import { Icons } from "@/components/ui/icons";
import { Menu, Transition } from "@headlessui/react";

import Image from "next/image";
import { Fragment } from "react";
export function Menus({
  avatarUrl,
  name,
}: {

  avatarUrl: string;
  name: string;
}) {

  return (
    <Menu as="div" >
      <Menu.Button className="flex items-center">
        <Image
          width={24}
          height={24}
          src={avatarUrl}
          alt={name}
          className="mr-2 h-[2rem] w-[2rem] rounded-full"
        />
        <p className="mr-1 hidden text-label md:block">{name}</p>
        <Icons.ChevronDown className="h-3 w-3" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-4 isolate z-10 mt-0 origin-top-right rounded bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                href="/api/auth/logout"
                className={`${
                  active ? "bg-violet-500 text-secondary-400" : "text-gray-900"
                } hover:bg-secondary-50 flex items-center gap-4 rounded-sm px-5 py-3 text-label active:bg-secondary-200`}
              >
                <Icons.DoorOut className="h-4 w-4" />
                Logout
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
