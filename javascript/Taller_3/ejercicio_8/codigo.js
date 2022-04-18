function vector()
{
    var j=4,invVec="";
    var vector_1=[5];
    var vector_2=[5];
    for (let i = 0; i < 5; i++) 
    {
        vector_1 [i]=prompt("ingrese un valor");        
    }
    for (let i = 0; i < 5; i++) {
        vector_2 [j] = vector_1[i];
        j--;        
    }
    for (let i = 0; i < 5; i++) 
    {
        invVec+=vector_2[i];                      
    }
    document.getElementById("invVector").value=invVec;
}