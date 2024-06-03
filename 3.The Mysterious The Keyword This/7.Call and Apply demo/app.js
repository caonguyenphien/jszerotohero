const hello = {
    ten: "Nhi",
    xinchao: function(trangthai,ketcau){
        return `Hi ${this.ten}, ${trangthai}, ${ketcau} `;
    }
}
const hello2 = {
    ten: "Ngan",
}
//hello.xinchao.apply(hello2,["Ngay moi tot lanh","!"])
//hello.xinchao.call(hello2,"Ngay moi tot lanh","!")

function max(){
    console.log(arguments);
    return Math.max.apply(null, arguments);
}

function min(){
    console.log(arguments);
    return Math.min.apply(null,arguments);
}