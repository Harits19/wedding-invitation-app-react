
export interface DateDifference{
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function timeBetweenDates(toDate: Date) : DateDifference  {
  const dateEntered = toDate;
  const now = new Date();
  const difference = dateEntered.getTime() - now.getTime();

  let seconds = Math.floor(difference / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
