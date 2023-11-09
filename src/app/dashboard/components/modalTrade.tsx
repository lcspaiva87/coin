import { getUser } from "@/lib/auth";
import { FormTrade } from "./formTrade";

export default function ModalTrade() {
  const { userId } = getUser()
  return (
    <div>
     <FormTrade userId={userId} />
    </div>
  );
}
