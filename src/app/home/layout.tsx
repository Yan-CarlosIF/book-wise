import { getServerSession } from "next-auth";

import Navbar from "./components/navbar";

export const metadata = {
  title: "Home | BookWise",
  description: "Aplicação com layout",
};

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default async function HomeLayout({
  children,
}: Readonly<HomeLayoutProps>) {
  const session = await getServerSession();

  return (
    <div className="flex h-screen p-5">
      <Navbar session={session} />
      <main className="mt-14 flex w-[calc(100vw-20rem)] flex-col px-24">
        {children}
      </main>
    </div>
  );
}
