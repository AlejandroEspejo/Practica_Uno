let array : number[] = [3, 6, -2, -5, 7, 3];
var number=array[0]*array[1];
for(let i=1 ; i<array.length-1 ; i++)
    if(array[i]*array[i+1]>number)
        number=array[i]*array[i+1];
console.log(number);