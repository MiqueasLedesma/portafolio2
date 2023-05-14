interface props {
  currentPage: string;
}

export default function selectColorNavbar({ currentPage }: props) {
  switch (currentPage) {
    case "about":
      return "text-black";
    case "skills":
      return "text-white";
    case "proyects":
      return "text-blue-600";
    case "contact":
      return "text-black";
    default:
      return "text-white";
  }
}
