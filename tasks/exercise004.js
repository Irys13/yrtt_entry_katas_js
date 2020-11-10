// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str){
    let extraLetters = "ay";

    return str.split(/([_\W])/).map(function(x){ 
        return /[a-zA-Z]+/.test(x) ? x.slice(1) + x[0] + extraLetters : x;
    }).join('');
}

module.exports = {
    pigLatin
};
