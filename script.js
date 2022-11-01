"use strict";

// 1.
let array = [5, 25, 89, 120, 36];
array.push("javascript", "python");
array.unshift("html","css");
console.log(array.length);
array.pop();
array.shift();
console.log(array);

// 2.
let arrayMeore = ["ფორთოხალი", "ბანანი", "მსხალი"];
console.log(arrayMeore.length);
arrayMeore.push("ვაშლი","ანანასი");
arrayMeore.unshift("საზამთრო");
console.log(arrayMeore.length);
arrayMeore.splice(3,0, "მანგო");
arrayMeore.pop();
arrayMeore.shift();
console.log(arrayMeore.length);

// 3.
let numbers = [12, 25, 3, 6, 8, 14, 7, 23];
let newNumbers = numbers.map(function(item) {
    return item / 3 ;
} )
console.log(newNumbers);

// 4.
// pirveli metodi
let arrayMesame = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let arrayFillter = arrayMesame.filter(function(item) {
    return typeof item === "number";
});
console.log(arrayFillter);


// meore metodi
let arrayMesame = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let arrayFillter = arrayMesame.filter(item => typeof item === "number");
console.log(arrayFillter);


// 5.

// pirveli metodi 
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let newLanguages = languages.filter(function(item){
    return item = item.length > 3;
})
console.log(newLanguages);


// meore metodi
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let newLanguages = languages.filter(item => item = item.length > 3);
console.log(newLanguages);



// 6.
let massive = [12, 'google', 32, null, 'yahoo', 25];
let newMassive = massive.map(function(item){
    if(typeof item === "number"){
        return item * 2;
    }else if(typeof item === "string"){
        return item.toUpperCase();
    }else{
        return item;
    }
})
console.log(newMassive);

// 7.
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let newWords = words.filter(function(item){
    return item = item.includes("m") || item.includes("M");
})
console.log(newWords);



// 8.
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let fullArr = arr1.concat(arr2,arr3);
console.log(fullArr);

// 9.
let arr = [1, 2, 3, 4, 5];


// 10.
let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
let newNumber = numbers.filter(item => item > 0);
console.log(newNumber);


// 11.
let arr = [-1, -2, -3, 4].some(item => item > 0);
console.log(arr);


// 12.
let array =[23,45,32,5,87,7,3,98];
array.sort(function(x,y){
    return y - x ;
})
console.log(array);

let minValue = array.sort( (x,y) => y - x)[7];
console.log(minValue);

// 13.
let array =[1, 2, 3, 4, 5];
array.splice(3,0, "a", "b", "c");
console.log(array);