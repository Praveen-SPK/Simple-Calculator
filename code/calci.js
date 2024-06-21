function NumberToDisplay(a)
{
    document.getElementById("key").value+=a;
}
function Calculate()
{
    try{
        var a=document.getElementById("key").value;
        document.getElementById("key").value=eval(a);   
    }
    catch(error){
        document.getElementById("key").value="Syntax Error !!!";
    }
}
function Clear()
{
  document.getElementById("key").value="";
}