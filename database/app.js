
// document.addEventListener("DOMContentLoaded", function () {
//     let list = document.getElementById("js-number");
//     let listItems = list.getElementsByTagName("li");

//     for (let i = 0; i < listItems.length; i++) {

//         // 2桁の数字にフォーマット
//         let twoDigitNumber = ("0" + (i + 1)).slice(-2);
//         listItems[i].textContent = twoDigitNumber;


//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     let list = document.getElementById("js-number-2");
//     let listItems = list.getElementsByTagName("li");

//     for (let i = 0; i < listItems.length; i++) {

//         // 2桁の数字にフォーマット
//         let twoDigitNumber = ("0" + (i + 1)).slice(-2);
//         listItems[i].textContent = twoDigitNumber;


//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     let list = document.getElementById("js-number-3");
//     let listItems = list.getElementsByTagName("li");

//     for (let i = 0; i < listItems.length; i++) {

//         // 2桁の数字にフォーマット
//         let twoDigitNumber = ("0" + (i + 1)).slice(-2);
//         listItems[i].textContent = twoDigitNumber;


//     }
// });





document.addEventListener("DOMContentLoaded", function () {
    numberListItems("js-number-1");
    numberListItems("js-number-2");
    numberListItems("js-number-3");
});

function numberListItems(listId) {
    let list = document.getElementById(listId);
    let listItems = list.getElementsByTagName("li");

    for (let i = 0; i < listItems.length; i++) {
        let twoDigitNumber = ("0" + (i + 1)).slice(-2);
        listItems[i].textContent = twoDigitNumber;
    }
}