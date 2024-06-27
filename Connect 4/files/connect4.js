"use strict";
let columns = 7;
let rows = 7;
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    let inputcolumns = Number(prompt("Please enter your amount of columns (4-9)", "7"));
    let inputrows = 7;
    checkifvalidcolumns();
    function invalidcolumns() {
        inputcolumns = Number(prompt("Invalid input. Please enter a column amount between 4 and 9.", "7"));
        checkifvalidcolumns();
    }
    function checkifvalidcolumns() {
        if (Number(inputcolumns) < 4) {
            invalidcolumns();
        }
        else {
            if (Number(inputcolumns) > 9) {
                invalidcolumns();
            }
            else {
                validcolumns();
            }
        }
    }
    function validcolumns() {
        columns = inputcolumns;
        inputrows = Number(prompt("Please enter your amount of rows (4-9)", "7"));
        checkifvalidrows();
    }
    function checkifvalidrows() {
        if (Number(inputrows) < 4) {
            invalidrows();
        }
        else {
            if (Number(inputrows) > 9) {
                invalidrows();
            }
            else {
                validrows();
            }
        }
    }
    function invalidrows() {
        inputrows = Number(prompt("Invalid input. Please enter a row amount between 4 and 9.", "7"));
        checkifvalidrows();
    }
    function validrows() {
        rows = inputrows;
        console.log(rows.toString() + columns.toString());
        setboard();
    }
}
function setboard() {
}
