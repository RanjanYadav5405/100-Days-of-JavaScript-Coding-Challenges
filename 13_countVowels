// Count vowels in String and replace Duplicate

const CountVowels = (vowels) => {
    const lowerVowels = vowels.toLowerCase()
    const uniqueVowel = [...new Set(lowerVowels)]
    console.log(uniqueVowel)

    let count = 0;
    for (let i = 0; i < uniqueVowel.length; i++) {
        if (uniqueVowel[i] === 'a' || uniqueVowel[i] === 'e' || uniqueVowel[i] === 'i' || uniqueVowel[i] === 'o' || uniqueVowel[i] === 'u') {
            count++;
        }
    }
    return count;
}



console.log(CountVowels("RanjaIOuen Yadav")) // 5

//===============================================================================================

// another way without remove duplcates value

const vowelsCount = (str) =>{
 
     const vowels =['a', 'e', 'i', 'o', 'u']

      let arr = str.split('')
      console.log(arr)

      let counts = 0;

      for (const element of arr) {

        if(vowels.includes(element.toLowerCase())){
            counts++;
        }
        
      }
      return counts;

}

console.log(vowelsCount("RanjaIOuen Yadav"))