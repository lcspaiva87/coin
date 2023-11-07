

import { Modal } from "@/components/ui/moda";
import AddCryptonForm from "./AddCryptonForm";
export default  function ModalAddCrypto({
  isOpen,
  isClose,
data
}: {
  isOpen: boolean;
  isClose: React.Dispatch<React.SetStateAction<boolean>>;
  data:any
}) {

  return (
    <Modal isOpen={isOpen} isClose={isClose}>
      <h2 className="text-center">Add Crypto</h2>
      <AddCryptonForm  data={data} />
    </Modal>
  );
}
