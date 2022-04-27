const characters = ['a','i','|','!','@','#','$','%','^','&','*','(',')','ü','£','¡','∑','ª','º','‡','€','ç','ß','Ω','p','≥','≈','ÿ','√','◊','µ','Â','≠','','Ø','‰','™','±','L'];
function randChar() {
  return characters[Math.floor(Math.random()*characters.length)];
}
function assign(id, dent) {
  const element = document.getElementById(id);
  element.innerHTML = "";
  var length = Math.floor(Math.random()*10)+35;
  for (var i = 0; i < length; i++) {
    element.innerHTML += randChar() + "​";
    // element.innerHTML += "<span style='color: rgb(0,"+ (255*(1-(i/length))) +",0)'>" + randChar() + "</span>​";//zws at end
  }
  if (dent) element.style = "margin-left:"+(Math.floor(Math.random()*100)+50)+"px";
}
function assignLoop(id, n, dent) {
  for (var i = 1; i <= n; i++) {
    assign(id + i, dent);
  }
}
