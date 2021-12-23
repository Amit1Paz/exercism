
export function canExecuteFastAttack(knightIsAwake) {
    return !knightIsAwake
}
  
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
      return true
    } else {
      return false
    }
}
  
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    if (prisonerIsAwake && !archerIsAwake) {
      return true
    } else {
      return false
    }
}
  
export function canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent
) {
    if  (!archerIsAwake && petDogIsPresent || !archerIsAwake && !knightIsAwake && prisonerIsAwake) {
      return true
    } else {
      return false
    }
}
  