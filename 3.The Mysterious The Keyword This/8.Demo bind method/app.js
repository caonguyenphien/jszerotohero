const demo={
    ten:"Ngoc",
    text: function(trangthai){
        console.log(`Hi, ${this.ten}, ${trangthai}`);
    },
}
//Dong vai tro lay gia tri va tao ban sao, luon giu lai gia tri ban the

function phepnhan(a,b){
    return a * b;
}
const phepnhan2so = phepnhan.bind(null, 2);
console.log(phepnhan2so(5));

function tong(a,b,c){
    return a + b + c;
}
const phepcomg3so = tong.bind(null,4,6);
console.log(phepcomg3so(8))

function phepnhanlalung(a,b){
    return a * b;
}
const nhanlalung = phepnhanlalung.bind(null,3,3);
