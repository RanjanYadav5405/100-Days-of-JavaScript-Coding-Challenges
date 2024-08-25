function findWordWithMostRepeats(words) {
    let maxRepeats = 0;
    let result = '';

    for (const word of words) {
        console.log(word)
        const count = {};
        let repeats = 0;

        for (const char of word.toLowerCase()) {
            // console.log(char)
            count[char] = (count[char] || 0) + 1;
        }

        repeats = Object.values(count).filter(v => v > 1).length;
        console.log(repeats)

        if (repeats > maxRepeats) {
            maxRepeats = repeats;
            result = word;
        }
    }

    return result;
}

// Example usage
const words = ["programming", "algorithm", "data", "function"];
console.log(findWordWithMostRepeats(words)); // Output: "programming"


// console.log(searchMaxRepeatWord("Hello apple pie"))   