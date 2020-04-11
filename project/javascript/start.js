
 function getArraySum(number){   var sum=0;
    for(var i=0; i<number.length;i++ ){
        var arrayElements=number[i];
        sum=sum+arrayElements;
           }
    return sum;}

var number=[1,2,3,4,5,6,7,8,9,10];
var result=getArraySum(number);
console.log(result);
