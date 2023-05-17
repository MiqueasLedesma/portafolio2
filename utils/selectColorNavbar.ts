interface props {
  currentPage: string;
}

function selectTitleColor({ currentPage }: props) {
  switch (currentPage) {
    case "about":
      return "text-blue-600";
    case "skills":
      return "text-white";
    case "proyects":
      return "text-white/75";
    case "contact":
      return "text-white";
    default:
      return "text-white";
  }
}

function selectUlColor({ currentPage }: props) {
  switch (currentPage) {
    case "about":
      return "text-black";
    case "skills":
      return "text-white";
    case "proyects":
      return "text-white/75";
    case "contact":
      return "text-black";
    default:
      return "text-white";
  }
}

export { selectTitleColor, selectUlColor };
