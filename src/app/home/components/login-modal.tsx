"use client";

import { StaticImageData } from "next/image";
import { signIn } from "next-auth/react";

import GithubLogo from "/public/assets/brandsLogos/logos_github-icon.svg";
import GoogleLogo from "/public/assets/brandsLogos/logos_google-icon.svg";
import LoginLabel from "@/app/components/login-label";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function LoginModal() {
  return (
    <DialogContent className="flex flex-col items-center justify-center rounded-[12px] border-none bg-gray-700 px-18 py-14 outline-purple-100 [&>button]:cursor-pointer [&>button]:text-gray-400">
      <DialogTitle className="leading-14 text-gray-200">
        Faça login para deixar sua avaliação
      </DialogTitle>
      <div className="mt-10 flex flex-col gap-4">
        {/* <LoginLabel
          img={GoogleLogo as StaticImageData}
          content="Entrar com Google"
          className="w-[375px] text-lg font-normal"
        /> */}
        <LoginLabel
          className="w-[375px] fill-white text-lg font-normal"
          img={GithubLogo as StaticImageData}
          content="Entrar com GitHub"
          onClick={() => signIn("github", { callbackUrl: "/home/inicio" })}
        />
      </div>
    </DialogContent>
  );
}
