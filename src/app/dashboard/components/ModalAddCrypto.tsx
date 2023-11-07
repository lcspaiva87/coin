"use client";

import { Modal } from "@/components/ui/moda";
import { AddCryptonForm } from "./AddCryptonForm";

export function ModalAddCrypto({
  isOpen,
  isClose,
}: {
  isOpen: boolean;
  isClose: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal isOpen={isOpen} isClose={isClose}>
      <h2 className="text-center">Add Crypto</h2>

      <AddCryptonForm />
    </Modal>
  );
}
