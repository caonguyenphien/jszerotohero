// const number = [1,2,3,4,5,6,7,8,9,10]; // Demo số chẵn

// // const tam =[];
// // for(let num of number){
// //     if(num % 2 === 0){
// //         tam.push(num);
// //     }  
// // }

// number.filter((abc) => abc % 2 === 0); // Demo số chẵn

// let tam = 0 ; //Demo tính tổng
// for(let i = 0; i <= 5; i++){
//     tam += i;    
// }
// console.log(tam);

// [1,2,3,4,5].reduce((a,b) => a + b, 0); //Demo tính tổng

//Demo tìm phẩn từ lớn nhất
// let number=[1,25,128,18,-1274];

// [1,25,128,18,1274].reduce((a,b)=> Math.max(a,b), -Infinity);

// Math.max(...number);

// let tammax = number[2];
// for(let i = 1; i < number.length; i++){
//     if(number[i] > tammax){
//         max = number[i];
//     }
// }
// console.log(tammax);

//Demo Số lượng phẩn tử xuất hiện trong mảng
// const name1 = ["tung","ngan","ngoc","tran","tung",'phien',"tung","tung"];
// name1.reduce((a,b)=> {
//     a[b] = (a[b] || 0) + 1;
//     return a;
// },{});

//Demo ghép giá trị trong chuỗi
// const string = ["hello"," ","word"];
// string.reduce((a,b)=>a+b,"");

// //Demo first class
// function abc(func){
//     func("Blue");
// }

// abc((color)=>{
//     console.log(`${color} is the bad color`);
// })

// function abc(func){
//     func("Phien");
// }

// abc((name)=>{console.log(`${name} is bad learn`)});

//Demo returning funcition

// function hocnhanso(sone){
//     return function(so){
//         return so * sone;
//     };
// }

// const double = hocnhanso(2);
// const triple = hocnhanso(3);
// const nhanvoi10 = hocnhanso(10);

//Demo đệ quy
// function dequy(n){
//     if(n===0||n===1){return 1;}
//     return n*dequy(n-1);
// };

//Demo bất biến
const number = [125,7547,8245,248,89]; //Ham them so

function push(arr,value){
    return [...arr,value];
}
//Lọc phần tử không có nhiều điều kiện (giới hạn phần tử nhất định)
function deletes(arr){
    return arr.slice(0,-12);
    // 125 = 0; 7574 = 1; 89 = -1 = 4 
}

