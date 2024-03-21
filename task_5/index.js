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

