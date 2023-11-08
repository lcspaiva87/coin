"use client";
import { typeListCoin } from "@/@types/typeListCoin";
import FormattedNumber from "@/app/(home)/components/formattedNumber";
import Button from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import { useCoin } from "@/hooks/userCoin";
import useModalStore from "@/store/modal";

import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";

export default function TableMyWallet() {
  const { isOpen, openModal, closeModal  } = useModalStore();
  const { coin, isLoading ,isError } = useCoin();
  return (
    <div className="shadow-lg max-sm:shadow-none max-sm:bg-transparent rounded-lg bg-white ">
      <hr className=" mt-6 text-secondary-300 md:hidden" />
      <div className="flex mt-3 items-center gap-4 rounded-t-lg px-2  md:flex md:p-6">
        <Icons.CryptoWallet className="h-6 w-6 md:h-8 md:w-8 " />
        <span className="text-h5 font-bold md:text-h4">My Wallet</span>
        <Button
          dataTest="add-crypto"
          className="ml-auto h-8 w-8 rounded-full !p-0 md:h-auto md:w-auto md:!px-4 md:!py-2 flex justify-center items-center"
          onClick={openModal}
        >
          <Icons.Plus />
          <span className="ml-2 hidden md:inline">Add crypto</span>
        </Button>
      </div>

      <div className=" max-h-[400px] w-full overflow-auto  scrollbar-hide">
        <div className="mt-4 grid grid-cols-2 gap-4  md:hidden">
          {coin.map(
            ({
              acronym,
              amount,
              icon,
              id,
              name,
              percentage,
              priceUsd,
              userId,
            }: typeListCoin) => (
              <SingleEntryCard
                coin={coin}
                id={id}
                name={name}
                icon={icon}
                priceUsd={priceUsd}
                percentage={percentage}
                amount={amount}
                userId={userId}
                acronym={acronym}
                key={id}
              />
            ),
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-14 py-[10rem] text-center ">
      {isLoading && !coin.length &&(<LoadingSpinner className="mx-auto" />)}
        {!isLoading &&!coin.length && (
          <>
            <Icons.NoWallets className="h-12 md:h-[68px]" />
            <p className="mt-4 font-bold md:mt-6 md:text-h5">
              Nothing here yet...
            </p>
            <p className="mt-2 text-small-label md:text-label">
              Add a crypto and start earning
            </p>
          </>
        )}
        {coin.length > 0 && (
          <div className=" max-h-[400px] w-full overflow-auto  scrollbar-hide">
            <table className=" hidden w-full table-auto text-left md:table">
              <thead>
                <tr className="text-left">
                  <Th className="w-1/12">#</Th>
                  <Th className="w-1/3">Crypto</Th>
                  <Th className="w-1/3">Holdings</Th>
                  <Th className="w-1/3">Change</Th>
                  <Th className="w-1/12">Trade</Th>
                </tr>
              </thead>
              <tbody>
                {coin.map((coin: typeListCoin, index: number) => (
                  <Row coin={coin} index={index} key={coin.id} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
const SingleEntryCard = (coin: typeListCoin) => {
  return (
    <div className="overflow-hidden  rounded-lg shadow-[0px_8px_16px_rgba(0,0,0,0.1)]">
      <div className="flex items-center bg-primary-100 px-2 py-4 text-small-label">
        <Image src={coin.icon} width={16} height={16} alt="" />
        <span className="ml-2 text-xs font-bold">{coin.name}</span>
        <span className="ml-1 text-secondary-400 font-semibold text-xs	 ">
          {coin.acronym.toLocaleUpperCase()}
        </span>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-secondary-400">Holdings</span>
          <FormattedNumber
            number={coin.priceUsd * coin.amount}
            className="whitespace-nowrap text-label"
            options={{
              signDisplay: "never",
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 4,
              minimumFractionDigits: 4,
            }}
          />
          <div className="flex items-center">
            <span className="text-small-label text-primary-400">
              {coin.amount}
            </span>
            <span className="ml-1 text-primary-400 font-semibold text-xs	 ">
              {coin.acronym.toLocaleUpperCase()}
            </span>
          </div>
        </div>

        <hr className="text-secondary-200" />

        <div className="flex flex-col gap-1">
          <span className="text-xs text-secondary-400">Change</span>
          <FormattedNumber
            number={coin.percentage}
            className={clsx("text-label", {
              "text-tertiary-700": coin.percentage > 0,
              "text-quaternary-700": coin.percentage < 0,
            })}
            options={{
              signDisplay: "always",
              style: "percent",
              maximumFractionDigits: 4,
              minimumFractionDigits: 4,
            }}
          />
        </div>
        <Button
          dataTest="trade-crypto-trade"
          className="w-full py-1"
          onClick={() => {}}
        >
          Trade
        </Button>
      </div>
    </div>
  );
};

const Row = ({ coin, index }: { coin: typeListCoin; index: number }) => {
  return (
    <tr className="max-h-16 transition-colors  last:rounded-b-lg even:bg-secondary-100 hover:bg-secondary-100 even:hover:bg-secondary-200">
      <Cell className="rounded-bl-lg text-label">{index}</Cell>
      <Cell className="flex items-center gap-2">
        <Image src={coin.icon} alt="" width={32} height={32} />
        <p className="text-small-label">
          {coin.name}
          <span className="text-secondary">{coin.acronym}</span>
        </p>
      </Cell>
      <Cell>
        <div className="flex flex-col gap-1">
          <FormattedNumber
            number={coin.priceUsd * coin.amount}
            className="text-label"
            options={{
              signDisplay: "never",
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 4,
              minimumFractionDigits: 4,
            }}
          />
          <span className="text-small-label text-primary-400">
            {coin.amount} {coin.acronym}
          </span>
        </div>
      </Cell>
      <Cell>
        <FormattedNumber
          number={coin.percentage}
          className={clsx({
            "text-tertiary-700": coin.percentage > 0,
            "text-quaternary-700": coin.percentage < 0,
          })}
          options={{
            signDisplay: "always",
            style: "percent",
            maximumFractionDigits: 4,
            minimumFractionDigits: 4,
          }}
        />
      </Cell>
      <Cell className="rounded-br-lg">
        <TradePopover coin={coin} />
      </Cell>
    </tr>
  );
};

const Cell = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <td className={clsx("px-6 py-4 text-left", className)}>{children}</td>;
};

const Th = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <th
      className={clsx(
        "px-6 py-4 text-label font-normal text-secondary",
        className,
      )}
    >
      {children}
    </th>
  );
};

const TradePopover = ({ coin }: { coin: typeListCoin }) => {
  return (
    <Popover className="relative">
      <Popover.Button
        className="flex w-full items-center justify-center"
        // onClick={() => {
        //   setModalTransferringCrypto(true)

        //   setvalueTrade([coin])
        // }}
      >
        <Icons.Trade className="h-4 w-4" />
      </Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        className="absolute left-1/2 top-full isolate z-50 mt-4 flex origin-top -translate-x-1/2 items-center justify-center rounded bg-primary px-6 py-2 text-center shadow-[0px_4px_8px_rgba(0,0,0,0.1)]"
      >
        <Popover.Panel static>
          <div
            className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-primary"
            aria-hidden
          />
          <span className="text-label text-white">Transfer Crypto</span>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
