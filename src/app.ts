var string1 = "bangnab"
var string2 = "";
for(let i=string1.length ; i>=0 ; i--)
    string2=string2+string1.charAt(i);
if(string1 == string2)
    console.log("true");
else
    console.log("false");