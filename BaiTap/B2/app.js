class NhanVien{
    constructor(hovaten,luong,phongban){
        this.hovaten=hovaten;
        this.luong=luong;
        this.phongban=phongban;
    }
    NhanLuong(){

    }
}
class QuanLy extends NhanVien{
    constructor(hovaten,luong,phongban,team,ngansach){
       super(hovaten,luong,phongban);
       this.team=team;
       this.ngansach=ngansach;
    }
    static quanlyteam(){

    }
}
class Developer extends QuanLy{
    constructor(hovaten,luong,phongban,kynang,project,){
        super(hovaten,luong,phongban);
        this.kynang=kynang;
        this.project=project;
    }
    static codeProject(){
        
    }
}