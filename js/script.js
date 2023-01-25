/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week3 Day3 Daily Challenge: Show Only The Letters
 */

/*
Create an input type text that takes/shows only letters. 
(ie. numbers and special characters won’t be accepted)
*/

let inputText = document.getElementById("inputText");
let regex = /[a-zA-Z]/;
let test = "";
inputText.addEventListener("input", (ev) => {
    //console.log(test.replace("444"));
    let inputTextAll = ev.target.value;
    let newValue = '' + inputTextAll.charAt(inputTextAll.length - 1);
    console.log(newValue);
    if (newValue.search(regex) == -1) {
        inputTextAll = inputTextAll.replace(newValue, '');
        ev.target.value = inputTextAll;
    }
});