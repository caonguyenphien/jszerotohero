class myclass{

    #privatemethod(){
        console.log("hello, This is PrivateMethod");
    }

    publicmethod(){
        return this.#privatemethod();
    }
}


const myclass1 = new myclass();
myclass1.publicmethod();