/*Új dolgozó felvitele*/

function ujDolg(){
  var vnev = document.getElementById('vnev').value;
  var knev = document.getElementById('knev').value;
  var table = document.getElementsByTagName('table')[0];
  var dolgozo = table.insertRow(0);
  var cell1 = dolgozo.insertCell(0);
  var cell2 = dolgozo.insertCell(1);
  cell1.innerHTML = vnev;
  cell2.innerHTML = knev;
}


/*Munkaóra kiszámítás*/

var munkaOra = 0;
var pi = 0;
var sz =0;



  function myInputM(){

    var mn = document.getElementById("myinput")
    var pi = document.getElementById("myinputP")
    var sz = document.getElementById("myinputSZ1")

  if (mn.clicked=true) {
    munkaOra =+11;
    pi = 0;
    sz = 0;
}
console.log(munkaOra);
console.log(sz);

}
