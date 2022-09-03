
export default function dateFormat(date:string) {
  const newDate = new Date(date);
  return newDate
    .toLocaleString('en-US', {
      month: 'long',
      year: 'numeric',
    });
}
