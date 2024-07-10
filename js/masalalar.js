// 1-masala
const students = [
    {ism : 'Ali', yoshi : 20, baholari :[90, 85, 88]},
    {ism : 'Vali', yoshi : 21, baholari :[85, 87, 90]},
    {ism : 'Sami', yoshi : 22, baholari :[88, 92, 84]},
]
function best_student(arr) {
    let urta = 0; 
    arr.forEach(element => {
        for (let i = 0; i < element.baholari.length; i++) {
            let sum = element.baholari[i] 
            urta.push(sum)
            
        }
    });
    return urta
}
console.log(best_student(students));
// 2-masala
// const products = [
//     {nomi : 'kompyuter',narhi : 1000,mavjud : true },
//     {nomi : 'telefon',narhi : 700,mavjud : false },
//     {nomi : 'planshet',narhi : 500,mavjud : true },
//     {nomi : 'monitor',narhi : 300,mavjud : true }
// ];

// const expensive = (arr) => {
//     let expen = 0
//     arr.forEach(element => {
//         if (element.narhi > expen) {
//             expen = element.narhi
//         }
//     });
//     return expen
// }
// console.log(expensive(products));


