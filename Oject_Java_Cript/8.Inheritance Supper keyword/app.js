class GrandFather{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    sum(){
        return this.a+this.b;
    }
}

class Father extends GrandFather{
    constructor(a,b,c){
        super(a,b);
        this.c=c;
    }
}

class Son extends Father{
    constructor(a,b,c,d){
        super(a,b);
        this.c=c;
        this.d=d;
    }
}