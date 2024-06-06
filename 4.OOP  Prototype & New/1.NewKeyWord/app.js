class info{
    constructor(name,pass){
        console.log("this is", this);
        this._name = name;
        this._pass = pass;
    }
}

function info2(name,pass){
    console.log("this is", this);
    this._name = name;
    this._pass = pass;
}
//Neu muon su dung info2 phai gan gia tri moi vao const xxx = new info2() hoac new info2()