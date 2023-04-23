interface props {
  currentPage: string;
}

export default function selectColorNavbar({ currentPage }: props) {
  switch (currentPage) {
    case "about":
      return "text-slate-800";
    case "contact":
      return "text-black";
    case "proyects":
      return "text-black";
    case "skills":
      return "text-black";
    default:
      return "text-white";
  }
}
