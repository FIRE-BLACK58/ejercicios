function ingresar()
{
    var aleatorio = math.round(matn.ramdom()*10);
    rta-0, cont=0;
    while (rta !=aleatorio)
    {
        rta=prompt("ingrese un numero entre 1 y 10: ");
        cont++;
    }
    if (cont<=5)
    {
        alert("usted ha ganado, tuvo "+cont+" intentos: el numero ganador fue: "+aleatorio);
    }
    else
    {
        alert("usted ha perdido, tuvo "+cont+" intentos: el numero ganador fue: "+aleatorio);
    }
}