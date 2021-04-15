var number = 9;
var count = 1;
var count2 = 2;
while (count <= number) {
    var aux = 0;
    for (var i = 1; i <= count2; i++)
        if (count2 % i == 0)
            aux++;
    if (aux == 2) {
        console.log(count2);
        count++;
    }
    count2++;
}
