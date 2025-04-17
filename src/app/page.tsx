import Image from "next/image";

import Logo from "../../public/favicon.svg";
import LoginOptions from "./login-options";

export default function Login() {
  return (
    <div className="flex items-center justify-around p-5">
      <div className="flex h-[870px] w-[600px] items-center justify-center rounded-lg bg-[url(/assets/home_logo.svg)] bg-cover bg-no-repeat">
        <div className="flex gap-3">
          <Image src={Logo} alt="Logo do BookWise" />
          <span className="from-gradient1 to-gradient2 bg-gradient-to-r bg-clip-text text-4xl leading-16 font-bold text-transparent">
            BookWise
          </span>
        </div>
      </div>

      <LoginOptions />
    </div>
  );
}
