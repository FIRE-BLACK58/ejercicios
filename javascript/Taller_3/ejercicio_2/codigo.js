function suma()
{
    var num1=0,num2=0,num3=0;
    num1=eval(document.getElementById("txtNumero1").value);
    num2=eval(document.getElementById("txtNumero2").value);
    num3=eval(document.getElementById("txtNumero3").value);

    if(num1+num2 === num3)
    {
        document.writeln("la suma de los numeros "+num1+" y "+num2+" concide con el numero: "+num3);
    }
    else if (num3+num2 === num1)
    {
        document.writeln("la suma de los numeros " + num2 + " y " + num3 + " concide con el numero: " + num1);
    }
    else if (num1+num3 === num2)
    {
        document.writeln("la suma de los numeros " + num1 + " y " + num3 + " concide con el numero: " + num2);
    }
    else
    {
        document.writeln("la suma de los numeros no coinciden entre ellos");
    }
}