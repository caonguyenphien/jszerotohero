const BASE_URL="https://pokeapi.co/api/v2/pokemon";

async function batbonconpokemon(){
    try{
        const res1 = await fetch(`${BASE_URL}/1`);
        console.log(res1);

        const res2 = await fetch(`${BASE_URL}/2`);
        console.log(res2);

        const res3 = await fetch(`https://abc.abong`);
        console.log(res3);

        const res4  = await fetch(`${BASE_URL}/4`);
        console.log(res4);

    }catch(b){
        console.log("Loi r ban oi");
        console.log(b);
    }
};

async function websitefake(){
    try{
        const resa = await fetch(`https://ploe.asd`);
        console.log(resa);
    }catch(a){
        console.log("Loi cmnr");
        console.log(a);
    }
};