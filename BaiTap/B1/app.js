class NhaHang{
    constructor (doanhthu,nguyenlieu,nhanvien,matbang,diennuoc,quangcao){
        this.doanhthu = doanhthu;
        this.nguyenlieu = nguyenlieu;
        this.nhanvien= nhanvien;
        this.matbang = matbang;
        this.diennuoc = diennuoc;
        this.quangcao = quangcao; 
    }
    LoiNhuan(loinhuan){
        loinhuan = this.doanhthu - this.nguyenlieu - this.nhanvien - this.matbang - this.diennuoc - this.quangcao;
        console.log(`Loi nhuan cua co so la: ${loinhuan}`);
    }
}