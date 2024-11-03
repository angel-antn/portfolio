export const getDateAsString = (
  locale: "es" | "en",
  year: number,
  month: number
) => {
  switch (month) {
    case 1:
      return `${locale == "es" ? "En." : "Jan."} ${year}`;
    case 2:
      return `Feb. ${year}`;
    case 3:
      return `Mar. ${year}`;
    case 4:
      return `${locale == "es" ? "Abr." : "Apr."} ${year}`;
    case 5:
      return `May. ${year}`;
    case 6:
      return `Jun. ${year}`;
    case 7:
      return `Jul ${year}`;
    case 8:
      return `${locale == "es" ? "Agto." : "Aug."} ${year}`;
    case 9:
      return `${locale == "es" ? "Sept." : "Sep."} ${year}`;
    case 10:
      return `Oct. ${year}`;
    case 11:
      return `Nov. ${year}`;
    case 12:
      return `${locale == "es" ? "Dic." : "Dec."} ${year}`;
  }
};
