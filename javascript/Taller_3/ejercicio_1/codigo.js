function numeros()
{
    var num1=0, num2=0, num3=0, prod=0, sum=0;
    num1=eval(document.getElementById("txtNumero1").value);
    num2=eval(document.getElementById("txtNumero2").value);
    num3=eval(document.getElementById("txtNumero3").value);

    if(num1>0)
    {
        prod=(num2*num3);
        //document.writeln("el producto de los numeros es: "+prod);
    }
    else
    {
        sum=(num2*num3);
        //document.writeln("la suma de los numeros es: "+sum);
    }
    document.getElementById("prod").value=prod;
    document.getElementById("suma").value=sum;
}