let number=9;
let count=1;
let count2=2;
while(count<=number)
{
    let aux=0;
    for (let i = 1; i <= count2; i++)
        if(count2%i==0)
            aux++;
    if(aux==2)
    {
        console.log(count2);
        count++;   
    }
    count2++;    
}