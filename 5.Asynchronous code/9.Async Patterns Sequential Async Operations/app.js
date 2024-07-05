const BASE_URL="https://pokeapi.co/api/v2/pokemon";

//Demo 1
// const ketqua=[];
// fetch(`${BASE_URL}/1`)
//     .then((a1)=>{
//         ketqua.push(a1);
//         console.log("Ket qua 1");
//         return fetch(`${BASE_URL}/2`);
//     })
//     .then((a1)=>{
//         ketqua.push(a1);
//         console.log("Ket qua 2");
//         return fetch(`${BASE_URL}/3`);
//     })
//     .then((a1)=>{
//         ketqua.push(a1);
//         console.log("Ket qua 3");
//     })
//Demo 2
async function bat3con(){
    const con1 = await fetch(`${BASE_URL}/1`);
    console.log("Bat thanh cong con thu 1");
    const con2 = await fetch(`${BASE_URL}/2`);
    console.log("Bat thanh cong con thu 2");
    const con3 = await fetch(`${BASE_URL}/3`);
    console.log("Bat thanh cong con thu 3");
    const ketqua = [con1,con2,con3];
}
//Demo 3