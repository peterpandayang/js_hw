var lengthOfLongestSubstring = function(str) {
    var chars = [];
    var count = 0;
    
    for (var i = 0; i < str.length; i++) {
        if (chars.indexOf(str[i]) === -1 ) {
            count++;
            chars.push(str[i]);
        }
    }
    
    return count;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbb"));