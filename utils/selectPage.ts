interface props {
  currentPage: string;
}

export default function ArrowNextPage({ currentPage }: props): string {
  let r = "";
  if (currentPage == "about") {
    document.documentElement.style.setProperty(" --arrow-color", "#0000");
    r = "skills";
  }
  if (currentPage == "skills") r = "proyects";
  if (currentPage == "proyects") r = "contact";
  if (currentPage == "contact") r = "about";
  return r;
}
