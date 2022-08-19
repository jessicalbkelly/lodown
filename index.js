'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) { // FUNCTION DECLARATION
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: function takes in any input and returns that input unchanged
 * @param {Any value} value : function takes in any input value
 * @returns {Any value} value: function returns input value unchanged
 */

function identity(value) {
    return value;
}

module.exports.identity = identity;

/**
 * typeOf: returns the type of value as a string
 * @param {Any value} value : function takes in any input value
 * @returns {Value type} value: function returns type of value
 */

 function typeOf(value) {
    if (value instanceof Date === true) {
        return "object";
    } else if (value === null) {
        return "null";
    } else if (Array.isArray(value) === true) {
        return "array";
    } else if (typeof(value) === "object") {
        return "object";
    } else if (typeof(value) === "string") {
        return "string";
    } else if (typeof(value) === "undefined") {
        return "undefined";
    } else if (typeof(value) === "number") {
        return "number";
    } else if (typeof(value) === "boolean") {
        return "boolean";
    } else if (typeof(value) === "function") {
        return "function";
    } else {
        return false;
    }
}

module.exports.typeOf = typeOf;

/**
 * first: tests an array to see if it is a) in fact an array, b) if a number is given
 * @param {array} array : function takes in an array
 * @param {number} number: function takes in a number
 * @returns {array literal} []: if array is not an array, function returns []
 * @returns {array first element}: if number is not given or not a number, returns the first element of array;
 * @returns {first <number> items of <array>}: if the above conditions are false, returns first <number> items of <array>
 */

 function first(array, number){
    if(Array.isArray(array) === false) {
        return [];
    };
    if (number === NaN) {
        return array[0];
    
    } else if (number === undefined){
        return array[0];
    } else if (number < 0){
        return [];
    } else {
        return array.slice(0, number);
    }
    
}

module.exports.first = first;

/**
 * last: tests an array to see if it is a) in fact an array, b) if a number is given. If these are true returns last <number> items of <array>
 * @param {array} array : function takes in an array
 * @param {number} number: function takes in a number
 * @returns {array literal} []: if array is not an array, function returns []
 * @returns {array first element}: if number is not given or not a number, returns the first element of array;
 * @returns {last <number> items of <array>}: if the above conditions are false, returns last <number> items of <array>
 */

 function last(array, number){
    if(Array.isArray(array) === false) {
        return [];
    };
    if (number === NaN) {
        return array[array.length - 1];
    
    } else if (number === undefined){
        return array[array.length - 1];
    } else if (number < 0){
        return [];
    } else {
        return array.slice(-number);
    }
    
}

module.exports.last = last;

/**
 * indexOf: tests an array to see if it is a) in fact an array, b) if a number is given. If these are true returns last <number> items of <array>
 * @param {array} array : function takes in an array
 * @param {Any value} value: function takes in a value
 * @returns {index of array} i: returns the index of <array> that is the first occurrance of <value>
 * @returns {number} -1: Return -1 if <value> is not in <array>
 */

 function indexOf(array, val) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === val) {
            return i;
        }
    }
    return -1;
    }

module.exports.indexOf = indexOf;

/**
 * contains: Return true if <array> contains <value>
 * @param {array} array : function takes in an array
 * @param {Any value} value: function takes in a value
 * @returns {boolean} true: Return true if <array> contains <value>
 * @returns {boolean} false: Return false otherwise
 */

 function contains(array, value){
    var answer = false;
    for (var i = 0; i < array.length; i++) {
        array[i] === value ? answer = true : false;
    }
    return answer;
}

module.exports.contains = contains;

/**
 * each: if <collection> is an array, call <function> once for each element
*      with the arguments: the element, it's index, <collection>. if <collection> is an object, call <function> once for each property
*      with the arguments: the property's value, it's key, <collection>.
 * @param {array or object} collection : function takes in an array or an object
 * @param {function} func: function takes in another function
 * @returns {null} nothing: This function only runs the functions and does not return anything
 */

 function each(collection, func) {
    //determine if collection is an array
if (Array.isArray(collection)) {
    //iterate through every value in the array
    for (var i = 0; i < collection.length; i++) {
        //return element, its index, collection
        func(collection[i], i, collection);
    }
    //else it is an object
} else {
for (let key in collection) {
    func(collection[key], key, collection);
}
}
}

