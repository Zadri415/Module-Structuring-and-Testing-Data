function getOrdinalNumber(num) {
  const lastDigits = num % 100;
  if (lastDigits >= 11 && lastDigits <= 13) {
    return num + "th";
  }
  switch (lastDigits % 10) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}

module.exports = getOrdinalNumber;
