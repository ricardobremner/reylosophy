// FORMATO DE FECHA
export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'es-ES',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

//VARIABLES DE ENTORNO
export const {
  API_URL
} = process.env;