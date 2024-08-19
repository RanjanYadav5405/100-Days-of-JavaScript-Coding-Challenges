const AngramChecker = (str1, str2) => {
    return str1.toLowerCase().split('').sort().join() === str2.toLowerCase().split('').sort().join()
}


console.log((AngramChecker("Listen", "Silent")))  // true
console.log((AngramChecker("Listenqe", "Silentre")))  // false