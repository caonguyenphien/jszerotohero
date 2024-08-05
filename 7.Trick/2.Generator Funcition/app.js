// tao ra chuoi vo han, chuoi co dk, quan ly dk nhung luong cua chuoi
// ung dung cua yield: tao lap chuoi, xu ly du lieu lon, kiem soat luong
//Demo1: chuoi tao so
// function* number(start,end){
//     for(let i = start; i<= end; i++){
//         yield i;
//     }
// }

// const numbers = number(1,5);
// console.log(numbers.next().value);
// console.log(numbers.next().value);
// console.log(numbers.next().value);
// console.log(numbers.next().value);
// console.log(numbers.next().value);

//Demo2: Day so fibonacci
// function* fibonacci(){
//     let a = 0;
//     b = 1;

//     while(true){
//         yield a;
//         [a,b] = [b, a + b] // dung trong truong hop la gia tri dc gan co vong lap nhat dinh
//     }
// }

// const fib = fibonacci();
// for(let i = 0; i < 10; i++){
//     console.log(fib.next().value);
// }
//Demo3: So chan
// function* sochan(so){
//     for(let i = 0; i<= so; i+=2){
//         yield i;
//     }
// }

// for(let inra of sochan(20)){
//     console.log(inra);
// }

