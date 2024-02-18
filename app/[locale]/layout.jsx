//providers
import { Providers } from "./redux/provider";
// toast
import { ToastContainer } from "react-toastify";
// css
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Ibdaa",
  description: "Ibdaa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
