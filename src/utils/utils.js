import moment from "moment";

export const dateFormat = (date, format = "MMM YYYY") => {
  return moment(date).format(format);
};

export const dateDiff = (start, end, format = "YM") => {
  if (!start) {
    start = new Date();
  }

  if (!end) {
    end = new Date();
  }

  const startMom = moment(start);
  const endMom = moment(end);

  const years = endMom.diff(startMom, "year");
  startMom.add(years, "years");

  const months = endMom.diff(startMom, "months");
  startMom.add(months, "months");

  if (format === "Y") {
    return years;
  } else if (format === "YM") {
    return `${months} ${years}`;
  }

  return `${years} yrs ${months} mos`;
};
