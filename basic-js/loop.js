//for loop
//print web-webDevlopement 10 times


// for(let i=1; i<=10; i++){
//     console.log("web_devlopement")
// }

//calculate the sum of 1 to 5
// let sum=0
// for(let i=1; i<=5; i++){
//     sum=sum+i
// }
// console.log(sum)


//print web-webDevlopement 10 times usong while loop

// let i=1;
// while(i<=5){
//     console.log("web_devlopement")
//     i++
// }

//example of do-while loop
// let i=1;
// do{
//     console.log("Web_devlopement")
//     i++;
// } while(i<=5)


// let str="Web"
// let size=0;
// for(let i of str){
//     console.log("i=", i)
//     size++
// }
// console.log("string size =" , size)

//for in

let student={
    name : "sidharth",
    age :47,
    cgpa : 4.5,
    isPass : false
}
 
for(let key in student){
    console.log("key=" key, "value=", student[key] )
}