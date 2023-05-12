interface props {
  currentPage: string;
}

export default function selectColorNavbar({ currentPage }: props) {
  switch (currentPage) {
    case "about":
      return "text-white";
    case "contact":
      return "text-white";
    case "proyects":
      return "text-white";
    case "skills":
      return "text-white";
    default:
      return "text-white";
  }
}
