class movie {
    // Khai bao bien
    tieude;
    daodien;
    theloai;
    namphathanh;
    dandienvien = [];
    danhgia;
    reviews = [];

    // nhung yeu to quan trong co dinh
    constructor(tieude, daodien, theloai, namphathanh) {
        this._tieude = tieude;
        this._daodien = daodien;
        this._theloai = theloai;
        this._namphathanh = namphathanh;
    }

    // data or no data
    hamdienvien(dienvien) {
        this.dandienvien.push(dienvien);
    }

    hamdanhgia(nguoidanhgia) {
        this.reviews.push(nguoidanhgia);
    }

    //Set danhgias
    setdanhgia(danhgia) {
        if (danhgia >= 1 && danhgia <= 5) {
            this.danhgia = danhgia;
        } else {
            console.log("Danh gia di ma");
        }
    }

    //getthuoctinh
    getthuoctinh() {
        return {
            tieude: this._tieude,
            daodien: this._daodien,
            theloai: this._theloai,
            namphathanh: this._namphathanh,
            dandienvien: this.dandienvien,
            danhgia: this.danhgia,
            reviews: this.reviews,
        };
    }
}

const phien = new movie("Doremon", "Fuji", "Hoathinh", 1990);
phien.hamdienvien("Nobita");
phien.hamdienvien("Doremon");
phien.hamdanhgia({ user: "tung", review: "phim hay", danhgia: 5 });
phien.hamdanhgia({ user: "tung2", review: "phim duoc", danhgia: 3 });

phien.setdanhgia(5);
console.log(phien.getthuoctinh())