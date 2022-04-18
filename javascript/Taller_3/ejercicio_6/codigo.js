function temp()
{
    var celcius=0, fahrenheit=0;
    const constante=(1.80);
    celcius=eval(document.getElementById("valor").value);
    fahrenheit=((constante*celcius)+32);
    document.getElementById("fah").value=fahrenheit;
    document.getElementById("cent").value=celcius;
}
function temp2()
{
    var celcius=0, fahrenheit=0;
    const constante=(0.5555);
    fahrenheit=eval(document.getElementById("valor2").value);
    celcius=((fahrenheit-32)*constante);
    document.getElementById("fah").value=fahrenheit;
    document.getElementById("cent").value=celcius;
}