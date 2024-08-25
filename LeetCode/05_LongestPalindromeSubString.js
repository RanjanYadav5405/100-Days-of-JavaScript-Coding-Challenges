var longestPalindrome = function(s){
    let LongestSubString ="";

    for(let i =0 ;i<s.length; i++){
        for(let j = i + 1; j<s.length; j++){
            let subString = s.slice(i , j)
            if(isPalindrome(subString) && subString.length > LongestSubString)
        }
    }
}






const s = "babad";
console.log(longestPalindrome(s)); // Output: "bab" or "aba"