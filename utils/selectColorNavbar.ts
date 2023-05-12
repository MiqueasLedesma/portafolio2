interface props {
  currentPage: string;
}

export default function selectColorNavbar({ currentPage }: props) {
  switch (currentPage) {
    case "about":
      return "text-black";
    case "contact":
      return "text-white";
    case "proyects":
      return "text-blue-600";
    case "skills":
      return "text-white";
    default:
      return "text-white";
  }
}
