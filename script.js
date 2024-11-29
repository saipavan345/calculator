function val(n)
{
    
   var a=document.getElementById('screen');

   a.value+=n;//append the value to the input value

}
function res()
{
    var v=document.getElementById('screen').value;
    var b=eval(v);
    document.getElementById('screen').value=b;
}
function cancel()
{
    document.getElementById('screen').value='';
}
function remove()
{
   var a= document.getElementById('screen');
   a.value=a.value.slice(0,-1);

}
function toggle()
{
    var a=document.getElementById('screen');
    a.value=(parseFloat(a.value)*-1).toString();
}


