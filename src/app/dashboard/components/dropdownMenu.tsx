import { getUser } from "@/lib/auth";
import { Menus } from "./menu";

export default function DropdownMenu() {
  const { name, avatarUrl } = getUser();
  return (
    <Menus name={name}  avatarUrl={avatarUrl} />
  );
}
