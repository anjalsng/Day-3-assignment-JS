let Marks= Number(prompt("Enter your Marks"))
console.log(Marks)
if(Marks>90 && Marks<=100 ){
console.log(`Your Marks are ${Marks} and Your grade is A`);
}else if(Marks>80 && Marks<=90 ){
    console.log(`Your Marks are ${Marks} and Your grade is B`);
}else if(Marks>70 && Marks<=80){
    console.log(`Your Marks are ${Marks} and Your grade is C`);
}else if(Marks>60 && Marks<=70){
    console.log(`Your Marks are ${Marks} and Your grade is D`);
}else if(Marks>50 && Marks<=60){    
    console.log(`Your Marks are ${Marks} and Your grade is E`);
}else{
    console.log(`You are fail`);
}