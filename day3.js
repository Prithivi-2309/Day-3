//Q1 Print odd numbers in an array
//anonymous 
var getOddNumbers =function (data){

    for (var i=0; i<data.length; i++){
      if (i%2 == 1){
          console.log("Odd",(data[i]))
      }
    }
    }
getOddNumbers([1,2,3,4,56,79])

//ARROW
var getOddNumbers = (data)=>{

for (var i=0; i<data.length; i++){
  if (i%2 == 1){
      console.log("Odd",data[i])
  }
 
}
}

getOddNumbers([1,2,3,4,56,79])

//IIFE
(function (data){

    for (var i=0; i<data.length; i++){
      if (i%2 == 1){
          console.log("Odd",(data[i]))
      }
    }
    }
([1,2,3,4,56,79]))

//Q2 Convert all the strings to title caps in a string array
//anonymous 
var text = function(data){
    console.log(data.toUpperCase())
    }
text("guvi")

//ARROW
var text = (data)=>{
    console.log(data.toUpperCase())
}
text("guvi")
//IIFE
(function(data){
    console.log(data.toUpperCase())
    }
text("guvi"))

//Q3 Sum of all numbers in an array
//anonymous 
/ var array = function(data){
    let sum = 0;
    
    for(var i=0;i<data.length;i++){
     
    sum= sum + data[i];
    }
    console.log(sum);
    };
    
    array ([10,20]);
    
  //arrow  
    var array = (data)=>{
    let sum = 0;
    
    for(var i=0;i<data.length;i++){
     
    sum= sum + data[i];
    }
    console.log(sum);
    };
    array ([10,20]);
//IIFE
    (function(data){
        let sum = 0;
        
        for(var i=0;i<data.length;i++){
         
        sum= sum + data[i];
        }
        console.log(sum);
        };
        
        array ([10,20]))
//Q4 Return all the prime numbers in an array
//anonymous 
    var array = function(n) {   

for (var i=0;i<n.length;i++){

    if (n[i]%2===0){
         console.log(n[i],"- not a prime number")
    }
    else{
        console.log(n[i], "is a Prime number")
    }
    }                 
 
}

array ([2,23,4,3,9,6,21,10])
// arrow
var array = (n)=>{

for (var i=0;i<n.length;i++){

    if (n[i]%2===0){
         console.log(n[i],"- not a prime number")
    }
    else{
        console.log(n[i], "is a Prime number")
    }
    }                 
 
}

array ([2,23,4,3,9,6,21,10])
//IIFE
(function(n) {   

    for (var i=0;i<n.length;i++){
    
        if (n[i]%2===0){
             console.log(n[i],"- not a prime number")
        }
        else{
            console.log(n[i], "is a Prime number")
        }
        }                 
     
    }
    
    array ([2,23,4,3,9,6,21,10]))

//Q5 Remove duplicates from an array
//anonymous 
    let duparray = function (data){
            let nonduparray = [...new Set(data)]
            console.log(nonduparray)
        }
        duparray([1,4,6,10,12,1,6,10,2,6])
//arrow
    let duparray = (data)=>{
            let nonduparray = [...new Set(data)]
            console.log(nonduparray)
        }
        duparray([1,4,6,10,12,1,6,10,2,6])
//IIFE
    (function (data){
            let nonduparray = [...new Set(data)]
            console.log(nonduparray)
        }
        duparray([1,4,6,10,12,1,6,10,2,6]))

//Q6 Rotate an array by k times
//anonymous 
let array = function(data, rotate){
        for(let i=0;i<rotate;i++){
            data.unshift(data.pop())
            console.log(data)
        }
        }
        array([0,1,2,3,4,5],3)
//  arrow
    let array = (data, rotate) =>{
        for(var i=0;i<rotate;i++){
            data.unshift(data.pop())
            console.log(data)
        }
    }
    array([0,1,2,3,4,5],3)
//IIFE
    (function(data, rotate){
        for(let i=0;i<rotate;i++){
            data.unshift(data.pop())
            console.log(data)
        }
        }
        array([0,1,2,3,4,5],3))

