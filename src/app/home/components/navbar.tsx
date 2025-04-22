"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from "phosphor-react";
import { twMerge } from "tailwind-merge";

import Logo from "../../../../public/favicon.svg";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import LoginModal from "./login-modal";

interface NavbarProps {
  session: Session | null;
}

export default function Navbar({ session }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === "/home/inicio";
  const isExplorerPage = pathname === "/home/explorar";
  const isProfilePage = pathname === "/home/perfil";

  const handleButtonClick = (path: string) => {
    router.push(path);
  };

  const username =
    session?.user?.name?.length! > 15
      ? session?.user?.name?.slice(0, 15) + "..."
      : session?.user?.name;

  return (
    <aside className="flex h-full w-[232px] flex-col items-center rounded-xl bg-[url(/navbar.png)] bg-cover bg-no-repeat">
      <div className="mt-10 flex gap-2">
        <Image src={Logo} width={24} height={24} alt="Logo do BookWise" />
        <span className="from-gradient1 to-gradient2 bg-gradient-to-r bg-clip-text text-xl leading-16 font-bold text-transparent">
          BookWise
        </span>
      </div>

      <div className="mt-16 flex flex-col gap-5">
        <button
          onClick={() => handleButtonClick("/home/inicio")}
          className={twMerge(
            "durantion-200 flex cursor-pointer items-stretch gap-4 text-gray-400 transition-colors ease-in-out hover:text-gray-100",
            isHomePage && "text-gray-100",
          )}
        >
          <div
            className={twMerge(
              "from-gradient1 to-gradient2 w-1 rounded-full bg-gradient-to-bl opacity-0",
              isHomePage && "opacity-100",
            )}
          ></div>
          <ChartLineUp size={24} />
          <span className="leading-16">Início</span>
        </button>

        <button
          onClick={() => handleButtonClick("/home/explorar")}
          className={twMerge(
            "durantion-200 flex cursor-pointer items-stretch gap-4 text-gray-400 transition-colors ease-in-out hover:text-gray-100",
            isExplorerPage && "text-gray-100",
          )}
        >
          <div
            className={twMerge(
              "from-gradient1 to-gradient2 w-1 rounded-full bg-gradient-to-bl opacity-0",
              isExplorerPage && "opacity-100",
            )}
          ></div>
          <Binoculars size={24} />
          <span className="leading-16">Explorar</span>
        </button>

        {session && (
          <button
            onClick={() => handleButtonClick("/home/perfil")}
            className={twMerge(
              "durantion-200 flex cursor-pointer items-stretch gap-4 text-gray-400 transition-colors ease-in-out hover:text-gray-100",
              isProfilePage && "text-gray-100",
            )}
          >
            <div
              className={twMerge(
                "from-gradient1 to-gradient2 w-1 rounded-full bg-gradient-to-bl opacity-0",
                isProfilePage && "opacity-100",
              )}
            ></div>
            <User size={24} />
            <span className="leading-16">Perfil</span>
          </button>
        )}
      </div>
      {!session ? (
        <Dialog>
          <DialogTrigger asChild>
            <button className="mt-auto mb-6 flex cursor-pointer items-center justify-center gap-3 font-semibold text-gray-200 hover:text-gray-100">
              Fazer login
              <SignIn size={20} className="text-green-100" />
            </button>
          </DialogTrigger>
          <LoginModal />
        </Dialog>
      ) : (
        <button
          onClick={() => signOut()}
          className="mt-auto mb-6 flex cursor-pointer items-center justify-center gap-3 text-sm font-normal text-gray-200 hover:text-gray-100"
        >
          <div className="from-gradient1 to-gradient2 flex size-8 items-center justify-center rounded-full bg-gradient-to-b p-[2px]">
            <Image
              src={session?.user?.image!}
              alt="foto de perfil"
              width={30}
              height={30}
              style={{ height: "30px" }}
              className="rounded-full"
            />
          </div>
          {username}
          <SignOut size={20} className="text-red-400" />
        </button>
      )}
    </aside>
  );
}
