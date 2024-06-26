import { Judson } from "next/font/google";
import { Libre_Bodoni } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";

export const judson = Judson({
  subsets: ["latin"],
  variable: "--font-judson",
  weight: "400",
});

export const libre_bodoni = Libre_Bodoni({
  subsets: ["latin"],
  variable: "--font-libre-bodoni",
  weight: "400",
});

export const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre-bodoni",
  weight: "400",
});
