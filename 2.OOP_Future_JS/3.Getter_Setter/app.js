// cho hình vuông, chỉ đc chọn mới 3 màu, xanh dương, xanh lá, đỏ. cạnh ko đc âm
class hinhvuong{
    static chonmau = new Set(["green"],["blue"],["red"]);

    constructor(canh,mau){
        this._canh= canh;
        this._mau = mau;
    }

    // setmau(maumoi){
    //     if(hinhvuong.chonmau.has(maumoi)){
    //         this._mau = maumoi;
    //     }else{
    //         throw new Error("Mau nay ko duoc chon");
    //     }
    // }

    // get-set-01
    get canh(){ return this._canh;}
    set canh(giatri){
        if(giatri > 0){
            this._canh = giatri;
        }else{
            throw new Error("Canh khong duoc am");
        }
    }

    // get-set-02
    get mau(){return this._mau;}
    set mau(maumoi){
        if(hinhvuong.chonmau.has(maumoi)){
            this._mau = maumoi;
        }else{
            throw new Error("Mau nay ko duoc chon");
        }
    }

}

// bảng thông tin, gồm giá trị, tuổi(ko được âm và dưới 120), giới tính(nam, nữ, khác), username

// Tong ket = khi có giá trị mặc định static, khi setup sườn là constructor, get là nhận giá trị, set là chỉnh sửa giá trị của get


