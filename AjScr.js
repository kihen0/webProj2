function makeOpts() {
  var i=document.getElementById('numval');
  var n=i.value;
  if(n<1){
    alert("mistake!!!");
    i.style.backgroundColor="#ff3333";
  }
}
function changeToWhite() {
  var i= document.getElementById('numval');
  i.style.backgroundColor="ffffff";

}
