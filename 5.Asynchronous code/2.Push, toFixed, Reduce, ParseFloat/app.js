//Demo Push
// const a1= ["red","green"];
// a1.push("white","black");
// const a2=[];
// a2.push("yellow", "blue", "pink");
//Demo ToFixed
// const b1 = 3.178968964;
// const b2 = 100.579;
// Demo ParseFloat
// parseFloat("10");10
// parseFloat("10e2");1000
// parseFloat("10, 20");10
// parseFloat("true");NaN
// parseFloat(null); NaN
//Demo Reduce

//demo 1 : Sum
// const ar1 = [14,120,18];
// const sum = ar1.reduce((bienduocluuvao,biengiatrithuctai) =>{
//     return bienduocluuvao + biengiatrithuctai;
// },0);
//demo 2: max, min
// const ar2 = [25,37,45,200];
// const max = ar2.reduce((sobandau,sothuctai)=>{
//     return sobandau > sothuctai ? sobandau : sothuctai;
// });
// const ar3 = [ 124, 14, 512]
// const min = ar3.reduce((sobandau,sothuctai)=>{
//     return sobandau <sothuctai ? sobandau: sothuctai;
// });
//demo3: Object
// const ar4 = [{name:"tung",job:"it"},
//     {name:"Ngoc",job:"HS"},
//     {name:"Ngan",job:"SV"}];
// const display = ar4.reduce((luudautien,bienhientai)=>{
//     luudautien[bienhientai.name] = [bienhientai.job];
//     return luudautien;
// }, {});
//demo4: Đếm số phần tử lặp lại 
// const day = [11,22,11,33,22,11,35,11];
// const dem = day.reduce((conso,demlanlap) =>{
//     conso[demlanlap] = (conso[demlanlap] || 0) + 1;
//     return conso;
// },{});

