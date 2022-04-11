var characters = ['a','i','|','!','@','#','$','%','^','&','*','(',')','ü','£','¡','∑','ª','º','‡','€','ç','ß','Ω','p','≥','≈','ÿ','√','◊','µ','Â'];
var values = [255,247,240,233,225,218,211,204,196,189,182,174,167,160,153,145,138,131,123,116,109,102,94,87,80,72,65,58,51,43,36,29,21,14,7,1,1,1,1,1,1,1,1,1,1,1,1]
function randChar() {
  return characters[Math.floor(Math.random()*characters.length)];
}
function assign(id, dent) {
  document.getElementById(id).innerHTML = "";
  var length = Math.floor(Math.random()*10)+35;
  for (var i = 0; i < length; i++) {
    document.getElementById(id).innerHTML += "<span style='color: rgb(0,"+ values[i] +",0)'>" + randChar() + "</span>​";//zws at end
  }
  if (dent) document.getElementById(id).style = "margin-left:"+(Math.floor(Math.random()*100)+50)+"px";
}
function assignLoop(id, n, dent) {
  var numId;
  for (var i = 1; i <= n; i++) {
    numId = id + i;
    assign(numId, dent);
  }
}
