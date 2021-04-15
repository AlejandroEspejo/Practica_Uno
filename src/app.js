var string = "172.16.254.1" + " ";
var count = 0;
var number = "";
var comp = 1;
if (string.charAt(0) == '.' || string.charAt(string.length - 1) == '.')
    console.log("false");
else
    for (var i = 0; i < string.length - 1; i++)
        if (string.charAt(i) != '.')
            number = number + string.charAt(i);
        else {
            if (Number(number) > 255)
                comp = 0;
            count++;
            number = "";
        }
if (comp == 1 && count == 3)
    console.log("True");
else
    console.log("False");
