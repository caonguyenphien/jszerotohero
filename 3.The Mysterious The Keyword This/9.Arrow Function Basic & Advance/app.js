// // truyền thống
// function sum(a,b){
//     return a + b;
// }
// // hiện đại
// const sum = (a,b)=> a + b;
// console.log(sum(2,3));

// function tinhsongaunhien(){
//     return Math.random();
// }

// const tinhsongaunhien = () => Math.random();


// function binhphuong(x){
//     return x*x;
// }
// //Hai hoac nhieu gia tri thi co dau (), 1 gia tri thi khong can ()
// const binhphuong = x => x * x;

class info{
    constructor(name){
        this._name = name;
    }
    xinchao(){
        console.log("This is", this); 
        console.log(`No_01: I am ${this._name}`);

        setTimeout(function() {
            console.log("This is", this); 
            console.log(`No_02: I am ${this._name}`);
        }, 500);

        setTimeout(()=> {
            console.log("This is", this); 
            console.log(`No_03: I am ${this._name}`);
        }, 1000);
    }
}

const a = new info("phien");
a.xinchao()
