const text={
    ten:"Tung",
    tuoi:19,
    textdemo: function(){
        console.log(`Hi ${this.ten} ngy moi toi lanh`);
    }
}

const abc = document.querySelector("#clickme");
abc.addEventListener("click", text.textdemo.bind(text));