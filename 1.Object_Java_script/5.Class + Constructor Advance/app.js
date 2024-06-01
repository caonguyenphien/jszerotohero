class BankAcc{
    constructor(stk, tentk, sodu = 0){
        this.stk = stk;
        this.tentk =tentk;
        this.sodu = sodu;
    }

    Naptien(tien){
        if(tien >= 50000){
            this.sodu += tien;
            console.log(`Ban da nap ${tien}` + `. So du moi cua ban la: ${this.sodu}`)
        }else if(tien > 0 && tien < 50000){
            console.log(`Ban phai nap toi thieu 50000`)
        }else{
            console.log(`Ban ko nap dc tien`)
        }
    }
    Ruttien(tien){
        if(this.sodu > tien && tien % 50000 == 0 ){
            this.sodu -= tien;
            console.log(`Ban da rut ${tien}` + `. So du moi cua ban la: ${this.sodu}`)
        }else{
            console.log(`So tien rut phai chia het cho 50000`)
        }
    }
}