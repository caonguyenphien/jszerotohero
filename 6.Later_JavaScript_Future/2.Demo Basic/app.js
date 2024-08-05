const base_URL = "https://pokeapi.co/api/v2/pokemon";
Promise.any([
    fetch("http://dajspodj.123123"),
    fetch("http://dajspodj.123123"),
    fetch("http:d//ajspodj.123123"),
    fetch(`${base_URL}/2`),
    fetch(`${base_URL}/3`),
])
    .then((abc)=>{
        console.log("Hien thi ne",abc);
    })
    .catch((ex)=>{
        console.log("Loi roi",ex);
    })