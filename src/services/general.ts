export const displayDate = (newdate: string): string => {
  const dateNow = new Date();
  const newDate = new Date(newdate);
  const time = newDate.getTime();
  const timeNow = dateNow.getTime();
  const minutes =
    Math.floor(timeNow / (1000 * 60)) - Math.floor(time / (1000 * 60));
  return `${minutes}`;
};
