export function totalBirdCount(birdsPerDay) {
    let total = 0;
    for (let i = 0; i < birdsPerDay.length; i++) {
      total += birdsPerDay[i];
    }
    return total;
}
  
export function birdsInWeek(birdsPerDay, week) {
    const weekStart = (week - 1) * 7;
    const weekEnd = week * 7;
    const currentWeek = birdsPerDay.slice(weekStart, weekEnd);
    let total = 0;
    for (let i = 0; i < currentWeek.length; i++) {
      total += currentWeek[i];
    }
    return total;
}
  
export function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i += 2) {
      birdsPerDay[i]++;
    }
    return birdsPerDay;
}
  