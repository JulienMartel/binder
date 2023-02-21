import Image from "next/image";

import logoDark from "@/../public/logo-dark.png";
import logoLight from "@/../public/logo-light.png";

export function Logo() {
  return (
    <>
      <Image className="hidden dark:block" src={logoDark} alt="Binder Logo" />
      <Image className="dark:hidden" src={logoLight} alt="Binder Logo" />
    </>
  );
}
