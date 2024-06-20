export const countNumOfChars = (string) => {
  const numOfChars = string.length;
  return numOfChars;
};

export const formatDate = (date) => {
  let formattedDate = new Date(date);
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    weekday: "short",
  };

  return formattedDate.toLocaleDateString("en-GB", options);
};
