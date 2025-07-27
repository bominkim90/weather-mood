export default function getTodayDate() {
  const date = new Date();
  const year = date.getFullYear();
  let month = String(date.getMonth() + 1);
  month = month.length < 2 ? `0${month}` : month;
  let day = String(date.getDate());
  day = day.length < 2 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
}
