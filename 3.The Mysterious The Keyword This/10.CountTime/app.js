// class counttime{
//     constructor(sodem=0,giatriduoctang=1){
//         this._sodem=sodem;
//         this._giatriduoctang=giatriduoctang;
//     }

//     batdaudem(){
//         setInterval(this.gitriduoctangthucte.bind(this),1000)
//     }

//     gitriduoctangthucte(){
//         console.log(this._sodem);
//         this._sodem += this._giatriduoctang;
//     }
// }

class sodemnangcao{
    constructor(sodembatdau,nutnhan){
        this.sodem = sodembatdau;
        this._nutnhan = nutnhan;
        this._nutnhan.addEventListener("click", () => this.demsotudong());
    }
    demsotudong(){
        this.sodem +=1;
        console.log(this.sodem);
    }
}

const nhan1 = document.querySelector("#click1");
const dem1 = new sodemnangcao(1, nhan1);
