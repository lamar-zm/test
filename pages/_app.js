import "@/styles/globals.css";
import { useEffect } from "react";
import "@fontsource/el-messiri";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Add any additional font-related configuration or operations here
  }, []);

  return (
    <main className="font-Rye font-Montserrat font-messiri">
      <Component {...pageProps} />
    </main>
  );
}