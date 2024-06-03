class demotest{
    constructor(name){
        this._name = name;
    }    
    status(st = "Have a nice day"){
        return `Hi, ${this._name}, ${st} `;
    }
}