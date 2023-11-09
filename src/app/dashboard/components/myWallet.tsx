

import { CoinData } from "@/@types/typeCoins";
import { listCoin } from "@/data/fetchCoin";
import ModalAddCrypto from "./modalAddCrypto";
import ModalTrade from "./modalTrade";
import TableMyWallet from "./tableMyWallet";

export default async function MyWallet() {
  const response:CoinData = await listCoin()

  return (
    <div className="bg-white mb-[5rem]">
      <TableMyWallet />
      <ModalTrade />
      <ModalAddCrypto data={response} />
    </div>
  );
}
