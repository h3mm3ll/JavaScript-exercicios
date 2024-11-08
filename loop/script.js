// for (let i=0;i<10;i++){
//     console.log(i);
// }

// let a= 0
// while (a<5){
//     console.log (a)
//     a= a+1
// }
// let frutas  = ["banana"," uva","morango","manga","kiwi"]
// console.log(frutas.length)
// for (let contador=0; contador<frutas.length; contador++){
//     console.log(frutas[contador])
// }
// let inverso =[];
// let frutas =["banana","uva","morango","manga","kiwi"]
// for (let contador=0; contador<frutas.length; contador++){
//     inverso.unshift(frutas[contador]); 
//     console.log(inverso)
// }
// let num= 4
// for (let a=0;a<11;a++){
//     console.log(num*a)
// }
let lista1=[45,9,2,26,44,72,88,68,48,8,12];
let pares=[];
    for(index=0;index<lista1.length;index++){
        let num=lista1[index]
        if (num%2===0){
            pares.push(num)
        }
    }
    console.log(pares)
