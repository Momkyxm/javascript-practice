//hello
/*hello how
are
you 
*/
let FirstName = "Jane";
let age = 5*10;
let gender = "female";

console.log(FirstName);
console.log(age);
console.log(gender);
console.log (`${FirstName} is a ${age}year old ${gender}`);
/*let username;
username = window.prompt("whats your name");
console.log (username);

let mood = prompt("How are you doing today? (Type 'happy' or 'sad')");

if (mood.toLowerCase() === "happy") {
    alert("That's wonderful! Keep shining!");} else if (mood.toLowerCase() === "sad") {
    alert("I'm sorry to hear that. I hope your day gets better!");
} else {
    alert("That wasn't one of the options, but I hope you're doing okay!");
}
*/
let isHappy = confirm("How are you doing today?\n\nClick 'OK' for Happy or 'Cancel' for Sad.");

if (isHappy) {
    alert("Great! Glad to see you're having a good day!");
} else {
    alert("Hang in there. Better days are coming!");
}