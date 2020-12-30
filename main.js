

var btn = document.querySelector("button");
var cont = document.querySelector(".popUp");

btn.addEventListener('click', function(){
  cont.id = "show";
});

cont.addEventListener('click', function(e){
  if(e.target == this){
  this.id = "hidden";}
  e.preventDefault;
});
