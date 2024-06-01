class user{

    constructor(firstname, lastname){
        this._firstname= firstname;
        this._lastname= lastname;
    }

    get fullname(){
        return `${this._firstname} ${this._lastname}`;
    }

    set fullname(newname){
        const [firts, last] = newname.split(" ");
        this.firstname = firts;
        this.lastname = last;
    }
}
