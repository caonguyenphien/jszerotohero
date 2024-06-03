const demo ={
    ten:"Tung",
    tuoi: 19,
    text: function(){
        return `Hi ${this.ten}, Have a nice day!`;
    },
}
const demo2={
    ten:"Phien",
    tuoi:18,
}
//demo.text.call(demo2) Tu demo goi duoc bien cua demo2 qua "call(demo2)"
//Cú pháp call method dùng được với điều kiện bên trong hàm hoặc hằng số có cùng phần tử (VD: ten, tuoi)
