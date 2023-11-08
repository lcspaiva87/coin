

import { getUser } from "@/lib/auth";

import FormCreateOrder from "./formCreateOrder";
export default function ModalAddCrypto() {

  const { userId } = getUser();





  return (
    <FormCreateOrder userId={userId}  />
  );
}
