let array : number[] = [6, 2, 3, 8];
let count = 0;
for(let i=0 ; i<array.length ; i++)
    for(let j=i+1 ; j<array.length ; j++)
        if(array[i]>array[j])
        {
            let aux = array[i];
            array[i] = array[j];
            array[j] = aux;
        }
for (let i = array.length-1 ; i>0 ; i--)
    count=count+((array[i]-array[i-1])-1) ;
console.log(count);