module.exports.each = each;

/**
 * unique: Returns a new array of all elements from <array> with duplicates removed
 * @param {array} array : function takes in an array
 * @returns {array} newArray: Returns a new array of all elements from <array> sans duplicates
 */

 function unique(array) {
    let newArray = [];
    for (let j = 0; j < array.length; j++){
if (_.indexOf(newArray, array[j]) === -1) {
newArray.push(array[j])
}
    }
return newArray;
}

module.exports.unique = unique;

/**
 * filter: Calls <function> for each element in <array> passing the arguments: the element, it's index, <array>. Returns a new array of elements for which calling <function> returned true
 * @param {array} array : function takes in an array
 * @param {function} func : function takes in a function
 * @returns {array} newArray: returns a new array of elements for which calling <function> returned true
 */

function filter(array, func) {
    var newArray = [];
    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array) === true) {
        newArray.push(array[i]);
    }
}
    return newArray;
}
module.exports.filter = filter;

/**
 * reject: Calls <function> for each element in <array> passing the arguments: the element, it's index, <array>. Returns a new array of elements for which calling <function> returned false
 * @param {array} array : function takes in an array
 * @param {function} func : function takes in a function
 * @returns {array} newArray: returns a new array of elements for which calling <function> returned false
 */

 function reject(array, func) {
    var newArray = [];
    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array) === false) {
            newArray.push(array[i]);
        }
    }
        return newArray;
    }

module.exports.reject = reject;

/**
 * partition: Calls <function> for each element in <array> passing it the arguments: element, key, <array>. Returns an array that is made up of 2 sub arrays: 0) An array that contains all the values for which <function> returned something truthy, and 1) An array that contains all the values for which <function> returned something falsy
 * @param {array} array : function takes in an array
 * @param {function} func : function takes in a function
 * @returns {array} newArray: Returns an array that is made up of 2 sub arrays: 0) An array that contains all the values for which <function> returned something truthy, and 1) An array that contains all the values for which <function> returned something falsy
 */

 function partition(array, func) {
    var newArray = [];
    var falseyArray = [];
    var truthyArray = [];
    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array) === false) {
            falseyArray.push(array[i]);
        } else if (func(array[i], i, array) === true) {
            truthyArray.push(array[i]);
    }
        
}
newArray.push(truthyArray);
newArray.push(falseyArray)
return newArray;
}

module.exports.partition = partition;


/**
 * map: Call <function> for each element in <collection> passing the arguments: if <collection> is an array: the element, its index, <collection>. If <collection> is an object: the value, its key, <collection>. Save the return value of each <function> call in a new array. Return the new array.
 * @param {array or object} collection : function takes in an array or object
 * @param {function} func : function takes in a function
 * @returns {array} newArray: Returns a new array containing the return value of each function.
 */

 function map(collection, func) {
    var output = [];
//determine if this is an array
    if(Array.isArray(collection)) {
        //iterate through array and push the result of invoking func on current value into output array
for (let i = 0; i < collection.length; i++){
    output.push(func(collection[i], i, collection));
}
    } else {
        //iterate through object
        for (let key in collection) {
output.push(func(collection[key], key, collection));
    } 
}
return output;
}

module.exports.map = map;



/**
 * pluck: Returns an array containing the value of <property> for every element in <array>; uses _.map() in its implementation
 * @param {array of objects} array : function takes in an array
 * @param {property} property : function takes in a property
 * @returns {array} output: Returns an array containing the value of <property> for every element in <array>
 */

 function pluck(array, property) {
        var myVar = [];
        for (var i = 0; i < array.length; i++) {
            for (var key in array[i]) {
                if (key === property) {
                    myVar.push(array[i][key]);
                    
                }
                
    
            }
            
        }
        return myVar;
        
    }

module.exports.pluck = pluck;

