function hora()
{
    var horas=0, minutos=0, horasMil=0;
    horas=eval(document.getElementById("horas12").value);
    minutos=eval(document.getElementById("minutos12").value);
    //conversion
    if (horas>12)
    {
        horasMil = horas - 12;
        document.getElementById("horas24").value=horasMil;
        document.getElementById("minutos24").value=minutos;
        document.getElementById("am/pm").value='pm';
    }
    else
    {
        document.getElementById("horas24").value=horas;
        document.getElementById("minutos24").value=minutos;
        document.getElementById("am/pm").value='am';
    }
}