function multiplo()
{
    var cont=0, imprimir=0, sum=0;

    for(var i=0; i<100; i++)
    {
        imprimir +=1;
        cont += 3;
        sum+=cont;
        if(imprimir <6)
        {
            document.writeln(cont);
            //document.getElementById ("serie").value=cont;
        }
    }
    
    document.getElementById("suma").value=sum;
}

