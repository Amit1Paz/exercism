export function frontDoorResponse(line) {
    return line[0];
}
  
export function frontDoorPassword(word) {
    const lowerSliced = word.slice(1).toLowerCase();
    const firstLetter = word[0].toUpperCase();
    return firstLetter + lowerSliced;
}
  
export function backDoorResponse(line) {
    const trimmedLine = line.trim();
    return trimmedLine[trimmedLine.length-1];
}
  
export function backDoorPassword(word) {
    const lowerSliced = word.slice(1).toLowerCase();
    const firstLetter = word[0].toUpperCase();
    return firstLetter + lowerSliced + ", please";
}  