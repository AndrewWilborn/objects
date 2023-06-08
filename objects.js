function constructor(arg1, arg2){
    return {arg1: arg1, arg2: arg2};
}

console.log(constructor("fish", 24))

function findNthElement(array, N){
    return array[N + 1];
}

let array = []

function constructorToArray(arg1, arg2){
    array.push({arg1: arg1, arg2: arg2})
}
constructorToArray("cat", 100)

console.log(array)