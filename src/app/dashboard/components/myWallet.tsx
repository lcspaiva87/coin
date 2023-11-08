

import { listCoin } from "@/data/fetchCoin";
import ModalAddCrypto from "./ModalAddCrypto";
import TableMyWallet from "./tableMyWallet";

export default async function MyWallet() {
  const response = await listCoin()

  return (
    <>
      <TableMyWallet />

      <ModalAddCrypto data={response} />
    </>
  );
}
