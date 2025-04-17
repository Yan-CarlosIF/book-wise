import HomeHeader from "./components/home-header";
import Navbar from "./components/navbar";

export const metadata = {
  title: "Chama",
  description: "Aplicação com layout",
};

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default async function HomeLayout({
  children,
}: Readonly<HomeLayoutProps>) {
  return (
    <div className="flex h-screen p-5">
      <Navbar />
      <main className="mt-14 flex w-[calc(100vw-20rem)] flex-col px-24">
        <HomeHeader />
        {children}
      </main>
    </div>
  );
}
