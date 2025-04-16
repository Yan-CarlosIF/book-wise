import Image, { StaticImageData } from "next/image";

import GithubLogo from "@/assets/brandsLogos/logos_github-icon.svg";
import GoogleLogo from "@/assets/brandsLogos/logos_google-icon.svg";
import RocketLogo from "@/assets/brandsLogos/logos_rocket-icon.svg";

import Logo from "../../public/favicon.svg";
import LoginLabel from "./components/login-label";

export default function Home() {
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex h-[870px] w-[600px] items-center justify-center rounded-lg bg-[url(../assets/home_logo.svg)] bg-cover bg-no-repeat">
        <div className="flex gap-3">
          <Image src={Logo} alt="Logo do BookWise" />
          <span className="from-gradient1 to-gradient2 bg-gradient-to-r bg-clip-text text-4xl leading-16 font-bold text-transparent">
            BookWise
          </span>
        </div>
      </div>

      <div className="mr-[300px] flex w-[375px] flex-col justify-center">
        <h2 className="text-2xl leading-14 font-bold text-gray-100">
          Boas vindas!
        </h2>
        <p className="leading-16 text-gray-200">
          Faça seu login ou acesse como visitante.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <LoginLabel
            src={GoogleLogo as StaticImageData}
            content="Login com Google"
          />
          <LoginLabel
            className="fill-white"
            src={GithubLogo as StaticImageData}
            content="Login com GitHub"
          />
          <LoginLabel
            src={RocketLogo as StaticImageData}
            content="Acessar como visitante"
          />
        </div>
      </div>
    </div>
  );
}
