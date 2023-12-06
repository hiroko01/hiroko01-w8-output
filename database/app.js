(()=>{
document.addEventListener("DOMContentLoaded", function () {
    // emailとpasswordがlocalStorageに保存されていれば、入力フィールドに自動入力
    const storedEmail = localStorage.getItem("storedEmail");
    const storedPassword = localStorage.getItem("storedPassword");

    if (storedEmail && storedPassword) {
        // emailとpasswordを入力フィールドに自動的に設定
        document.getElementById("js-email").value = storedEmail;
        document.getElementById("js-password").value = storedPassword;
    }
});

function signIn() {
    // 入力フィールドからemailとpasswordを取得
    const email = document.getElementById("js-email").value;
    const password = document.getElementById("js-password").value;

    // emailとpasswordをlocalStorageに保存
    localStorage.setItem("storedEmail", js-email);
    localStorage.setItem("storedPassword", js-password);


}
})();




// HTML/CSSのログインフォームを拡張し、
// 一度Sign Inのボタンが押されたら次回以降、
// emailとpasswordが自動入力される機能をlocalStorageを用いて実装してください。


//コードを書く前に、まずは設計図を書く
//ユーザーに、入力してもらう（アクション）
//保存
//取り出す　localStorage.getItem
//値を入れる
//js-email　の中のテキストを　localStorageVal　にしろ　という命令


// document.getElementById("js-email");
// const $email = document.getElementById("js-email");

// localStorage.setItem("email","value");

// const localStorageVal = localStorage.getItem("email");
// console.log(localStorageVal);




// document.getElementById("js-password");
// const $password = document.getElementById("js-password");

// localStorage.setItem("password","value")

// const localStorageVal_pass = localStorage.getItem("password");
// console.log(localStorageVal_pass);




// document.addEventListener('DOMContentLoaded', function () {
//     // 保存された email と password を取得
//     const savedEmail = localStorage.getItem('savedEmail');
//     const savedPassword = localStorage.getItem('savedPassword');
  
//     // フォームに保存された email と password を自動入力
//     if (savedEmail) document.getElementById('email').value = savedEmail;
//     if (savedPassword) document.getElementById('password').value = savedPassword;
//   });
  
//   function signIn() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
  
//     // ログイン処理の代わりに、入力された email と password を保存
//     localStorage.setItem('savedEmail', email);
//     localStorage.setItem('savedPassword', password);
  
//     alert('Logged In!');
//   }