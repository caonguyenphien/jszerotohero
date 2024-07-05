const BASE_URL="https://pokeapi.co/api/v2/pokemon";
const hienthinhieu=[
    fetch(`${BASE_URL}/1`),
    fetch(`${BASE_URL}/2`),
    fetch(`${BASE_URL}/3`),
    fetch(`${BASE_URL}/4`),
    fetch(`${BASE_URL}/5`)
];
//Demo 1
// Promise.all(hienthinhieu)
//     .then((ketqua)=>{
//         console.log("Hien thi thanh cong");
//         console.log(ketqua);
//     })
//     .catch((ex)=>{
//         console.log("Loi roi");
//         console.log(ex);
//     });
//Demo 2
async function batvaicon(){
    try{
        const ketquane= await Promise.all(hienthinhieu);
        console.log("Tui bat het roi ne");
        console.log(ketquane);
    }
    catch(e){
        console.log("Loi roi");
        console.log(e);
    }
}


