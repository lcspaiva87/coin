'use client';
import { Icons } from "@/components/ui/icons";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";
const AsideMobile= () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const headerRef = useRef<HTMLElement>(null)
  return (
    <div className="lg:hidden">
      <button
        className="place-self-start lg:hidden"
        onClick={() => setIsSlideOverOpen((prev) => !prev)}
        aria-label="Open navigation menu"
      >
        <Icons.MenuHamburger />
      </button>
      <SlideOver
        isOpen={isSlideOverOpen}
        onClose={() => setIsSlideOverOpen(false)}
        side="left"
        hiddenBreakpoint="lg"
        overlayClassName="top-[--top-distance]"
        overlayStyle={{
          "--top-distance": `${headerRef.current?.clientHeight ?? 0}px`,
        }}
        dialogClassName="mt-[--header-height] border-t border-secondary-300"
        dialogStyle={{
          "--header-height": `${headerRef.current?.clientHeight ?? 0}px`,
        }}
      >
        <nav className="flex flex-col gap-8 px-6 py-4 ">
          <SlideOverLink
            href="#"
            icon={(props) => <Icons.CryptoWallet {...props} />}
          >
            Lorem ipsum
          </SlideOverLink>
          <SlideOverLink
            href="#"
            icon={(props) => <Icons.CryptoCurrencyCircle {...props} />}
          >
            Lorem ipsum
          </SlideOverLink>
          <SlideOverLink
            href="#"
            icon={(props) => <Icons.CryptoCurrency {...props} />}
          >
            Lorem ipsum
          </SlideOverLink>
          <SlideOverLink href="#" icon={(props) => <Icons.Chart {...props} />}>
            Lorem ipsum
          </SlideOverLink>

          <button
            aria-label="Close navigation menu"
            className="mt-[14px] w-max"
            onClick={() => setIsSlideOverOpen(false)}
          >
            <Icons.CircledArrowLeft className="h-6 w-6" />
          </button>
        </nav>
      </SlideOver>
    </div>
  );
};
const SlideOverLink = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon: (props: { className: string }) => React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 text-label transition-colors hover:text-primary-400 hover:underline mt-[0.5rem] "
    >
      {icon({ className: "h-6 w-6" })}
      {children}
    </Link>
  );
};
type Side = "left" | "right";

type Props = {
  side: Side;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  overlayClassName?: string;
  overlayStyle?: any;
  dialogClassName?: string;
  dialogStyle?: any;
  hiddenBreakpoint?: "md" | "lg";
};

const SlideOver = ({
  side,
  children,
  isOpen,
  onClose,
  overlayClassName,
  overlayStyle,
  dialogClassName,
  dialogStyle,
  hiddenBreakpoint = "md",
}: Props) => {
  return (
    <div className="isolate">
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className={clsx("relative z-10", {
            "md:hidden": hiddenBreakpoint === "md",
            "lg:hidden": hiddenBreakpoint === "lg",
          })}
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={clsx(
                "fixed inset-0 bg-secondary-500 bg-opacity-75 transition-opacity",
                overlayClassName,
              )}
              style={overlayStyle}
            />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className={clsx(
                  "pointer-events-none fixed inset-y-0 flex max-w-full",
                  { "left-0": side === "left", "right-0": side === "right" },
                )}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom={
                    side === "left" ? "-translate-x-full" : "translate-x-full"
                  }
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo={
                    side === "left" ? "-translate-x-full" : "translate-x-full"
                  }
                >
                  <Dialog.Panel
                    className={clsx(
                      "pointer-events-auto relative",
                      dialogClassName,
                    )}
                    style={dialogStyle}
                  >
                    <div className="flex h-full flex-col overflow-auto overflow-y-scroll bg-white py-6 shadow-xl scrollbar-hide">
                      {children}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default AsideMobile;
