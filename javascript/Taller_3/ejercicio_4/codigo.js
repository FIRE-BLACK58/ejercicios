function pot()
{
    let base2 = 2;
    for (let i = 0; i <=100; i++) 
    {
        var pow_2 = Math.pow(base2, i);
        //document.getElementById("potencia").value=pow_2;
        document.writeln(" 2 a la potencia de "+i+" es igual a: "+pow_2+"<br>");
        
    }
}