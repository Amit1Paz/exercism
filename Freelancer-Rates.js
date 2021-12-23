export function dayRate(ratePerHour) {
    const hours = 8;
    return hours * ratePerHour;
}
  
export function daysInBudget(budget, ratePerHour) {
    const hours = 8;
    const days = Math.floor(budget / (ratePerHour * hours));
    return days;
}
  
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const hours = 8;
    const month = 22;
    const remainigDays = numDays % month;
    const discountDays = numDays - remainigDays
    const price = Math.ceil(discountDays * hours * ratePerHour * (1-discount) + remainigDays * hours * ratePerHour)
    return price
}
  