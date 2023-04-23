import * as React from "react";
import styles from "./Arrow.module.css";
import { useLayoutContext } from "../layout/Layout";
import ArrowNextPage from "@/utils/selectPage";
interface props {}

export default function Arrow({}: props) {
  const { currentPage } = useLayoutContext();
  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    let element = document.getElementById(ArrowNextPage({ currentPage }));
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div onClick={handleClick} className={styles.arrow}>
      <span></span>
      <span></span>
    </div>
  );
}
