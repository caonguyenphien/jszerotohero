const BASE_URL="https://pokeapi.co/api/v2/pokemon";

const tonghop=[
    fetch("https://mapsadasd.vn"),
    fetch(`${BASE_URL}/10`),
    fetch(`${BASE_URL}/5`),
    fetch(`${BASE_URL}/2`),
];
Promise.race(tonghop)
    .then((win)=>{
        console.log(win);
    })
    .catch((e)=>{
        console.log(e);
    })

