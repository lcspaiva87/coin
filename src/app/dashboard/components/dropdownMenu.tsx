import { getUser } from "@/lib/auth";
import { Menus } from "./menu";

export default function DropdownMenu({ className }: { className: string }) {
  const { name, avatarUrl } = getUser();
  return (
    <Menus name={name} className={className} avatarUrl={avatarUrl} />
  );
}
