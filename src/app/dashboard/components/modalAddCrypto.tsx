

import { getUser } from "@/lib/auth";
import FormCreateOrder from "./formCreateOrder";
export default function ModalAddCrypto(data:any) {
  const { userId } = getUser();
  return (
    <FormCreateOrder userId={userId} data={data}  />
  );
}
