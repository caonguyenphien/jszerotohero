//Demo var let const giong nhau
// var abc = "Phien";
// function xyz(){
//     console.log(abc);
//     var abc2 = "Phien2";
//     console.log(abc2);

// }
// if(true){
//     console.log(abc);
// }
// let abc = "Phien";
// function xyz(){
//     console.log(abc);
//     let abc2 = "Phien2";
//     console.log(abc2);

// }
// if(true){
//     console.log(abc);
// }
// for(let x =0; x<=10 ;x++){
//     console.log(x);
// } 
// for(var x =0 ; x<=10;x++){
//     console.log(x);
// } 
// for(const x =0 ; x<=10;x++){
//     console.log(x);
// } 
//Demo var let khac nhau (var goi ham mo rong trong 1 function, let chay trong khoi lenh block scope{})
var f = 40;
function vidu(){
    var z =30;
    if(true){
        var x = 10;
        var x2 =15;
        let y = 20;
    }  
    console.log(x);
    console.log(`${x} & ${x2}`)
    
}