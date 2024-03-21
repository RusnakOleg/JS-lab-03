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
