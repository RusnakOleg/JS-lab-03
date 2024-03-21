//5.2.1
function getProperty(object, propertyName) {
    if (object.hasOwnProperty(propertyName)) {
        return object[propertyName];
    } else {
        return undefined; 
    }
}

var obj = {
    key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output);

//5.2.2
function addProperty(object, propertyName) {
    object[propertyName] = true;
}

var myObj = {};
addProperty(myObj, "myProperty");
console.log(myObj.myProperty); 

//5.2.3
function removeProperty(object, propertyName) {
    if (object.hasOwnProperty(propertyName)) {
        delete object[propertyName];
    }
}

var obj_2 = {
    name: 'Sam',
    age: 20
};

removeProperty(obj_2, 'name');
console.log(obj_2.name);

//5.2.4
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

var output = getFullName('Joe', 'Smith');
console.log(output); 

//5.2.5
function getLengthOfWord(word) {
    return word.length;
}

var output = getLengthOfWord('some');
console.log(output);

//5.2.6
function getLengthOfTwoWords(word1, word2) {
    return word1.length + word2.length;
}

var output = getLengthOfTwoWords('some', 'words');
console.log(output);

//5.2.7
function isGreaterThan(num1, num2) {
    return num1 > num2;
}

var output = isGreaterThan(11, 10);
console.log(output);

//5.2.8
function isEven(number) {
    return number % 2 === 0;
}

var output = isEven(11);
console.log(output);

//5.2.9
function isSameLength(word1, word2) {
    return word1.length === word2.length;
}

var output = isSameLength('words', 'super');
console.log(output);

//5.2.10
function isEvenAndGreaterThanTen(number) {
    return number % 2 === 0 && number > 10;
}

var output = isEvenAndGreaterThanTen(13);
console.log(output);

//5.2.11
function computeAreaOfATriangle(base, height) {
    return (base * height) / 2;
}

var output = computeAreaOfATriangle(4, 6);
console.log(output);