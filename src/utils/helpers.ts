const currencyOptions = {
  style: "currency",
  currency: "EUR",
};

export function formatCurrency(value) {
  return new Intl.NumberFormat("en", currencyOptions).format(value);
}

const dateOptions = {
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
};

export function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", dateOptions).format(date);
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}
