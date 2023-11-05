import { Footer } from "@/components/ui/footer";

import { Header } from "./components/header";
import { Sidebar } from "./components/Sidebar";

export default async function Dashboard() {
  return (
    <>
      <div className="flex h-full flex-col">
        <Header />
        <main className="relative flex-grow pb-10 pt-6 lg:bg-[#f9f9f9]">
        <Sidebar />

        </main>
        <hr className="container mt-6 text-secondary-300 md:hidden" />
        <Footer />
      </div>
    </>
  );
}