/**
 * every: 1) Calls <function> for every element of <collection> with the paramaters: if <collection> is an array: current element, it's index, <collection>; if <collection> is an object: current value, current key, <collection>. 2) If the return value of calling <function> for every element is true, return true 3) If even one of them returns false, return false 4) If <function> is not provided, return true if every element is truthy, otherwise return false
 * @param {array or object} collection : function takes in an array or object
 * @param {function} func : function takes in a function
 * @returns {boolean} true or false: Returns either true or false
 */

function every(collection, func) {
    //determine if func wasn't passed a value
    if (!func) { //if func resolves to a falsey value
        //determine if array
        if (Array.isArray(collection)) {
            //iterate over collection using for loop
            for (let i = 0; i < collection.length; i++) {
                //determine if item is falsey
                if(!collection[i]) {
                    return false;
                }
            }
        } else {
            for (let key in collection) {
                if (!collection[key])
                return false;
            }
        }
    } else {
        if (Array.isArray(collection)) {
            //iterate over collection using for loop
            for (let i = 0; i < collection.length; i++) {
                //determine if item is falsey
                if(!func(collection[i], i, collection)) {
                    return false;
                }
            }
        } else {
            for (let key in collection) {
                if (!func(collection[key], key, collection)) {
                return false;
            }
    }
    }
    }
        return true;
    }

    module.exports.every = every;

/**
 * some: 1) Call <function> for every element of <collection> with the paramaters: if <collection> is an array: current element, it's index, <collection>; if <collection> is an object: current value, current key, <collection>. 2) If the return value of calling <function> is true for at least one element, return true. 3) If it is false for all elements, return false. 4) If <function> is not provided return true if at least one element is truthy, otherwise return false
 * @param {array or object} collection : function takes in an array or object
 * @param {function} func : function takes in a function
 * @returns {boolean} true or false: Returns either true or false
 */

function some(collection, func) {
        //determine if func wasn't passed a value
        if (!func) { //if func resolves to a falsey value
            //determine if array
            if (Array.isArray(collection)) {
                //iterate over collection using for loop
                for (let i = 0; i < collection.length; i++) {
                    //determine if item is falsey
                    if(collection[i] === true) {
                        return true;
                    }
                }
            } else {
                for (let key in collection) {
                    if (collection[key] === true)
                    return false;
                }
            }
        } else {
            if (Array.isArray(collection)) {
                //iterate over collection using for loop
                for (let i = 0; i < collection.length; i++) {
                    //determine if item is falsey
                    if(func(collection[i], i, collection) === true) {
                        return true;
                    }
                }
            } else {
                for (let key in collection) {
                    if (func(collection[key], key, collection) === true) {
                    return true;
                }
        }
        }
        }
            return false;
        }
    

    module.exports.some = some;

/**
 * reduce: 1) Call <function> for every element in <collection> passing the arguments: previous result, element, index. 2) Use the return value of <function> as the "previous result" for the next iteration 3) On the very first iteration, use <seed> as the "previous result" 4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element 5) After the last iteration, return the return value of the final <function> call
 * @param {array} array : function takes in an array
 * @param {function} func : function takes in a function
 * @param {value} seed : function takes in a value called "seed"
 * @returns {value} result: Returns latest function return value
 */

function reduce (array, func, seed) {
    let result;
             if (seed !== undefined) {
                result = seed;
                for (let i = 0; i < array.length; i++) {
                    result = func(result, array[i], i, array);
                }
            } else {
                result = array[0];
                for (let i = 1; i < array.length; i++) {
                result = func(result, array[i], i, array);
    }
}
             
return result;
}

module.exports.reduce = reduce;


/**
 * extend: 1) Call <function> for every element in <collection> passing the arguments: previous result, element, index. 2) Use the return value of <function> as the "previous result" for the next iteration 3) On the very first iteration, use <seed> as the "previous result" 4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element 5) After the last iteration, return the return value of the final <function> call
 * @param {object} obj1, obj2, etc. : function takes 1 or more objects
 * @returns {object} obj1: Returns initial object with values of all other objects pushed into it
 */

 function extend (obj1, obj2, obj3){
    Object.assign(obj1, obj2, obj3);
    return obj1;
    }

module.exports.extend = extend;

