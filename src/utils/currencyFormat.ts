export const formatCurrency = (number:number, symbol  : string = '$') => {
  // Add thousands separator
  const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Format the number as a currency string
  return `${symbol}${formattedNumber}`;
};