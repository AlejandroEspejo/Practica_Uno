var string1 = "aabcc";
var string2 = "adcaa";
var array = [];
var count = 0;
for (var i = 0; i < string2.length; i++)
    array[i] = string2.charAt(i);
for (var i = 0; i < string1.length; i++)
    for (var j = 0; j < array.length; j++)
        if (string1.charAt(i) == array[j] && array[j] != "") {
            count++;
            array[j] = "";
            break;
        }
console.log(count);
