// class demo{
//     constructor(a,b){
//         this.a=a;
//         this.b=b;
//     }

//     static c = "hello word"+ this;

//     static d(){
//         console.log("demo " + this);
//     }
// }

class tinhgiatuyetdoi{
    static tuyetdoi(so){
        return so < 0 ? -so: so;
    }
    ketqua1(){
        return tinhgiatuyetdoi.tuyetdoi(-5);
    }
}
