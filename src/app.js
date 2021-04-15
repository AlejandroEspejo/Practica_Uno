var array = [6, 2, 3, 8];
var count = 0;
for (var i = 0; i < array.length; i++)
    for (var j = i + 1; j < array.length; j++)
        if (array[i] > array[j]) {
            var aux = array[i];
            array[i] = array[j];
            array[j] = aux;
        }
for (var i = array.length - 1; i > 0; i--)
    count = count + ((array[i] - array[i - 1]) - 1);
console.log(count);
