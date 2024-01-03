import "@/styles/globals.css";
import { Rye, Montserrat } from "next/font/google";

const rye = Rye({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-Rye",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-Montserrat",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${rye.variable} ${montserrat.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}