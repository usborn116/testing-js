function capitalize(string){
    let text = string.split('');
    text[0] = text[0].toUpperCase();
    return text.join('');
}

function reverseString(string){
    let text = string.split('');
    text = text.reverse();
    return text.join('');
}

const calculator = {
    add : function(a,b) {
        return a + b
    },
    subtract : function(a,b){
        return a - b
    },
    multiply : function(a,b){
        return a * b
    },
    divide : function(a,b){
        return a / b
    }
};

function caesarCipher (shift, string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newabc = [];
    let newstring = string.toLowerCase().split('');
    let cipheredStr = '';
    for (let i=0; i<alphabet.length; i++){
        let offset = (i+shift) % alphabet.length;
        newabc += alphabet[offset];
    };
    for (let i=0; i < newstring.length; i++){
        if (/[a-z]/.test((newstring[i]))){
            let index = alphabet.indexOf(newstring[i]);
            cipheredStr += newabc[index];
        } else {
            cipheredStr += newstring[i];
        }  
    };
    let cipheredArr = cipheredStr.split('');
    for (let j=0; j<cipheredArr.length; j++){
        if (string[j] == string[j].toUpperCase()){
            cipheredArr[j] = cipheredArr[j].toUpperCase();
        }
    };
    return cipheredArr.join('');
}

function analyzeArray(arr){
    return {average : arr.reduce((a, b) => a + b)/arr.length, min : Math.min(...arr), max: Math.max(...arr), length : arr.length}
}

test('capitalizes a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

test('adds numbers', () => {
    expect(calculator.add(3,2)).toBe(5);
  });

test('subtracts numbers', () => {
    expect(calculator.subtract(3,2)).toBe(1);
  });

test('multiplies numbers', () => {
    expect(calculator.multiply(3,2)).toBe(6);
  });

test('divides numbers', () => {
    expect(calculator.divide(4,2)).toBe(2);
  });

test('simple cipher', () => {
    expect(caesarCipher(1,'Abcd')).toBe('Bcde');
  });

test('complex cipher', () => {
    expect(caesarCipher(1,'A! bcd.')).toBe('B! cde.');
  });

test('analyzes an array', () => {
    expect(analyzeArray([1,2,3,4,5])).toEqual({average : 3, min : 1, max: 5, length : 5});
  });