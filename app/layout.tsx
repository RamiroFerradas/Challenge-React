"use client";
import "./tailwind.globals.css";
import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import store from "./redux/store";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Challenge React",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
