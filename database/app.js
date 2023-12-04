// HTML/CSSのログインフォームを拡張し、
// 一度Sign Inのボタンが押されたら次回以降、
// emailとpasswordが自動入力される機能をlocalStorageを用いて実装してください。



 // localStorageにデータを保存

 (()=>{
//  localStorage.setItem("storedEmail", enteredEmail);
//  localStorage.setItem("storedPassword", enteredPassword);
// console.log();

//コードを書く前に、まずは設計図を書く
//ユーザーに、入力してもらう（アクション）
//保存
//取り出す　localStorage.getItem　
//値を入れる
//js-email　の中のテキストを　localStorageVal　にしろ　という命令








document.getElementById("js-email");
const $email = document.getElementById("js-email");

localStorage.setItem("email","value");

const localStorageVal = localStorage.getItem("email");
console.log(localStorageVal);


document.getElementById("js-password");
const $password = document.getElementById("js-password");

localStorage.setItem("password","value")

const localStorageVal_pass = localStorage.getItem("password");
console.log(localStorageVal_pass);















// // 関数を使ってDOM要素を取得するようにし、コメントも追加
// const $email = getElementById("js-email");
// const $password = getElementById("js-password");

// // ローカルストレージのキーを変数に格納
// const emailKey = "email";
// const passwordKey = "password";

// // ローカルストレージに値を設定する関数
// function setLocalStorageValue(key, value) {
//   localStorage.setItem(key, value);
// }

// // ローカルストレージから値を取得する関数
// function getLocalStorageValue(key) {
//   return localStorage.getItem(key);
// }

// // emailをローカルストレージに設定
// setLocalStorageValue(emailKey, "value");

// // ローカルストレージからemailを取得してコンソールに表示
// console.log(getLocalStorageValue(emailKey));

// // 同様のパターンでpasswordに関するコードを改善
// setLocalStorageValue(passwordKey, "value");
// console.log(getLocalStorageValue(passwordKey));

// // getElementByIdを関数化して再利用性を向上させる
// function getElementById(id) {
//   return document.getElementById(id);
// }

})();






// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Login-Form</title>
//     <link rel="stylesheet" href="css/sanitize.css">
//     <link rel="stylesheet" href="style.css">
//     <!-- GoogleFont -->
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet">
//     <style>
//         /* 新たに追加したスタイル */
//         .parent-container {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//         }

//         .child-box {
//             width: 90%;
//             max-width: 400px; /* 適切な最大幅を設定 */
//             padding: 20px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }

//         .form-table {
//             width: 100%;
//             margin-bottom: 20px; /* 必要に応じて余白を設定 */
//         }

//         .form-table th,
//         .form-table td {
//             width: 100%;
//         }
//     </style>
// </head>
// <body>
//     <div class="parent-container">
//         <div class="child-box">
//             <h2>Sign in to your account</h2>
//             <form id="loginForm">
//                 <table class="form-table">
//                     <tr>
//                         <th>
//                             <label for="name">Email</label>
//                         </th>
//                         <td>
//                             <input class="input" type="email" id="email" required>
//                         </td>
//                     </tr>
//                     <tr>
//                         <th>
//                             <label for="password">Password</label>
//                         </th>
//                         <td>
//                             <input class="input" type="password" id="password" required>
//                         </td>
//                     </tr>
//                 </table>
//                 <div class="form-button">
//                     <button class="button" type="submit">Submit</button>
//                 </div>
//                 <div class="sign-up">
//                     Don't have an account yet? <a href="#">Sign Up</a>
//                 </div>
//             </form>
//         </div>
//     </div>

//     <script>
//         // localStorageからemailとpasswordを取得し、自動入力する
//         document.addEventListener("DOMContentLoaded", function() {
//             const emailInput = document.getElementById("email");
//             const passwordInput = document.getElementById("password");

//             // localStorageからデータを取得
//             const storedEmail = localStorage.getItem("storedEmail");
//             const storedPassword = localStorage.getItem("storedPassword");

//             // 取得したデータをinputにセット
//             if (storedEmail) {
//                 emailInput.value = storedEmail;
//             }

//             if (storedPassword) {
//                 passwordInput.value = storedPassword;
//             }

//             // フォームが送信されたときにlocalStorageにデータを保存
//             const loginForm = document.getElementById("loginForm");
//             loginForm.addEventListener("submit", function(event) {
//                 event.preventDefault();

//                 // 入力されたデータを取得
//                 const enteredEmail = emailInput.value;
//                 const enteredPassword = passwordInput.value;

//                 // localStorageにデータを保存
//                 localStorage.setItem("storedEmail", enteredEmail);
//                 localStorage.setItem("storedPassword", enteredPassword);

//                 // その他のログイン処理をここに追加
//             });
//         });
//     </script>
// </body>
// </html>
