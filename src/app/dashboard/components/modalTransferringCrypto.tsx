import { getUser } from "@/lib/auth";
import { FormTrade } from "./formTrade";



export function ModalTransferringCrypto() {
  const {userId} =getUser()
  return (
    <FormTrade userId={userId} />
  )
}
