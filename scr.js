function al()
{
  //alert("hello!");
  var i=document.getElementById("hideble");
  if(i.style.display=="none")
    i.style.display="block";
  else {
    i.style.display="none";
  }
}
function makeOpts() {
  var i=document.getElementById('numval');
  var n=i.value;
  n=Math.sqrt(n*n);
  document.write("<select");
  for (var i = 0; i < n; i++) {

  }
  document.write("
  <p>
    <input type=&quot;submit&quot; ></input></p>");
}
elem.onclick=al;
