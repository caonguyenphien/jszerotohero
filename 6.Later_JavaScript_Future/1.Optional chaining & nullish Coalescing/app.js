// //Demo optional chaining
// // const user ={
// //     xinchao: function(){
// //         console.log("Hello");
// //     }
// // }
// // const user2 ={};

// function getuser(){
//     //floor: lam tron so // tao hang so ngau nhien
//     const getrandomnumber = (max) => Math.floor(Math.random() * max);

//     // add data
//     const firstnames =("Tung", "Phien", "Ngoc", "Ngan", "Tran");
//     const lastnames = ("Nguyen","Cao","Cao","Cao","Cao");
//     const emails =("google.com","gmail.com","demo.com");// null va undefine da bi fix 2020+
//     const addresss = [true, false]; // Gia tri co the them vao hay khong them vao
//     const methods = [true,false];

//     //chon du lieu khong xac dinh
//     const firstname = firstnames[getrandomnumber(firstnames.length)];
//     const lastname = lastnames[getrandomnumber(lastnames.length)];
//     const email = emails[getrandomnumber(emails.length)];
//     const age = getrandomnumber(80);
//     const address = addresss[getrandomnumber(addresss.length)];
//     const method = methods[getrandomnumber(methods.length)];

//     // Xay dung doi tuong nguoi dung (email co the khong ton tai do emails khong xac dinh)
//     const user = {
//         ema : email ? `${firstname.toLowerCase()}.${lastname.toLowerCase()}@${email}` : undefined,
//         a : age, 
//     };
//     if(Math.random() > 0.5){
//         user.name = {
//             f : firstname,
//             l : lastname,
//         }
//     }

//     if(address){
//         user.address = {
//             street:"410 Tran Van Giau",
//             city:"HCM",
//             state:"Binh Tan",
//             country:"Viet Nam",
//             zipcode:"800000",
//             geo:{
//                 lat: null,
//                 long: 35.12345,
//             },
//         };
//     };

//     if(method){
//         user.hello = function(){
//             console.log("Hello WWWWWWWORDDDDD");
//         };
//     }

//     return user;
// }

// Demo Nullish Coalescing
let ab = null;
let xinchao = `hello,${ab ?? "World"}!`;

let tuoi = undefined;
let tuoine = `EM CHUA ${tuoi ?? 18}`;

let gioitinh = null;
let koxacdinh = gioitinh || "Be De";

let tuoi2 = 0;
let tuoine2 = tuoi2 ?? "aioshfdaoishf";
//&& là cú pháp truy xuất
// ${xx ?? "xx"}
// xx || "xx"