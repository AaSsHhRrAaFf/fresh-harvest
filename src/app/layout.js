// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "@/components/layout/Footer";
//import { Provider } from "react-redux";
//import { store } from "@/store/store";
import { ReduxProvider } from "./providers";
import { Providers } from "@/store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fresh Harvests - Fresh Fruits and Vegetables",
  description:
    "Fresh Harvests provides the freshest and most flavorful fruits and vegetables directly from local farms to your table.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
