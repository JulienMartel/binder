import { Bakbak_One } from "@next/font/google";

const bakbakOne = Bakbak_One({
  weight: "400",
  variable: "--font-bakbak-one",
  display: "swap",
});
const headingFont = `${bakbakOne.variable} font-heading`;

export { headingFont };
