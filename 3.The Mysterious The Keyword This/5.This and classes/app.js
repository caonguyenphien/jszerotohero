class demo{
    constructor(name){
        this._name=name;
    }
    static text(){
        console.log("This is ", this)
    }
    status(st="Have a nice tonight!"){
        console.log("This is ", this)
        return `${this._name}, ${st}`;
    }
}