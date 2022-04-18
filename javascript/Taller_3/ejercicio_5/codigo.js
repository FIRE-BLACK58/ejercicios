function par()
{   
    var pareCod="";
    var suma=0;
    //document.writeln("numeros pares entre 50 y 200");
    for (let index = 50; index <=200; index++)
     {
        if (index%2===0) 
        {
            //document.writeln("numero par: "+index+"<br>");
            suma+=index;
            pareCod+=index+"-";
        }
     }
    document.getElementById("pares").value=pareCod;
    document.getElementById("suma").value=suma;
}