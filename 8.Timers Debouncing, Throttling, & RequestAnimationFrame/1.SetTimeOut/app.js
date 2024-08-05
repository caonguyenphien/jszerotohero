// //Demo Basic
// function mohopqua(monqua,time){
//     const hopqua = document.createElement("div");
//     hopqua.innerHTML = monqua;
//     hopqua.className = "hopquane";
//     document.body.appendChild(hopqua);

//     setTimeout(function(){
//         hopqua.remove();
//     },time);
// }
// mohopqua("tangquane",3000);
// mohopqua("Khui qua ne", 5000);
// mohopqua("hu hon chua", 7000);

//Demo pop-up
const click = document.getElementById("cancel"); //tro den html nhanh hon
// const click = document.querySelector("#cancel"); tro den css nhanh hon va linh hoat hon
const google = setTimeout(()=>{
    window.location.href = "https://www.google.com";
},5000);
click.addEventListener("click",()=>{
    clearTimeout(google);
    console.log("Cancel link google!");
});

