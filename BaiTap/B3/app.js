// bảng thông tin, gồm giá trị, tuổi(ko được âm và dưới 120), giới tính(nam, nữ, khác), username
class username{
    static newgioitinh = new Set(["nam"],["nu"],["khac"]);
    constructor (tuoi,gioitinh){
        this._tuoi=tuoi;
        this._gioitinh=gioitinh;
    }

    setgioitinh(chongioitinh){
        if(username.newgioitinh.has(chongioitinh)){
            this._gioitinh=chongioitinh;
        }else{
            throw new Error ("Khong co gioi tinh nay");
        }
    }
    get tuoi(){ 
        return this._tuoi;
    }
    set tuoi(number){
        if(number>0 && number<120){
            this._tuoi=number;
        }else{
            throw new Error ("Tuoi dang bi am hoac lon hon 120");
        }
    }

    get gioitinh(){
        return this._gioitinh;
    }
    set gioitinh(chongioitinh){
        this.setgioitinh(chongioitinh);
    }
}