export const getDateAsString = (
  locale: "es" | "en",
  year: number,
  month: number
) => {
  switch (month) {
    case 0:
      return `${locale == "es" ? "En." : "Jan."} ${year}`;
    case 1:
      return `Feb. ${year}`;
    case 2:
      return `Mar. ${year}`;
    case 3:
      return `${locale == "es" ? "Abr." : "Apr."} ${year}`;
    case 4:
      return `May. ${year}`;
    case 5:
      return `Jun. ${year}`;
    case 6:
      return `Jul ${year}`;
    case 7:
      return `${locale == "es" ? "Agto." : "Aug."} ${year}`;
    case 8:
      return `${locale == "es" ? "Sept." : "Sep."} ${year}`;
    case 9:
      return `Oct. ${year}`;
    case 10:
      return `Nov. ${year}`;
    case 11:
      return `${locale == "es" ? "Dic." : "Dec."} ${year}`;
  }
};
