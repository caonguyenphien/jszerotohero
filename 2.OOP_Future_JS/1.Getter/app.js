class hinhtron{
    constructor(bankinh){
        this._bankinh = bankinh;
        // this._duongkinh = bankinh *2;
    }

    // getduongkinh(){
    //     return this._bankinh * 2;
    // }

    get duongkinh(){
        return this._bankinh *2 ;
    }

    get bankinh(){
        return this._bankinh;
    }
}