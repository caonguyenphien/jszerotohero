const BASE_URL="https://pokeapi.co/api/v2/pokemon";
// //Demo 1
// // const ketqua=[];
// // fetch(`${BASE_URL}/1`).then((a1) => {
// //     ketqua.push(a1);
// //     console.log("ket qua 1");
// //     });
// // fetch(`${BASE_URL}/2`).then((a2)=>{
// //     ketqua.push(a2);
// //     console.log("ket qua 2");
// //     });
// // fetch(`${BASE_URL}/3`).then((a3)=>{
// //     ketqua.push(a3);
// //     console.log("Ket qua 3");
// //     });
// // console.log("Da request het cac gia tri thanh cong");

// //Demo 2
// const ketqua2=[];
// async function batpokemon1(){
//     const giatri1 = await fetch(`${BASE_URL}/1`);
//     ketqua2.push(giatri1);
//     console.log("Ket qua 1");
// }
// async function batpokemon2(){
//     const giatri2 = await fetch(`${BASE_URL}/2`);
//     ketqua2.push(giatri2);
//     console.log("Ket qua 2");
// }
// async function batpokemon3(){
//     const giatri3 = await fetch(`${BASE_URL}/3`);
//     ketqua2.push(giatri3);
//     console.log("Ket qua 3");
// }
// batpokemon1();
// batpokemon2();
// batpokemon3();
// console.log("Da request het cac gia tri thanh cong");
// //Demo 3
const ketqua3=[];
async function batpokemonbatky(so){
    const giatrimoi= await fetch(`${BASE_URL}/${so}`);
    ketqua3.push(giatrimoi);
    console.log(`Da request gia tri ${so} thanh cong`);
}
batpokemonbatky(1);
batpokemonbatky(2);
batpokemonbatky(3);