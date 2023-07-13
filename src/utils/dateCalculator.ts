const dateCalculator = (dateString: string) => {
  const newDate = new Date(dateString);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();

  return `${year}년 ${month}월 ${date}일`
}

export default dateCalculator;