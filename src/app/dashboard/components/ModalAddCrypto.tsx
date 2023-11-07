"use client";

import { CoinData } from "@/@types/typeCoins";
import { Modal } from "@/components/ui/moda";
import { AddCryptonForm } from "./AddCryptonForm";

export function ModalAddCrypto({
  isOpen,
  isClose,
  data
}: {
  isOpen: boolean;
  isClose: React.Dispatch<React.SetStateAction<boolean>>;
  data:CoinData
}) {
  return (
    <Modal isOpen={isOpen} isClose={isClose}>
      <h2 className="text-center">Add Crypto</h2>
      <AddCryptonForm data={data} />
    </Modal>
  );
}
