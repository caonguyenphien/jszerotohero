// //Demo basic
// function countdown(duration){
//     const a = document.getElementById("time");
//     a.innerText = duration;
//     duration -=1;

//     setInterval(function(){
//         a.innerText = duration;
//         duration -=1;
//     },1000);
// }

//Demo advance
function countdown(duration){
    const a = document.getElementById("time");
    a.innerText = duration;
    duration -=1;

    const b = setInterval(function(){
        a.innerText = duration;
        duration -=1;

        if(duration<0){
            clearInterval(b);
            a.innerText = "Time up!!!";
        }        
    },1000);   
}