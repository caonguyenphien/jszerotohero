// //Demo throttling - Ky thuat cuon trang khong gioi han basic
// function getRandomColor(){
//     const palette = [
//         "#FFADAD",
//         "#FFC3A0",
//         "#FF677D",
//         "#392F5A",
//         "#31A2AC",
//         "#61C0BF",
//         "#6B4226",
//         "#D9BF77",
//         "#ACD8AA",
//         "#FFE156",
//         "#6A0572",
//         "#AB83A1",
//     ];

//     const randomIndex = Math.floor(Math.random() * palette.length);
//     return palette[randomIndex];
// }

// const content = document.getElementById("content");

// function loadMoreItem(){
//     const scrollDistanceToBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

//     if(scrollDistanceToBottom < 150){
//         console.log("Loading data API...");
//         for(let i = 0 ; i < 10; i++){
//             const item = document.createElement("div");
//             item.classList.add("item");
//             item.textContent = "Item number "+ (content.children.length+1);
//             item.style.backgroundColor = getRandomColor();
//             content.appendChild(item);
//         };
//     };
// }

// let isThrottling = false;

// window.addEventListener("scroll",()=>{
//     if(!isThrottling){
//         loadMoreItem();
//         isThrottling = true;
//         setTimeout(()=>{
//             isThrottling =false;
//         },300);
//     };
// });

// loadMoreItem();

//Demo fanncy throttling advance infinite scroll 
function getRandomColor(){
    const palette = [
        "#FFADAD",
        "#FFC3A0",
        "#FF677D",
        "#392F5A",
        "#31A2AC",
        "#61C0BF",
        "#6B4226",
        "#D9BF77",
        "#ACD8AA",
        "#FFE156",
        "#6A0572",
        "#AB83A1",
    ];

    const randomIndex = Math.floor(Math.random() * palette.length);
    return palette[randomIndex];
}

const content = document.getElementById("content");

// Ham hien thi HTML
function loadMoreItem(){
    const scrollDistanceToBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight; 
//document.documentElement.scrollHeight: toan bo chieu cao HTML 
//window.scrollY: vi tri hien tai tu tren xuong duoi den cuoi trang
//window.innerHeight: chieu cao hien thi cua trinh duyet

    if(scrollDistanceToBottom < 150){
        console.log("Loading data API...");
        for(let i = 0 ; i < 10; i++){
            const item = document.createElement("div");
            item.classList.add("item");
            item.textContent = "Item number "+ (content.children.length+1);
            item.style.backgroundColor = getRandomColor();
            content.appendChild(item);
        };
    };
}

// Ham thuc thi gia tri 
function throttle(callback,delay=500){
    let isThrottled = false;
    let saveArray = null;

    // Code phan tu phia trc 10 
    const executeCallBack = ()=>{ //IIFE
        if(saveArray === null){
            isThrottled = false;
        }else{
            callback(...saveArray);
            saveArray = null;
            setTimeout(executeCallBack,delay);
        };
    };

    // Code phan tu tu 10 tro di
    return (...args)=>{
        if(isThrottled){
            saveArray = args;
            return;
        };

        callback(...args);// Goi ra hien thien nhung thang ke tiep
        isThrottled = true;
        setTimeout(executeCallBack,delay); // Thoi gian hien thi nhung thang ke tiep
    };
};

const throttledLoadingItem = throttle(loadMoreItem,200);

window.addEventListener("scroll",()=>{
    throttledLoadingItem();
});

loadMoreItem();