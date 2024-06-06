// function abc(ten, tuoi){
//     this._ten = ten;
//     this._tuoi = tuoi;
// }

// class abc2{
//     constructor(ten,tuoi){
//         this._ten = ten;
//         this._tuoi = tuoi;
//     }
//     login(){
//         console.log(`Login success! Hi ${this._ten}`);
//     }
// }

const ong = {
    hello: function(){
        console.log(`Hello`);
    }
}
const cha = {
    ten: "Hang",
    tuoi: 20,
    hello2: function(){
        console.log(`Hello Hello`);
    },
    __proto__: ong,
}
const con = {
    ten: "Tuan",
    __proto__: cha,
}
