const info = {
    name:"Ten",
    age:19,
    demo: function(){
        console.log("This is", this)
        return `Hi, ${this.name}. Have a nice day!`;
    }
}