// Demo Hoisting
// inaa();

// function inaa(){
//     console.log("Hello bé Phiến")
// }

// Demo Chain Scope
// Biến trong hàm lòng nhau
function hamcha(){
    let a = "I am Phien";

    function hamcon(){
        console.log(a);
    }
    hamcon();
}

// Biến toàn cục
let b = "I am CEO";

function work(){
    console.log(b);
}

// Biến bị che khuất

let c = "Tui nè";

function tobu(){
    let c ="Tui nè lần nữa";

    function tovua(){
        let c ="Tui nữa nè";
        console.log(c);
    }
    console.log(c);
}

// Static Scope Phạm vi khối không ảnh hưởng đến scope

if(true){
    var d = 10;

    function abc(){
        console.log(d);
    }
}


if(true){
    var d2 = 20;

    function abc(){
        console.log(d2);
    }
}

function xyz(){
    if(false){
        function ab(){
            let zzzzz = 2;
            zzzzz +=5;
            console.log(zzzzz);
        }
    }   
    ab();
    function ab(){
        let xy = 4;
        xy +=6;
        console.log(xy);
    }    
}