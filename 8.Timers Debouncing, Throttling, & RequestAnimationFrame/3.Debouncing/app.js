// //Demo basic debounce
// function queryAPI (){
//     console.log("tui ghi nhan gia tri roi ne");
// }
// const searchInput = document.getElementById("search");
// let debouncing;
// searchInput.addEventListener("input",()=>{
//     clearTimeout(debouncing);
//     debouncing = setTimeout(()=>{
//         queryAPI();
//     },500);
// });
 
//Demo advance fanny debounce: (a,b,..n) = ...args: cac tham so ben trong ham
function Sum(a,b,...n){
    let total = a + b;
    for(let i = 0; i<n.length;i++){
        total+=n[i];
    }
    return total;
}

function queryAPI(find,color){
    console.log(`du lieu API duoc tim kiem la ${find}`);
    console.log(`mau sac duoc truy xuat la ${color}`);
}

const searchInput = document.getElementById("search");

function debouncing(callback,delay){
    let timeoutID;
    return (...args) =>{
        if(timeoutID){
            clearTimeout(timeoutID);
        };
        timeoutID = setTimeout(()=>{
            callback(...args);
        },delay);
    };
}

const debouncingQueryAPI = debouncing(queryAPI,500);
searchInput.addEventListener("input",(abc)=>{
    debouncingQueryAPI(abc.target.value, "color");
});
