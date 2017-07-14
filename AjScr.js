function makeOpts() {
  var i=document.getElementById('numval');
  var n=i.value;
  if(n<1){
    //alert("mistake!!!");
    i.style.backgroundColor="#ff3333";
    document.getElementById('misShow').style.display="block";
  }
  else {
    var Request= new XMLHttpRequest()
    Request.onreadystatechange=function()
    {
      if(Request.readyState== 4&&Request.status==200)
      {
        document.getElementById("selPaste").innerHTML=Request.responseText;
      }
    };
    Request.open("GET","ffd.php?q="+n,true)
    Request.send();
  }
}
function changeToWhite() {
  var i= document.getElementById('numval');
  i.style.backgroundColor="ffffff";
  document.getElementById('misShow').style.display="none";
  document.getElementById('numval').value ="";
}
