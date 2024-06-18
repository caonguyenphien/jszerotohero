const BASE_URL="https://pokeapi.co/api/v2/pokemon";
fetch(`${BASE_URL}/1`)
    .then((res1) => {
        console.log("RESPONSE 01", res1);
        return fetch(`${BASE_URL}/2`);
    }) 
    .then((res2)=>{
        console.log("RESPONSE 02",res2);
        return fetch(`${BASE_URL}/3`);
    })
    .then((res3)=>{
        console.log("RESPONSE 03",res3);
        return fetch(`${BASE_URL}/4`);
    })
    .then((res4)=>{
        console.log("RESPONSE 04",res4);
        return fetch(`${BASE_URL}/5`);
    })