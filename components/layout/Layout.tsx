import * as React from "react";
import Navbar from "../navbar/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--poppins",
});

interface props {
  children: JSX.Element;
}

interface LayoutContextType {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Context = React.createContext<LayoutContextType>({
  currentPage: "",
  setCurrentPage: () => {},
});

export default function Layout({ children }: props) {
  const [currentPage, setCurrentPage] = React.useState("about");

  return (
    <Context.Provider value={{ currentPage, setCurrentPage }}>
      <Navbar />
      <main className={`${poppins.variable}`}>{children}</main>
    </Context.Provider>
  );
}

export const useLayoutContext = () => {
  const context = React.useContext(Context);
  return context;
};
