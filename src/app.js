var number = 83;
var count = 0;
var bool;
for (var i = 1; i <= number; i++) {
    if (number % i == 0)
        count++;
}
if (count == 2)
    console.log("True");
else
    console.log("false");
