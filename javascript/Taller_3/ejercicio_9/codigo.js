function notas()
{
    var vector_1=[5];
    var TodasNotas="";
    var NotaMayor="";
    var NotaMenor="";
    var NotaPromedio;
    for (let i = 0; i < 5; i++) 
    {
        vector_1[i] = parseFloat( prompt ("ingrese una nota"));
        //acumular
        TodasNotas += vector_1[i];
    }
    //promedio
    NotaPromedio = TodasNotas/5;
    NotaMayor = Math.max(...vector_1);
    NotaMenor = Math.min(...vector_1);
    document.getElementById("TodasNotas").value=TodasNotas;
    document.getElementById("NotaMayor").value=NotaMayor;
    document.getElementById("NotaMenor").value=NotaMenor;
    document.getElementById("NotaPromedio").value=NotaPromedio;
}