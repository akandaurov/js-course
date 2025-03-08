console.log('Привіт від index.js');

let number = 123;
var str1 = 'test string';
let bool = false;
let integer = 42;
let float = 3.14;

number = 'string';

console.log({
    number,
    str1,
    bool,
    integer,
    float
})

console.log({
    numberType: typeof number,
    str1Type: typeof str1,
    boolType: typeof bool,
    integerType: typeof integer,
    floatType: typeof float
})
