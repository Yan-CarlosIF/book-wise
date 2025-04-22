"use client";

import { StaticImageData } from "next/image";
import { redirect } from "next/navigation";

import GithubLogo from "../../public/assets/brandsLogos/logos_github-icon.svg";
import GoogleLogo from "../../public/assets/brandsLogos/logos_google-icon.svg";
import RocketLogo from "../../public/assets/brandsLogos/logos_rocket-icon.svg";
import LoginLabel from "./components/login-label";
import { signIn } from "next-auth/react";

export default function LoginOptions() {
  return (
    <div className="flex w-[375px] flex-col justify-center">
      <h2 className="text-2xl leading-14 font-bold text-gray-100">
        Boas vindas!
      </h2>
      <p className="leading-16 text-gray-200">
        Faça seu login ou acesse como visitante.
      </p>

      <div className="mt-10 flex flex-col gap-4">
        {/* <LoginLabel
          img={GoogleLogo as StaticImageData}
          content="Login com Google"
        /> */}
        <LoginLabel
          className="fill-white"
          img={GithubLogo as StaticImageData}
          content="Login com GitHub"
          onClick={() => signIn("github", { callbackUrl: "/home/inicio" })}
        />
        <LoginLabel
          img={RocketLogo as StaticImageData}
          content="Acessar como visitante"
          onClick={() => {
            redirect("/home/inicio");
          }}
        />
      </div>
    </div>
  );
}
