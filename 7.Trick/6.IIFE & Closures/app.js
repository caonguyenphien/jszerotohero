//Demo IIFE
// let result = (function (a,b){
//         return a * b;
//     }
// )(3,4)

//Closures Nhớ và truy cập biến mà trong phạm vi cho phép
//Demo1 chưa ứng dụng IIFE
// function dem(){
//     let dems = 1;
//     return function demss(){
//         return dems++;
//     }
// }
// const ids = dem();

//Demo2 ứng dụng IIFE (tăng giảm và đếm)
// const counter = (function (){
//     let count = 0;
//     return {
//         tang: function(){return count++;},
//         giam: function(){return count--;},
//         dem: function(){return count;},
//     };
// })();

//Demo3 Closures factory function
// function generatorid(prefix){
//     let id = 0;
//     return function (){
//         id+=1;
//         return `${prefix}${id}`;
//     }
// }
// const bookid = generatorid("Book-");
// const userid = generatorid("User_");

//Demo4 Closures click button event
// function nutnhan(id){
//     const btn = document.getElementById(id);
//     let dem = 0;
//     btn.addEventListener("click",function(){
//         dem+=1;
//         btn.innerText = `clicked ${dem} time`;
//     });
// }
// nutnhan("btn1");
// nutnhan("btn2");
// nutnhan("btn3");

//Demo 5 Closures loop
for (let i = 1; i<=6;i++){
    setTimeout(function(){
        console.log(i);
    }, 5000 * i)
}