// //Demo scroll Top
// function scrollToTop(){
//     const duration = 5000;// Thoi gia cuon tu vi tri hien tai den dau trang
//     const start = window.pageYOffset;// Lay vi tri hien tai cua trang web
//     const end  = 0;
//     const change = end - start;// Khoang cach can cuon
//     let starttime = null; // bien tam de luu tam thoi diem bat dau
    
//     function AnimationScroll(currenttime){
//         if(starttime===null) starttime = currenttime;
//         const time = currenttime - starttime; 

//         const progress = Math.min(time/duration,1); // tien do cuon
//         window.scrollTo(0,start+change*progress); //cap nhat vi tri cuon dua tren tien do de dam bao do muot
//         console.log(time);
//         if(time<duration){
//             requestAnimationFrame(AnimationScroll);            
//         };
//     };

//     requestAnimationFrame(AnimationScroll);
// };

// document
//     .querySelector(".backtotop")
//     .addEventListener("click",scrollToTop);

//Demo dang nen
// const canvas = document.getElementById('chart');
// const ctx = canvas.getContext('2d');
// const candlelWidth = 20;
// const candleSpacing = 5;
// const maxCandle = 10;
// let candles = [];
// let lastTimestamp = null;

// //Ham tao cay nen
// function createCandle(timestamp, open, close) {
//     return {
//         timestamp,
//         open,
//         close,
//         color: open < close ? 'green' : 'red',
//     };
// }

// //Ham ve cay nen
// function drawCandle(candle,x){
//     const height = Math.abs(candle.open - candle.close);
//     const y = candle.open > candle.close ? candle.close : candle.open;
    
//     ctx.fillStyle = open.color;
//     ctx.fillRect(x,y,candlelWidth,height);

//     //Ve than nen
//     ctx.fillStyle = '#000';
//     ctx.fillRect(x + candlelWidth / 2 - 2, y, 4, height);
// };

// //Ham cap nhat bieu do
// function UpdateChart(timestamp){
//     //Kiem tra thoi gian
//     if(!lastTimestamp){
//         lastTimestamp = timestamp;
//     } ; 
//     const elapsedTime = timestamp - lastTimestamp;

//     //Tao cay nen moi khi qua 10s
//     if(elapsedTime >= 1000){
//         //Tao gia dong va mo ngau nhien
//         const open = Math.floor(Math.random() * 100) + 1;
//         const close = Math.floor(Math.random() * 100) + 1;

//         candles.push(createCandle(timestamp,open,close));
//         lastTimestamp = timestamp; 
//     };

//     //Ve bieu do
//     ctx.clearRect(0,0,canvas.width,canvas.height);

//     //Xoa cay nen dau tien neu vuot qua 10 cay nen
//     if(candles.length > maxCandle){
//         candles.shift();
//     }

//     //Ve cac cay nen
//     candles.forEach((candle,index)=>{
//         const x = index * (candlelWidth + candleSpacing);
//         drawCandle(candle,x);
//     });

//     //Yeu cau cap nhat lai khung hinh
//     requestAnimationFrame(UpdateChart);
// }

// //Bat dau cap nhat bieu do
// requestAnimationFrame(UpdateChart);


// demo advance
const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');
const candleWidth = 20;
const candleSpacing = 5;
const maxCandles = 10;
let candles = [];
let lastTimestamp = null;

// Hàm tạo cây nến
function createCandle(timestamp, open, close) {
    return {
        timestamp,
        open,
        close,
        color: open < close ? 'green' : 'red', // open = 100, close = 110 => true, green, false => red
    };
}

// Hàm vẽ cây nến
function drawCandle(candle, x) {
    const height = Math.abs(candle.open - candle.close);
    const y = candle.open > candle.close ? candle.close : candle.open; // Kết thúc giá trị của một cây nến

    ctx.fillStyle = candle.color;
    ctx.fillRect(x, y, candleWidth, height); //Hàm truyền giá trị vào biểu đồ canvas

    // Vẽ sợi bất nến
    ctx.fillStyle = '#000';
    ctx.fillRect(x + candleWidth / 2 - 2, y, 4, height);
}

// Hàm cập nhật biểu đồ
function updateChart(timestamp) {
    // Kiểm tra thời gian
    if (!lastTimestamp) {
        lastTimestamp = timestamp;
    }

    const elapsedTime = timestamp - lastTimestamp; //Hằng số thời gian chuyển tiếp

    // Tạo cây nến mới nếu đã qua 10 giây
    if (elapsedTime >= 10000) {
        // Tạo giá mở và đóng ngẫu nhiên
        const open = Math.floor(Math.random() * 100) + 1;
        const close = Math.floor(Math.random() * 100) + 1;
        candles.push(createCandle(timestamp, open, close)); // Khởi tạo cây nến mới
        lastTimestamp = timestamp;
    }

    // Vẽ biểu đồ
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Xóa cây nến đầu tiên nếu đã vượt quá 10 cây
    if (candles.length > maxCandles) {
        candles.shift();
    }

    // Vẽ các cây nến
    candles.forEach((candle, index) => {
        const x = index * (candleWidth + candleSpacing);
        drawCandle(candle, x);
    });

    // Yêu cầu cập nhật lại khung hình
    requestAnimationFrame(updateChart);
}

// Bắt đầu cập nhật biểu đồ
requestAnimationFrame(updateChart);


// Show pass
const pwd = document.getElementById("pwd");
const chk = document.getElementById("chk");

chk.onchange = ()=>{
    pwd.type = chk.checked ? "text":"password";
}; //Kỹ thuật IIFE để sử dụng hàm 1 điều kiện duy nhất

