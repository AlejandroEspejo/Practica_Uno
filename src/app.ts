let array : Array<string> = ['kambei', 'gorobei', 'shichiroji', 'kyuzo', 'heihachi', 'katsushiro', 'kikuchiyo'];
let count = 0;
for(let i=0 ; i<array.length ; i++)
    for(let j=i+1 ; j<array.length ; j++)
        if(array[i].charAt(0)==array[j].charAt(0))
        {
            array[i]="_";
            array[j]="_";
            count++;
        }
console.log(count);