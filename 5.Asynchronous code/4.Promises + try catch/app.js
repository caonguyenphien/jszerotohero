//DEmo promise
// const a= new Promise((thanhcong, thatbai) =>{
//     setTimeout(() => {
//         thanhcong('Hoàn thành thành công');
//     },5000);

//     // thatbai(new Error('Lỗi'));
// });

// a.then(thanhcong => {
//     console.log(thanhcong);
// }).catch(thatbai => {
//     console.log(thatbai);
// })

//DEMO TRY CATCH
try{
    khachhang();
}catch(error){
    console.log(error);
}finally{
    setTimeout(()=>{
        console.log('Dang tai, doi xiu');
    },3000);
}

function khachhang(){
    console.log(`Dang tai....`);
    setTimeout(()=>{
        console.log('Tai xong roi');
    },5000);
}
