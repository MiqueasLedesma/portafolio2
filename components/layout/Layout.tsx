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

interface ModalInfoType {
  title: string;
  image: string;
  desc: string;
  github: string;
}

interface LayoutContextType {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalInfo: ModalInfoType;
  setModalInfo: React.Dispatch<React.SetStateAction<ModalInfoType>>;
}

const defaultLayoutContextValue: LayoutContextType = {
  currentPage: "",
  setCurrentPage: () => {},
  open: false,
  setOpen: () => {},
  modalInfo: { desc: "", image: "", title: "", github: "" },
  setModalInfo: () => {},
};

const Context = React.createContext<LayoutContextType>(
  defaultLayoutContextValue
);

export default function Layout({ children }: props) {
  const [currentPage, setCurrentPage] = React.useState("about");
  const [open, setOpen] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({
    title: "",
    image: "",
    desc: "",
    github: "",
  });

  const contextValue = {
    currentPage,
    setCurrentPage,
    open,
    setOpen,
    modalInfo,
    setModalInfo,
  };

  return (
    <Context.Provider value={contextValue}>
      <Navbar />
      <main className={`${poppins.variable}`}>{children}</main>
    </Context.Provider>
  );
}

export const useLayoutContext = () => {
  const context = React.useContext(Context);
  return context;
};
