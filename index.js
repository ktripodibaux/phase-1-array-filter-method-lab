// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
findMatching(drivers, 'Bobby')

function findMatching(array, string) {
    const matching = array.filter(array => array.toUpperCase() == string.toUpperCase())
    return matching;
}

function fuzzyMatch(array, string) {
    const numLetters = string.length
    const matching = array.filter(names => names.slice(0,numLetters) == string)
    return matching
}

function matchName(array, string) {
    const matching = array.filter(names => names.name == string)
    return matching
}

console.log(fuzzyMatch(drivers, 'Sa'))