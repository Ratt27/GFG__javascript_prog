const displayMessage="I am a Mentor at GeeksforGeeks";
const index=5;
console.log(displayMessage.charAt(index));
console.log(displayMessage.charCodeAt(index));
const findCharacter=(text,char)=>text.indexOf(char)===-1?"char not found":"char found";
const result=findCharacter("Rattrizghosh","a");
console.log(result);
const message="RattrizGhosh";
const vowels="aeiou";
for(let char of message)
{
    if(vowels.includes(char))
    {
        console.log(`${char} is a vowel`);
    }
}