var array = ['kambei', 'gorobei', 'shichiroji', 'kyuzo', 'heihachi', 'katsushiro', 'kikuchiyo'];
var count = 0;
for (var i = 0; i < array.length; i++)
    for (var j = i + 1; j < array.length; j++)
        if (array[i].charAt(0) == array[j].charAt(0)) {
            array[i] = "_";
            array[j] = "_";
            count++;
        }
console.log(count);
