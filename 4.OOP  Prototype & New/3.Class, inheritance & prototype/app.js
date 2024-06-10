// class infocha{
//     constructor(ten,tuoi){
//         this._ten=ten;
//         this._tuoi=tuoi;
//     }
//     xinchao(){
//         console.log(`Hi ${this._ten}`);
//     }

// }
// class infocon extends infocha{
//     constructor(ten,tuoi,nghenghiep){
//         super(ten,tuoi);
//         this._nghenghiep= nghenghiep;
        
//     }
//     hienthi(){
//         console.log(`${this._nghenghiep}`);
//     }

// }



//so sanh prototype voi __proto__
// function thongtin(ten,tuoi){
//     this._ten=ten;
//     this._tuoi=tuoi;
// }

// thongtin.prototype.display = function(){return `hi ${this._ten}`}
// new thongtin()

// prototype method
const a ={
    hat(){
        return 'lalalala';
    },
    hathay: true,
}