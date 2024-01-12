function printAndSum (start, end){
let nextNum = 0
let result= " "
let sum = 0
for (let i=start; i<=end; i++){
        result+=i + " ";
        sum +=i
}

    console.log(result);
    console.log(` Sum: ${sum}`)
}
printAndSum(5, 10)

// var result = "" for (var number = 1; number <=10; number++) { result += number + " "; } console.log(result);